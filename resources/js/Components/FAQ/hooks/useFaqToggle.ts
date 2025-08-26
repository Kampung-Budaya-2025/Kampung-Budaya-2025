import { UseFaqToggleProps } from "../types";
import { useState } from "react";

function useFaqToggle({ onToggle, openItemId }: UseFaqToggleProps) {
  const [internalOpenId, setInternalOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    if (onToggle) {
      onToggle(id);
    } else {
      setInternalOpenId(internalOpenId === id ? null : id);
    }
  };

}

export { useFaqToggle };
