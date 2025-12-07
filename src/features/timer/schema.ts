import { z } from 'zod';

export const timerSchema = z.object({
    clientId: z.number().min(1, "Seleziona un cliente"),
    activityType: z.string().min(1, 'obbligatorio'),
    notes: z.string().optional()
})

export type TimerFormData = z.infer<typeof timerSchema>