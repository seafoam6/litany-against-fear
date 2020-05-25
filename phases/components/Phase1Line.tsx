import { useEffect, useState } from "react";
import CharCube from "./CharCube";
import CharCubeSolved from "./CharCubeSolved";

interface Props {
  solution: string;
}

export const nullOutChar = (unsolved, ind) => {
  let newArray = [...unsolved];
  newArray[ind] = null;
  return newArray;
};

export const firstNonNullChar = (unsolved) =>
  unsolved.findIndex((c) => c !== null);

const Phase1Line: React.FC<Props> = ({ solution }) => {
  const [lineSolved, setLineSolved] = useState(false);
  const [unsolved, setUnsolved] = useState<string[]>([]);
  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    const chars = solution.split("").map((char, ind) => {
      const regex = RegExp(/[^A-Za-z0-9]+/);
      if (!regex.test(char)) {
        return char;
      }
      return null;
    });

    setUnsolved(chars);
  }, [solution]);

  const onSolvedChar = (ind) => {
    const thing = nullOutChar(unsolved, ind);
    setUnsolved(thing);
    const indexToFocus = firstNonNullChar(thing);
    setFocusedIndex(indexToFocus);
  };

  const thing = solution.split("").map((char, ind) => {
    return (
      <CharCube
        key={ind}
        solution={char}
        ind={ind}
        isFocused={ind === focusedIndex}
        onSolved={onSolvedChar}
      />
    );
  });

  return <>{[...thing]}</>;
};

export default Phase1Line;
