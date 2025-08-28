import React from "react";
import { ScrollBarProps} from "../types";
import  Slider from "../UI/Slider";


const Scrollbar: React.FC<ScrollBarProps> = ({
    defaultValue = 50,
    startingValue = 0,
    maxValue = 100,
    className = "",
    isStepped = false,
    stepSize = 1,
    onValueChange,
}) => {
    return (
        <div
            className={`flex flex-col items-center justify-center gap-4 h-full ${className}`}
        >
            <Slider
                defaultValue={defaultValue}
                startingValue={startingValue}
                maxValue={maxValue}
                isStepped={isStepped}
                stepSize={stepSize}
                onValueChange={onValueChange}
            />
        </div>
    );
};

export default Scrollbar;
