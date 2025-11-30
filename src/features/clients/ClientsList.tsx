import * as React from "react";
import {useState} from "react";
import type {Client} from "@/features/clients/types.ts";

export const ClientsList: React.FC = () => {
    const [clients] = useState(() => {
        const saved = localStorage.getItem("clients")
        return saved ? JSON.parse(saved) : [];
    })

    return (
        <div>
            <div>
                {clients.map((c: Client) => <div key={c.id}>{c.name}</div>)}
            </div>
        </div>
    )
}