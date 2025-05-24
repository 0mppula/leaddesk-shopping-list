import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus, Trash2 } from 'lucide-react';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import logo from './assets/logo.svg';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { ScrollArea, ScrollBar } from './components/ui/scroll-area';
import { useAppSelector } from './hooks';
import { Separator } from './components/ui/separator';

const formSchema = z.object({
	name: z.string().min(2).max(50),
	amount: z.coerce.number().min(1).max(1000),
});

function App() {
	const shoppingListItems = useAppSelector((state) => state.shoppingListItems);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			amount: 0,
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	console.log(shoppingListItems);

	return (
		<main className="pb-32 overflow-x-auto mx-auto px-6 md:px-8 pt-6 lg:pt-12 flex flex-col items-center min-h-screen max-w-5xl space-y-4">
			<div className="flex items-center gap-4 mb-8">
				<img src={logo} className="size-16 hidden md:block" alt="Shopping List logo" />

				<h1 className="font-roboto-mono scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
					Shopping List
				</h1>
			</div>

			<Card className="p-4 gap-4">
				<ScrollArea className="pr-2 overflow-contain grid h-[480px] w-full grid-cols-1 overflow-auto">
					<Table className="table-fixed w-full min-w-96">
						<TableCaption className="sr-only">
							A list of your shopping items.
						</TableCaption>

						<TableHeader>
							<TableRow>
								<TableHead className="w-full">
									Item (total {shoppingListItems.length})
								</TableHead>
								<TableHead className="w-[80px]">Amount</TableHead>
								<TableHead className="w-[56px]"></TableHead>
							</TableRow>
						</TableHeader>

						<TableBody>
							{shoppingListItems.map((item, i) => (
								<TableRow key={item.id + i}>
									<Fragment>
										<TableCell className="font-medium">{item.name}</TableCell>

										<TableCell>{item.amount}</TableCell>

										<TableCell>
											<Button
												variant="destructive"
												aria-label={`Delete ${item.name}`}
											>
												<Trash2 />
											</Button>
										</TableCell>
									</Fragment>
								</TableRow>
							))}
						</TableBody>
					</Table>

					<ScrollBar orientation="horizontal" />
				</ScrollArea>

				<Separator className="mt-4 w-full border-t-2 border-dashed bg-primary-neutral" />

				<div className="flex flex-col gap-4">
					<h2 className="mt-10 scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0">
						Add new Products
					</h2>

					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="flex items-center gap-2"
						>
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
				</div>
			</Card>
		</main>
	);
}

export default App;
