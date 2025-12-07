import {configureStore} from "@reduxjs/toolkit";
import clientsReducer from './slices/clientsSlice';

export const store = configureStore({
    reducer: {
        clients: clientsReducer
    }
})

// it's a listener - Reminder for me: Observer pattern
store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('clients', JSON.stringify(state.clients.clients));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;