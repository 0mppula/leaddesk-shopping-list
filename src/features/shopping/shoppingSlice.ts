import { generateRandomShoppingListItems } from '@/lib/utils';
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

// Generate a random number of items between 5 and 15 for initial state.
const initialItems = generateRandomShoppingListItems(Math.floor(Math.random() * 11) + 5);

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
		setEditedItem(state, action: PayloadAction<IShoppingItem | null>) {
			state.editedItem = action.payload;
		},
	},
});

export const { addItem, removeItem, editItem, toggleEditModal, setEditedItem } =
	shoppingSlice.actions;
export default shoppingSlice.reducer;
