import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import {
	removeItem,
	setEditedItem,
	toggleEditModal,
	type IShoppingItem,
} from '@/features/shopping/shoppingSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { Pen, Trash2 } from 'lucide-react';
import { Fragment } from 'react';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { ScrollArea, ScrollBar } from './ui/scroll-area';

const ShoppingList = () => {
	const { shoppingListItems } = useAppSelector((state) => state.shoppingListItems);
	const dispatch = useAppDispatch();

	const handleDeleteItem = (id: string) => {
		const item = shoppingListItems.find((item) => item.id === id);
		if (!item) return;

		dispatch(removeItem(id));
		toast(`"${item.name}" deleted successfully!`);
	};

	const handleModalOpen = (editedItem: IShoppingItem) => {
		dispatch(toggleEditModal(true));
		dispatch(setEditedItem(editedItem));
	};

	return (
		<ScrollArea className="pr-2 overflow-contain grid h-[480px] w-full grid-cols-1 overflow-auto">
			<Table className="table-fixed w-full min-w-96">
				<TableCaption className="sr-only">A list of your shopping items.</TableCaption>

				<TableHeader>
					<TableRow>
						<TableHead className="w-full">
							Item (total {shoppingListItems.length})
						</TableHead>
						<TableHead className="w-[80px]">Amount</TableHead>
						<TableHead className="w-[104px]"></TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					{shoppingListItems.map((item, i) => (
						<TableRow key={item.id + i}>
							<Fragment>
								<TableCell className="font-medium">{item.name}</TableCell>

								<TableCell>{item.amount}</TableCell>

								<TableCell>
									<div className="flex items-center justify-end gap-2">
										<Button
											variant="outline"
											onClick={() => handleModalOpen(item)}
											aria-label={`Edit ${item.name}`}
										>
											<Pen aria-hidden />
										</Button>

										<Button
											onClick={() => handleDeleteItem(item.id)}
											variant="destructive"
											aria-label={`Delete ${item.name}`}
										>
											<Trash2 aria-hidden />
										</Button>
									</div>
								</TableCell>
							</Fragment>
						</TableRow>
					))}
				</TableBody>
			</Table>

			<ScrollBar orientation="horizontal" />
		</ScrollArea>
	);
};

export default ShoppingList;
