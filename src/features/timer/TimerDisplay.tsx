import { useState, useEffect } from "react"

import { useAppSelector } from "@/store/hooks"
import { formatTime } from "./utils"

export const TimerDisplay: React.FC = () => {
    const currentTimer = useAppSelector(state => state.timer.currentTimer)
    const [elapsed, setElapsed] = useState(0)

    useEffect(()=>{
        if (!currentTimer.startTime){
            setElapsed(0)
            return
        }

        if (currentTimer.pausedTime) {
            setElapsed(currentTimer.totalElapsed || 0)
            return
        }

        const baseElapsed = currentTimer.totalElapsed || 0
        setElapsed(baseElapsed + (Date.now() - currentTimer.startTime))
        
        const interval = setInterval(() => {
            setElapsed(baseElapsed + (Date.now() - currentTimer.startTime!))
        }, 1000)

        
        return () => clearInterval(interval)
    }, [currentTimer.startTime, currentTimer.pausedTime, currentTimer.totalElapsed])

    if (!currentTimer.startTime){
        return(
            <div>Nessun Timer attivo</div>
        )
    }
    return (
        <div className="text-center">
            <div className="text-4xl font-mono">{formatTime(elapsed)}</div>
            <div className="text-sm text-muted-foreground mt-2">
                {currentTimer.activityType}
            </div>
        </div>
    )

}