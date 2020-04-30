import CharCube from "./CharCube";
import CharCubeSolved from "./CharCubeSolved";

interface Props {
  solution: string;
}

const Phase1Line: React.FC<Props> = ({ solution }) => {
  const chars = solution.split("").map((char, ind) => {
    const regex = RegExp(/[^A-Za-z0-9]+/);
    // console.log(char, regex.test(char));
    if (!regex.test(char)) {
      return <CharCube key={ind} solution={char} />;
    }
    return <CharCubeSolved key={ind} solution={char} />;
  });

  return <>{chars}</>;
};

export default Phase1Line;
