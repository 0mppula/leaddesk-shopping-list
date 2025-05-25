import App from '@/App';
import shoppingReducer from '@/features/shopping/shoppingSlice';
import { generateRandomShoppingListItems } from '@/lib/utils';
import { configureStore } from '@reduxjs/toolkit';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { beforeEach, describe, expect, it } from 'vitest';

// Define the root reducer shape
const store = configureStore({
	reducer: {
		shoppingListItems: shoppingReducer,
	},
});

// Infer the store type from the configured store
type AppStore = typeof store;

describe('App Component', () => {
	let store: AppStore;

	beforeEach(() => {
		store = configureStore({
			reducer: {
				shoppingListItems: shoppingReducer,
			},
		});
	});

	it('renders the main heading', () => {
		render(React.createElement(Provider, { store, children: React.createElement(App) }));
		const heading = screen.getByTestId('title');

		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent(/Shopping List$/);
	});

	it('renders the add new products heading', () => {
		render(React.createElement(Provider, { store, children: React.createElement(App) }));
		const heading = screen.getByTestId('add-new-products');

		expect(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent(/Add new Products$/);
	});
	it('renders ShoppingListForm input and button', () => {
		render(React.createElement(Provider, { store, children: React.createElement(App) }));

		const nameInput = screen.getByTestId(/shopping-list-name-input/i);
		const button = screen.getByTestId(/shopping-list-add-button/i);

		expect(nameInput).toBeInTheDocument();
		expect(button).toBeInTheDocument();
	});
	it('renders ShoppingList with 5-15 items', () => {
		const initialItems = generateRandomShoppingListItems(Math.floor(Math.random() * 11) + 5);

		const preloadedState = {
			shoppingListItems: {
				shoppingListItems: initialItems,
				editedItem: null,
				editModalOpen: false,
			},
		};

		const store = configureStore({
			reducer: {
				shoppingListItems: shoppingReducer,
			},
			preloadedState,
		});

		render(React.createElement(Provider, { store, children: React.createElement(App) }));

		const table = screen.getByTestId('shopping-list-table');
		const rowgroups = within(table).getAllByRole('rowgroup');
		const tbody = rowgroups[1];
		const rows = within(tbody).getAllByRole('row');

		expect(rows.length).toBeGreaterThanOrEqual(5);
		expect(rows.length).toBeLessThanOrEqual(15);
	});
	it('Creates a new item when form is submitted', async () => {
		const initialItems = generateRandomShoppingListItems(Math.floor(Math.random() * 11) + 5);

		const preloadedState = {
			shoppingListItems: {
				shoppingListItems: initialItems,
				editedItem: null,
				editModalOpen: false,
			},
		};

		const store = configureStore({
			reducer: {
				shoppingListItems: shoppingReducer,
			},
			preloadedState,
		});

		render(React.createElement(Provider, { store, children: React.createElement(App) }));

		const nameInput = screen.getByTestId(/shopping-list-name-input/i);
		const amountInput = screen.getByTestId(/shopping-list-amount-input/i);
		const button = screen.getByTestId(/shopping-list-add-button/i);

		expect(nameInput).toBeInTheDocument();
		expect(amountInput).toBeInTheDocument();
		expect(button).toBeInTheDocument();

		await userEvent.type(nameInput, 'New Item');
		await userEvent.type(amountInput, '1');
		await userEvent.click(button);

		const table = screen.getByTestId('shopping-list-table') as HTMLElement;
		const tbody = table.querySelector('tbody')!;
		const newRow = within(tbody).getByText('New Item');

		expect(newRow).toBeInTheDocument();
	});
});
