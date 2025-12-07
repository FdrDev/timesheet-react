import * as React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks.ts";
import { stopTimer } from "@/store/slices/timerSlice.ts";
import { Button } from "@/components/ui/button.tsx";
import { TimerForm } from "./TimerForm";

export const TimerControls: React.FC = () => {
    const dispatch = useAppDispatch();
    const currentTimer = useAppSelector(state => state.timer.currentTimer);
    const isRunning = !!currentTimer.startTime;

    const handleStop = () => {
        dispatch(stopTimer());
    };

    if (isRunning) {
        return (
            <div className="flex flex-col gap-4">
                <Button onClick={handleStop} variant="destructive">
                    Ferma Timer
                </Button>
            </div>
        );
    }

    return <TimerForm />;
};