import {configureStore} from "@reduxjs/toolkit";
import clientsReducer from './slices/clientsSlice';
import timerReducer from './slices/timerSlice';


export const store = configureStore({
    reducer: {
        clients: clientsReducer,
        timer: timerReducer
    }
})

// it's a listener - Reminder for me: Observer pattern
store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('clients', JSON.stringify(state.clients.clients));
    localStorage.setItem('timer', JSON.stringify(state.timer.timerHistory))
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;