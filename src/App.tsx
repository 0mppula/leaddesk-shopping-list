import logo from './assets/logo.svg';
import EditShoppingListItemModal from './components/EditShoppingListItemModal';
import ShoppingList from './components/ShoppingList';
import { Card } from './components/ui/card';
import { Separator } from './components/ui/separator';
import ShoppingListForm from './components/ui/ShoppingListForm';
import { Toaster } from './components/ui/sonner';

function App() {
	return (
		<main className="pb-32 overflow-x-auto mx-auto px-6 md:px-8 pt-6 lg:pt-12 flex flex-col items-center min-h-screen max-w-5xl space-y-4">
			<EditShoppingListItemModal />

			<div className="flex items-center gap-4 mb-8">
				<img src={logo} className="size-16 hidden md:block" alt="Shopping List logo" />

				<h1 className="font-roboto-mono scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
					Shopping List
				</h1>
			</div>

			<Card className="p-4 gap-4">
				<ShoppingList />

				<Separator className="mt-4 w-full border-t-2 border-dashed bg-primary-neutral" />

				<div className="flex flex-col gap-4">
					<h2 className="mt-10 scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0">
						Add new Products
					</h2>

					<ShoppingListForm />
				</div>
			</Card>

			<Toaster />
		</main>
	);
}

export default App;
