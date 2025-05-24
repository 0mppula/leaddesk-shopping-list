import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface ShoppingItem {
	id: string;
	name: string;
	amount: number;

	createdAt: Date;
	updatedAt: Date;
}

export interface ShoppingItemPayload {
	id: string;
	name: string;
	amount: number;
}

const initialItems: ShoppingItem[] = [
	{
		id: '1',
		name: 'Apples',
		amount: 5,
		createdAt: new Date('2025-05-24T10:00:00.000Z'),
		updatedAt: new Date('2025-05-24T10:00:00.000Z'),
	},
	{
		id: '2',
		name: 'Milk',
		amount: 2,
		createdAt: new Date('2025-05-24T10:01:00.000Z'),
		updatedAt: new Date('2025-05-24T10:01:00.000Z'),
	},
	{
		id: '3',
		name: 'Bread',
		amount: 1,
		createdAt: new Date('2025-05-24T10:02:00.000Z'),
		updatedAt: new Date('2025-05-24T10:02:00.000Z'),
	},
	{
		id: '4',
		name: 'Butter',
		amount: 1,
		createdAt: new Date('2025-05-24T10:03:00.000Z'),
		updatedAt: new Date('2025-05-24T10:03:00.000Z'),
	},
	{
		id: '5',
		name: 'Eggs',
		amount: 12,
		createdAt: new Date('2025-05-24T10:04:00.000Z'),
		updatedAt: new Date('2025-05-24T10:04:00.000Z'),
	},
	{
		id: '6',
		name: 'Cheese',
		amount: 1,
		createdAt: new Date('2025-05-24T10:05:00.000Z'),
		updatedAt: new Date('2025-05-24T10:05:00.000Z'),
	},
	{
		id: '7',
		name: 'Orange Juice',
		amount: 2,
		createdAt: new Date('2025-05-24T10:06:00.000Z'),
		updatedAt: new Date('2025-05-24T10:06:00.000Z'),
	},
	{
		id: '8',
		name: 'Bananas',
		amount: 6,
		createdAt: new Date('2025-05-24T10:07:00.000Z'),
		updatedAt: new Date('2025-05-24T10:07:00.000Z'),
	},
	{
		id: '9',
		name: 'Tomatoes',
		amount: 4,
		createdAt: new Date('2025-05-24T10:08:00.000Z'),
		updatedAt: new Date('2025-05-24T10:08:00.000Z'),
	},
	{
		id: '10',
		name: 'Lettuce',
		amount: 1,
		createdAt: new Date('2025-05-24T10:09:00.000Z'),
		updatedAt: new Date('2025-05-24T10:09:00.000Z'),
	},
	{
		id: '11',
		name: 'Carrots',
		amount: 3,
		createdAt: new Date('2025-05-24T10:10:00.000Z'),
		updatedAt: new Date('2025-05-24T10:10:00.000Z'),
	},
	{
		id: '12',
		name: 'Yogurt',
		amount: 4,
		createdAt: new Date('2025-05-24T10:11:00.000Z'),
		updatedAt: new Date('2025-05-24T10:11:00.000Z'),
	},
	{
		id: '13',
		name: 'Chicken Breast',
		amount: 2,
		createdAt: new Date('2025-05-24T10:12:00.000Z'),
		updatedAt: new Date('2025-05-24T10:12:00.000Z'),
	},
	{
		id: '14',
		name: 'Pasta',
		amount: 1,
		createdAt: new Date('2025-05-24T10:13:00.000Z'),
		updatedAt: new Date('2025-05-24T10:13:00.000Z'),
	},
	{
		id: '15',
		name: 'Olive Oil',
		amount: 1,
		createdAt: new Date('2025-05-24T10:14:00.000Z'),
		updatedAt: new Date('2025-05-24T10:14:00.000Z'),
	},
];

const initialState: ShoppingItem[] = initialItems;

const shoppingSlice = createSlice({
	name: 'shopping',
	initialState,
	reducers: {
		itemAdded(state, action: PayloadAction<ShoppingItemPayload>) {
			state.push({
				id: action.payload.id,
				name: action.payload.name,
				amount: action.payload.amount,

				createdAt: new Date(),
				updatedAt: new Date(),
			});
		},
	},
});

export const { itemAdded } = shoppingSlice.actions;
export default shoppingSlice.reducer;
