import { Controller, useForm } from "react-hook-form"
import { type TimerFormData, timerSchema } from "./schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { startTimer } from "@/store/slices/timerSlice"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const TimerForm: React.FC = () => {
    const form = useForm<TimerFormData>({
        resolver: zodResolver(timerSchema),
        defaultValues: {clientId: 0 ,activityType: '', notes: ''}
    })

    const dispatch = useAppDispatch()
    const clients = useAppSelector(state => state.clients.clients)

    const onSubmit = (data: TimerFormData) => {
        dispatch(startTimer(data));
        form.reset();
    }

    return(
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
           <Controller
                control={form.control}
                name="clientId"
                render={({ field, fieldState }) => (
                    <Field data-invalid={!!fieldState.error}>
                        <FieldLabel htmlFor="clientId">Cliente</FieldLabel>
                        <Select
                            value={field.value?.toString() || ""}
                            onValueChange={(value) => field.onChange(Number(value))}
                        >
                            <SelectTrigger id="clientId" aria-invalid={!!fieldState.error}>
                                <SelectValue placeholder="Seleziona un cliente" />
                            </SelectTrigger>
                            <SelectContent>
                                {clients.map((client) => (
                                    <SelectItem key={client.id} value={client.id.toString()}>
                                        {client.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <FieldError errors={[fieldState.error]} />
                    </Field>
                )}
            />
            <Controller
                control={form.control}
                name="activityType"
                render={({ field, fieldState }) => (
                    <Field data-invalid={!!fieldState.error}>
                        <FieldLabel htmlFor="activityType">Tipo Attività</FieldLabel>
                        <Input
                            id="activityType"
                            placeholder="Es: Sviluppo, Design, Meeting..."
                            aria-invalid={!!fieldState.error}
                            {...field}
                        />
                        <FieldError errors={[fieldState.error]} />
                    </Field>
                )}
            />

            <Controller
                control={form.control}
                name="notes"
                render={({ field }) => (
                    <Field>
                        <FieldLabel htmlFor="notes">Note (opzionale)</FieldLabel>
                        <Input
                            id="notes"
                            placeholder="Note aggiuntive..."
                            {...field}
                        />
                    </Field>
                )}
            />

            <Button type="submit">Avvia Timer</Button>
        </form>
    )
}