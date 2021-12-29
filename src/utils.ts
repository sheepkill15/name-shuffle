import { createRef, useMemo, useState } from 'react';

interface FocusableElement {
  focus: () => void;
}

export function useFocus<T extends FocusableElement>(): [
  React.RefObject<T>,
  () => void
] {
  const htmlElRef = createRef<T>();
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
}

export function validateNewName(newName?: string) {
  if (newName == null || newName.trim().length === 0) {
    return 'Name cannot be empty!';
  }

  return null;
}

export function useNames() {
  const [names, setNames] = useState<string[]>([]);
  const [shuffledNames, setShuffledNames] = useState<string[]>([]);

  return useMemo(() => {
    return { names, shuffledNames, clearNames, addNewName, shuffleNames };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [names, shuffledNames]);

  function clearNames() {
    setNames([]);
    setShuffledNames([]);
  }

  function addNewName(newName: string) {
    setNames((oldNames) => {
      return [...oldNames, newName];
    });
  }

  function shuffleNames() {
    setShuffledNames(knuthShuffle(names.map((v, i) => `${v} (${i + 1})`)));
  }
}

function knuthShuffle(array: any[]) {
  let currentIndex = array.length;

  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
