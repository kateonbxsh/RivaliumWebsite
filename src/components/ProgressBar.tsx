import React, { useEffect, useRef } from "react";

// Define the enum for progress states
export enum ProgressState {
    OK = "OK",
    ERROR = "ERROR",
    REACHED = "REACHED",
    NOT_REACHED = "NOT_REACHED"
}

interface ProgressBarProps {
    states: ProgressState[];
}

const stateToColorClass = (state: ProgressState) => {
    switch (state) {
        case ProgressState.OK:
            return "bg-green-400";
        case ProgressState.ERROR:
            return "bg-red-400";
        case ProgressState.REACHED:
            return "bg-sky-200";
        case ProgressState.NOT_REACHED:
        default:
            return "bg-sky-200/30";
    }
};

const ProgressBarComponent: React.FC<ProgressBarProps> = ({ states }) => {
    const refs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        refs.current.forEach((ref, index) => {
            if (!ref) return;
            ref.classList.remove("bg-green-400", "bg-red-400", "bg-sky-200", "bg-sky-200/30");
            void ref.offsetWidth;
            ref.classList.add(stateToColorClass(states[index]));
        });
    }, [states]);

    return (
        <div className="flex justify-center space-x-2 md:mb-6 w-full max-w-md">
            {states.map((_, index) => (
                <div
                    key={index}
                    ref={el => {
                        if (el) refs.current[index] = el;
                    }}
                    className="w-8 md:w-12 h-2 rounded transition-colors duration-[1s] bg-sky-200/30"
                />
            ))}
        </div>
    );
};

const ProgressBar = React.memo(ProgressBarComponent);

export default ProgressBar;
