import * as React from "react";
import {Controller, useForm} from "react-hook-form";
import {type ClientFormData, clientSchema} from "@/features/clients/schema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button.tsx";
import {Field, FieldError, FieldLabel} from "@/components/ui/field.tsx";
import {Input} from "@/components/ui/input.tsx";

export const ClientForm: React.FC = () => {
    const form = useForm<ClientFormData>({
        resolver: zodResolver(clientSchema),
        defaultValues: { name: '', email: '', phone: '' }
    });

    const onSubmit = (data: ClientFormData) => {
        console.log(data)
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6 p-6 rounded-lg shadow-md max-w-lg mx-auto">
            <Controller
                control={form.control}
                name="name"
                render={({ field, fieldState }) => (
                    <Field data-invalid={!!fieldState.error}>
                        <FieldLabel htmlFor="name">Nome Cliente</FieldLabel>
                        <Input
                            id="name"
                            placeholder="Inserisci nome cliente"
                            aria-invalid={!!fieldState.error}
                            {...field}
                        />
                        <FieldError errors={[fieldState.error]} />
                    </Field>
                )}
            />

            <Controller
                control={form.control}
                name="email"
                render={({ field, fieldState }) => (
                    <Field data-invalid={!!fieldState.error}>
                        <FieldLabel htmlFor="email">Email (opzionale)</FieldLabel>
                        <Input
                            id="email"
                            type="email"
                            placeholder="email@esempio.com"
                            aria-invalid={!!fieldState.error}
                            {...field}
                        />
                        <FieldError errors={[fieldState.error]} />
                    </Field>
                )}
            />

            <Controller
                control={form.control}
                name="phone"
                render={({ field, fieldState }) => (
                    <Field data-invalid={!!fieldState.error}>
                        <FieldLabel htmlFor="phone">Telefono (opzionale)</FieldLabel>
                        <Input
                            id="phone"
                            type="tel"
                            placeholder="+39 123 456 7890"
                            aria-invalid={!!fieldState.error}
                            {...field}
                        />
                        <FieldError errors={[fieldState.error]} />
                    </Field>
                )}
            />

            <Button type="submit">Aggiungi Cliente</Button>
        </form>
    );
}