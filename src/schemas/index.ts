import { z } from 'zod';

export const shoppingListformSchema = z.object({
	name: z
		.string()
		.min(2, {
			message: 'Name must be at least 2 characters long',
		})
		.max(50, {
			message: 'Name must not exceed 50 characters',
		})
		.max(50, {
			message: 'Name must not exceed 50 characters',
		}),
	amount: z.coerce
		.number()
		.min(1, {
			message: 'Amount must be at least 1',
		})
		.max(1000, {
			message: 'Amount must not exceed 1000',
		})
		.max(1000),
});
