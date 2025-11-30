import { z } from 'zod';

export const clientSchema = z.object({
    name: z.string().min(1, "Il nome è obbligatorio").max(100, "Nome troppo lungo"),
    email: z.email().optional().or(z.literal('')),
    phone: z.string().optional(),
});

export type ClientFormData = z.infer<typeof clientSchema>;
