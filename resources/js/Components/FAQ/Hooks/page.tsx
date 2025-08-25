
import React, {useState, useEffect} from "react";

type UseFaqToggleProps = {
  onToggle?: (id: number) => void;
  openItemId?: number | null;
};
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

function useFaqToggle({ onToggle, openItemId }: UseFaqToggleProps) {
  const [internalOpenId, setInternalOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    if (onToggle) {
      onToggle(id);
    } else {
      setInternalOpenId(internalOpenId === id ? null : id);
    }
  };

  const isExpanded = (id: number) => {
    return onToggle ? openItemId === id : internalOpenId === id;
  };

  return { handleToggle, isExpanded };
}

export { useScrollSync, useFaqToggle };