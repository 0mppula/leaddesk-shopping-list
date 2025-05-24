import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface IShoppingItem {
	id: string;
	name: string;
	amount: number;
	createdAt: string;
	updatedAt: string;
}

interface IShoppingState {
	shoppingListItems: IShoppingItem[];
	editedItem: IShoppingItem | null;
	editModalOpen: boolean;
}

export interface ShoppingItemPayload {
	id: string;
	name: string;
	amount: number;
}

const initialItems: IShoppingItem[] = [
	{
		id: '1',
		name: 'Apples',
		amount: 5,
		createdAt: new Date('2025-05-24T10:00:00.000Z').toISOString(),
		updatedAt: new Date('2025-05-24T10:00:00.000Z').toISOString(),
	},
	{
		id: '2',
		name: 'Milk',
		amount: 2,
		createdAt: new Date('2025-05-24T10:01:00.000Z').toISOString(),
		updatedAt: new Date('2025-05-24T10:01:00.000Z').toISOString(),
	},
	{
		id: '3',
		name: 'Bread',
		amount: 1,
		createdAt: new Date('2025-05-24T10:02:00.000Z').toISOString(),
		updatedAt: new Date('2025-05-24T10:02:00.000Z').toISOString(),
	},
	{
		id: '4',
		name: 'Butter',
		amount: 1,
		createdAt: new Date('2025-05-24T10:03:00.000Z').toISOString(),
		updatedAt: new Date('2025-05-24T10:03:00.000Z').toISOString(),
	},
	{
		id: '5',
		name: 'Eggs',
		amount: 12,
		createdAt: new Date('2025-05-24T10:04:00.000Z').toISOString(),
		updatedAt: new Date('2025-05-24T10:04:00.000Z').toISOString(),
	},
	{
		id: '6',
		name: 'Cheese',
		amount: 1,
		createdAt: new Date('2025-05-24T10:05:00.000Z').toISOString(),
		updatedAt: new Date('2025-05-24T10:05:00.000Z').toISOString(),
	},
	{
		id: '7',
		name: 'Orange Juice',
		amount: 2,
		createdAt: new Date('2025-05-24T10:06:00.000Z').toISOString(),
		updatedAt: new Date('2025-05-24T10:06:00.000Z').toISOString(),
	},
	{
		id: '8',
		name: 'Bananas',
		amount: 6,
		createdAt: new Date('2025-05-24T10:07:00.000Z').toISOString(),
		updatedAt: new Date('2025-05-24T10:07:00.000Z').toISOString(),
	},
	{
		id: '9',
		name: 'Tomatoes',
		amount: 4,
		createdAt: new Date('2025-05-24T10:08:00.000Z').toISOString(),
		updatedAt: new Date('2025-05-24T10:08:00.000Z').toISOString(),
	},
	{
		id: '10',
		name: 'Lettuce',
		amount: 1,
		createdAt: new Date('2025-05-24T10:09:00.000Z').toISOString(),
		updatedAt: new Date('2025-05-24T10:09:00.000Z').toISOString(),
	},
	{
		id: '11',
		name: 'Carrots',
		amount: 3,
		createdAt: new Date('2025-05-24T10:10:00.000Z').toISOString(),
		updatedAt: new Date('2025-05-24T10:10:00.000Z').toISOString(),
	},
	{
		id: '12',
		name: 'Yogurt',
		amount: 4,
		createdAt: new Date('2025-05-24T10:11:00.000Z').toISOString(),
		updatedAt: new Date('2025-05-24T10:11:00.000Z').toISOString(),
	},
	{
		id: '13',
		name: 'Chicken Breast',
		amount: 2,
		createdAt: new Date('2025-05-24T10:12:00.000Z').toISOString(),
		updatedAt: new Date('2025-05-24T10:12:00.000Z').toISOString(),
	},
	{
		id: '14',
		name: 'Pasta',
		amount: 1,
		createdAt: new Date('2025-05-24T10:13:00.000Z').toISOString(),
		updatedAt: new Date('2025-05-24T10:13:00.000Z').toISOString(),
	},
	{
		id: '15',
		name: 'Olive Oil',
		amount: 1,
		createdAt: new Date('2025-05-24T10:14:00.000Z').toISOString(),
		updatedAt: new Date('2025-05-24T10:14:00.000Z').toISOString(),
	},
];

const initialState: IShoppingState = {
	shoppingListItems: initialItems,
	editedItem: null,
	editModalOpen: false,
};

const shoppingSlice = createSlice({
	name: 'shopping',
	initialState,
	reducers: {
		addItem(state, action: PayloadAction<ShoppingItemPayload>) {
			state.shoppingListItems.push({
				id: action.payload.id,
				name: action.payload.name,
				amount: action.payload.amount,

				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString(),
			});
		},
		removeItem(state, action: PayloadAction<string>) {
			const index = state.shoppingListItems.findIndex((item) => item.id === action.payload);

			if (index !== -1) {
				state.shoppingListItems.splice(index, 1);
			}
		},
		editItem(state, action: PayloadAction<ShoppingItemPayload>) {
			const item = state.shoppingListItems.find((item) => item.id === action.payload.id);

			if (item) {
				item.name = action.payload.name;
				item.amount = action.payload.amount;
				item.updatedAt = new Date().toISOString();
			}

			state.editedItem = null;
			state.editModalOpen = false;
		},
		toggleEditModal(state, action: PayloadAction<boolean>) {
			state.editModalOpen = action.payload;
		},
		setEditedItem(state, action: PayloadAction<IShoppingItem>) {
			state.editedItem = action.payload;
		},
	},
});

export const { addItem, removeItem, editItem, toggleEditModal, setEditedItem } =
	shoppingSlice.actions;
export default shoppingSlice.reducer;
