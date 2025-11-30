import * as React from "react";
import {useAppSelector} from "@/store/hooks.ts";
import type {Client} from "@/features/clients/types.ts";

export const ClientsList: React.FC = () => {
    const clients = useAppSelector(state => state.clients.clients)

    return (
        <div>
            <div>
                {clients.map((client: Client)  => (
                    <div key={client.id}>
                        {client.name} - {client.email}
                    </div>
                ))}
            </div>
       </div>
    )
}