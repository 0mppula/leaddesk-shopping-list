import { z } from 'zod';

export const shoppingListformSchema = z.object({
	name: z.string().min(2).max(50),
	amount: z.coerce.number().min(1).max(1000),
});
