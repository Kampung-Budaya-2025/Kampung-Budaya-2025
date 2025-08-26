
import React, {useState, useEffect} from "react";
const useScrollSync = (containerRef: React.RefObject<HTMLDivElement>) => {
    const [scrollValue, setScrollValue] = useState(0);
    const [maxScrollValue, setMaxScrollValue] = useState(100);

    useEffect(() => {
        const updateMaxScroll = () => {
            if (containerRef.current) {
                const container = containerRef.current;
                const scrollHeight = container.scrollHeight;
                const clientHeight = container.clientHeight;
                const maxScroll = Math.max(0, scrollHeight - clientHeight);
                setMaxScrollValue(maxScroll);
            }
        };

        updateMaxScroll();
        window.addEventListener("resize", updateMaxScroll);
        return () => window.removeEventListener("resize", updateMaxScroll);
    }, [containerRef]);

    const handleScrollChange = (value: number) => {
        setScrollValue(value);
        if (containerRef.current) {
            const scrollPosition =
                (value / maxScrollValue) *
                (containerRef.current.scrollHeight - containerRef.current.clientHeight);
            containerRef.current.scrollTop = scrollPosition;
        }
    };

    const handleContainerScroll = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            const scrollTop = container.scrollTop;
            const maxScroll = container.scrollHeight - container.clientHeight;

            if (maxScroll > 0) {
                const scrollPercentage = (scrollTop / maxScroll) * maxScrollValue;
                setScrollValue(scrollPercentage);
            }
        }
    };

    return {
        scrollValue,
        maxScrollValue,
        handleScrollChange,
        handleContainerScroll,
    };
};



export { useScrollSync };