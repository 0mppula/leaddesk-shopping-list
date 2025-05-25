import type { IShoppingItem } from '@/features/shopping/shoppingSlice';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const generateRandomShoppingListItems = (count: number = 15): IShoppingItem[] => {
	const items: IShoppingItem[] = [];
	const now = new Date();

	for (let i = 0; i < count; i++) {
		const id = crypto.randomUUID();
		const name = `Item ${id}`;
		const amount = Math.floor(Math.random() * 15) + 1;

		const createdAt = new Date(
			now.getTime() - Math.floor(Math.random() * 10_000_000)
		).toISOString();
		const updatedAt = new Date(createdAt).toISOString();

		items.push({
			id,
			name,
			amount,
			createdAt,
			updatedAt,
		});
	}

	return items;
};
