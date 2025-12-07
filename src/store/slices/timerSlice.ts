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
        pauseTimer: (state) => {
            if (state.currentTimer.startTime && !state.currentTimer.pausedTime){
                const now  = Date.now()
                const elapsed = now - state.currentTimer.startTime
                state.currentTimer.totalElapsed = (state.currentTimer.totalElapsed || 0 ) + elapsed
                state.currentTimer.pausedTime = now
            }
        },
        resumeTimer: (state) => {
            if (state.currentTimer.pausedTime) {
                state.currentTimer.startTime = Date.now()
                state.currentTimer.pausedTime = undefined
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

export const {startTimer, stopTimer, pauseTimer, resumeTimer, setTimerHistory, updateCurrentTimerNotes } = timerSlice.actions
export default timerSlice.reducer