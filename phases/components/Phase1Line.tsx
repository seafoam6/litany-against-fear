import CharCube from "./CharCube";
import CharCubeSolved from "./CharCubeSolved";

interface Props {
  solution: string;
}

// TODO: pass function down to know when blurred

const Phase1Line: React.FC<Props> = ({ solution }) => {
  const chars = solution.split("").map((char, ind) => {
    const regex = RegExp(/[^A-Za-z0-9]+/);
    if (!regex.test(char)) {
      return (
        // todo: strip out space so that first possible
        // todo: charcube is a character
        <CharCube key={ind} keyy={ind} solution={char} isFocused={ind === 0} />
      );
    }
    // blank spaces, errata typographic characters
    return <CharCubeSolved key={ind} solution={char} />;
  });

  return <>{chars}</>;
};

export default Phase1Line;
