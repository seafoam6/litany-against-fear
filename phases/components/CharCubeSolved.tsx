import React from "react";

interface Props {
  solution: string;
}

const CharCubeSolved: React.FC<Props> = ({ solution }) => {
  return (
    <>
      <div>{solution}</div>
      <style jsx>{`
        div {
          width: 1em;
          text-align: center;
          display: inline-block;
        }
      `}</style>
    </>
  );
};

export default CharCubeSolved;
