import { useEffect, useState } from "react";
import CharCube from "./CharCube";

interface Props {
  solution: string;
  lineIndex: number;
  onLineSolved: Function;
  isVisible: boolean;
}

export const alterArray = (unsolved, ind, valSet) => {
  let newArray = [...unsolved];
  newArray[ind] = valSet;
  return newArray;
};

export const firstNonNullChar = (unsolved) =>
  unsolved.findIndex((c) => c !== null);

const Phase1Line: React.FC<Props> = ({
  solution,
  lineIndex,
  onLineSolved,
  isVisible,
}) => {
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
    const thing = alterArray(unsolved, ind, null);
    setUnsolved(thing);
    const indexToFocus = firstNonNullChar(thing);
    if (indexToFocus === -1) {
      onLineSolved(lineIndex);
    } else {
      setFocusedIndex(indexToFocus);
    }
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

  return !isVisible ? null : (
    <section className="card">
      {[...thing]}

      <style jsx>{`
        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </section>
  );
};

export default Phase1Line;
