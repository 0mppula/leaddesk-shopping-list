import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { addItem } from '@/features/shopping/shoppingSlice';
import { useAppDispatch } from '@/hooks';
import { shoppingListformSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { Button } from './button';

const ShoppingListForm = () => {
	const dispatch = useAppDispatch();

	const form = useForm<z.infer<typeof shoppingListformSchema>>({
		resolver: zodResolver(shoppingListformSchema),
		defaultValues: {
			name: '',
			amount: 0,
		},
	});

	const onSubmit = (values: z.infer<typeof shoppingListformSchema>) => {
		const newItem = {
			id: crypto.randomUUID(),
			name: values.name,
			amount: values.amount,
		};

		dispatch(addItem(newItem));

		toast('Item added successfully!');
		form.reset();
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-2">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormControl>
								<Input placeholder="Add a new item..." {...field} />
							</FormControl>

							<FormMessage />
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

							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit">
					<Plus />
				</Button>
			</form>
		</Form>
	);
};

export default ShoppingListForm;
