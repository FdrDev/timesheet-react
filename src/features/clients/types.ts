export interface Client {
    id: number;
    name: string;
    hours?: number;
    email?: string;
    phone?: string;
}

export interface ClientListProps {
    clients: Client[];
}

