import * as React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks.ts";
import { pauseTimer, resumeTimer, stopTimer } from "@/store/slices/timerSlice.ts";
import { Button } from "@/components/ui/button.tsx";
import { TimerForm } from "./TimerForm";

export const TimerControls: React.FC = () => {
    const dispatch = useAppDispatch();
    const currentTimer = useAppSelector(state => state.timer.currentTimer);
    const isRunning = !!currentTimer.startTime && !currentTimer.pausedTime;
    const isPaused = !!currentTimer.pausedTime;

    const handleStop = () => {
        dispatch(stopTimer());
    };

    const handlePause = () => {
        dispatch(pauseTimer());
    };

    const handleResume = () => {
        dispatch(resumeTimer());
    };

    if (isRunning || isPaused) {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    {isRunning ? (
                        <Button onClick={handlePause} variant="outline">
                            Pausa
                        </Button>
                    ) : (
                        <Button onClick={handleResume}>
                            Riprendi
                        </Button>
                    )}
                    <Button onClick={handleStop} variant="destructive">
                        Ferma Timer
                    </Button>
                </div>
            </div>
        )
    }

    return <TimerForm />
}