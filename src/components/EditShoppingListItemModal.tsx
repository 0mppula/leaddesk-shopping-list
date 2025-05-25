import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { editItem, toggleEditModal } from '@/features/shopping/shoppingSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { shoppingListformSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import FormErrors, { getErrorMessages } from './FormErrors';
import { Button } from './ui/button';
import { Input } from './ui/input';

const EditShoppingListItemModal = () => {
	const dispatch = useAppDispatch();
	const { editedItem, editModalOpen } = useAppSelector((state) => state.shoppingListItems);

	useEffect(() => {
		if (!editedItem) return;

		form.reset({
			name: editedItem.name,
			amount: editedItem.amount,
		});
	}, [editedItem]);

	const form = useForm<z.infer<typeof shoppingListformSchema>>({
		resolver: zodResolver(shoppingListformSchema),
		defaultValues: {
			name: '',
			amount: 1,
		},
	});

	const onSubmit = (values: z.infer<typeof shoppingListformSchema>) => {
		if (!editedItem) return;

		// Dont edit if the values are the same.
		if (editedItem.name === values.name && editedItem.amount === values.amount) {
			dispatch(toggleEditModal(false));
			return;
		}

		const newItem = {
			...editedItem,
			name: values.name,
			amount: values.amount,
			updatedAt: new Date().toISOString(),
		};

		dispatch(editItem(newItem));
		toast('Item edited successfully!');
	};

	return (
		<Dialog open={editModalOpen} onOpenChange={(open) => dispatch(toggleEditModal(open))}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Edit Item: {editedItem?.name}</DialogTitle>
				</DialogHeader>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex flex-col gap-2 gap-y-4"
					>
						<div className="flex items-center gap-2">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormControl>
											<Input placeholder="Add a new item..." {...field} />
										</FormControl>
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="amount"
								render={({ field }) => (
									<FormItem className="w-20">
										<FormControl>
											<Input type="number" placeholder="12" {...field} />
										</FormControl>
									</FormItem>
								)}
							/>
						</div>

						<DialogFooter>
							<DialogClose asChild>
								<Button type="button" variant="secondary">
									Cancel
								</Button>
							</DialogClose>

							<Button>Edit</Button>
						</DialogFooter>
					</form>

					<FormErrors errors={getErrorMessages(form.formState.errors)} />
				</Form>
			</DialogContent>
		</Dialog>
	);
};

export default EditShoppingListItemModal;
