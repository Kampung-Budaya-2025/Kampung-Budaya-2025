
// Faq Card
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface CardProps {
  faqs?: FAQItem[];
  searchQuery?: string;
  onToggle?: (id: number) => void;
  openItemId?: number | null;
}

// Flower Pair
interface FlowerInitialPosition {
    x: number;
    y: number;
    rotation?: number;
    scale?: number;
}

interface FlowerPosition {
    ref: React.RefObject<HTMLImageElement | null>;
    isInView: boolean;
    size: number;
    translateDistance: number;
    transitionDuration: string;
    animationClass: string;
    initialPosition?: FlowerInitialPosition;
}

// Scroll Bar
interface ScrollBarProps {
    defaultValue?: number;
    startingValue?: number;
    maxValue?: number;
    className?: string;
    isStepped?: boolean;
    stepSize?: number;
    onValueChange?: (value: number) => void;
}

interface SliderProps {
    defaultValue: number;
    startingValue: number;
    maxValue: number;
    isStepped: boolean;
    stepSize: number;
    onValueChange?: (value: number) => void;
}

// SearchField
interface SearchFieldProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: () => void;
}

export type { FAQItem, CardProps, FlowerPosition, ScrollBarProps, SliderProps, SearchFieldProps };