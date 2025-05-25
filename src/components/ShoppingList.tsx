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
import { Fragment, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { ScrollArea, ScrollBar } from './ui/scroll-area';

const ShoppingList = () => {
	const { shoppingListItems } = useAppSelector((state) => state.shoppingListItems);
	const dispatch = useAppDispatch();

	const lastItemRef = useRef<HTMLTableRowElement>(null);
	const prevLengthRef = useRef(shoppingListItems.length);

	// Scroll to bottom of the list whenever a new item is added.
	useEffect(() => {
		// Do not scroll when an item is removed or on initial render.
		if (shoppingListItems.length > prevLengthRef.current) {
			if (lastItemRef.current) {
				lastItemRef.current.scrollIntoView({ behavior: 'smooth' });
			}
		}

		// Update previous length for next render
		prevLengthRef.current = shoppingListItems.length;
	}, [shoppingListItems.length]);

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
					{shoppingListItems.length === 0 ? (
						<TableRow>
							<TableCell
								colSpan={3}
								className="text-center text-muted-foreground px-4 py-36 break-words whitespace-normal overflow-hidden"
							>
								No items in your shopping list. Add some items to get started!
							</TableCell>
						</TableRow>
					) : (
						<>
							{shoppingListItems.map((item, i) => (
								<TableRow
									key={item.id + i}
									ref={i === shoppingListItems.length - 1 ? lastItemRef : null}
								>
									<Fragment>
										<TableCell className="font-medium break-words whitespace-normal overflow-hidden">
											{item.name}
										</TableCell>

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
						</>
					)}
				</TableBody>
			</Table>

			<ScrollBar orientation="horizontal" />
		</ScrollArea>
	);
};

export default ShoppingList;
