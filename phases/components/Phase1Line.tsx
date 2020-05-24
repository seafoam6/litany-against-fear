import { useEffect, useState } from "react";
import CharCube from "./CharCube";
import CharCubeSolved from "./CharCubeSolved";

interface Props {
  solution: string;
}

// TODO: pass function down to know when blurred

const Phase1Line: React.FC<Props> = ({ solution }) => {
  const [lineSolved, setLineSolved] = useState(false);
  const [unsolved, setUnsolved] = useState<string[]>([]);

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
    setUnsolved([...unsolved.slice(0, ind), ...unsolved.slice(ind + 1)]);
  };

  const thing = solution.split("").map((char, ind) => {
    return (
      <CharCube
        key={ind}
        solution={char}
        ind={ind}
        isFocused={false}
        onSolved={onSolvedChar}
      />
    );
  });
  console.log(unsolved);
  return <>{[...thing]}</>;
};

export default Phase1Line;
