import React from "react";

interface Props {
  solution: string;
}

const CharCubeSolved: React.FC<Props> = ({ solution }) => {
  return (
    <>
      <input
        type="text"
        minLength={1}
        maxLength={1}
        value={solution}
        readOnly={true}
      />
      <style jsx>{`
        input {
          font-size: 2em;
          width: 2em;
          text-align: center;
          background-color: red;
        }
      `}</style>
    </>
  );
};

export default CharCubeSolved;
