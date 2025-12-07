export interface Timer {
    id: number
    clientId: number
    activityType: string
    startTime?: number
    endTime?: number
    notes?: string
}

export interface TimerState {
    currentTimer: Timer
    timerHistory: Timer[] //timer completati
}