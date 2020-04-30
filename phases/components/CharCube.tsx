import { useState } from "react";

interface Props {
  solution: string;
}

enum Solved {
  Wrong,
  Right,
}

const CharCube: React.FC<Props> = ({ solution }) => {
  const [val, setVal] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [isReadOnly, setReadOnly] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;

    if (value.toLowerCase() === solution.toLowerCase()) {
      setVal(solution);
      setReadOnly(true);
    } else {
      setVal("");
      setPlaceholder(value);
    }
  };

  const placeHolderColor = "red";

  return (
    <>
      <input
        type="text"
        minLength={1}
        maxLength={1}
        placeholder={placeholder}
        value={val}
        onChange={(e) => handleChange(e)}
        readOnly={isReadOnly}
      />
      <style jsx>{`
        ::-webkit-input-placeholder {
          color: ${placeHolderColor};
        }
        ::-moz-placeholder {
          color: ${placeHolderColor};
        }
        :-ms-input-placeholder {
          color: ${placeHolderColor};
        }
        :-moz-placeholder {
          color: ${placeHolderColor};
        }
        input {
          font-size: 2em;
          width: 2em;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default CharCube;
