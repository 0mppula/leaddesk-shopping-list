import { configureStore } from '@reduxjs/toolkit';
import shoppingReducer from '../features/shopping/shoppingSlice';

export const store = configureStore({
	reducer: {
		shoppingListItems: shoppingReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
