import React, {useState, useEffect, useRef} from 'react'

export const useHover = () => {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = e => {
    const node = ref.current;
    if (!node) return setValue(false);
    setValue(e.target === node || node.contains(e.target));
  };

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        const doc = node.ownerDocument;
        doc.addEventListener("mouseover", handleMouseOver);

        return () => {
          doc.removeEventListener("mouseover", handleMouseOver);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );

  return [ref, value];
}
