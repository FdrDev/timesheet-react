import type {Client} from "@/features/clients/types.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface ClientState {
    clients: Client[];
}

const initialState: ClientState = {
    clients: []
}

const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        addClient: (state, action: PayloadAction<Omit<Client, 'id'>>) => {
            const newClient: Client = {
                id: Date.now(),
                ...action.payload
            };
            state.clients.push(newClient);
            },
        removeClient: (state, action: PayloadAction<number>) => {
            state.clients = state.clients.filter(client => client.id !== action.payload)
        },
        setClients: (state, action: PayloadAction<Client[]>) => {
            state.clients = action.payload;
        }
    }
})

export const { addClient, removeClient, setClients } = clientsSlice.actions;
export default clientsSlice.reducer;