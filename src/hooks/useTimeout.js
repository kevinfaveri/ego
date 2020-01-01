import { useRef, useEffect } from 'react';

export function useTimeout(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    const id = setTimeout(tick, delay);
    return () => clearTimeout(id);
  }, [delay]);
}
