import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import { type Timer, type TimerState } from "@/features/timer/types";

const initialState: TimerState = {
    currentTimer:{
        activityType: '',
        id: 0,
        clientId: 0,
    },
    timerHistory: []
}

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        startTimer: (state, action: PayloadAction<Omit<Timer, 'id' | 'startTime' | 'endTime'>>) => {
            state.currentTimer = {
                id: Date.now(),
                ...action.payload,
                startTime: Date.now()
            }
        },
        stopTimer: (state) => {
            if (state.currentTimer.startTime) {
                const completedTimer: Timer = {
                    ...state.currentTimer,
                    endTime: Date.now(),
                }
                state.timerHistory.push(completedTimer)
                state.currentTimer = {
                    id: 0,
                    activityType: '',
                    clientId: 0
                }
            }
        },
        setTimerHistory: (state, action: PayloadAction<Timer[]>) =>{
            state.timerHistory = action.payload
        },
        updateCurrentTimerNotes: (state, action: PayloadAction<string>) => {
            state.currentTimer.notes = action.payload
        }
    }
})

export const {startTimer, stopTimer, setTimerHistory, updateCurrentTimerNotes } = timerSlice.actions
export default timerSlice.reducer