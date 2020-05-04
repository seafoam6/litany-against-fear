import { useState, createRef, useEffect } from "react";
import CharCubeSolved from "./CharCubeSolved";
import { Machine, interpret } from "xstate";

interface Props {
  solution: string;
  isFocused: boolean;
  keyy: number;
}

// todo: finish updating logic to xstate

const lineStateMachine = Machine({
  id: "character",
  type: "parallel",
  initial: "unsolved",
  states: {
    focus: {
      initial: "unfocused",
      states: {
        focused: {
          on: { UNFOCUS: "unfocused" },
        },
        unfocused: {
          on: { FOCUS: "focused" },
        },
      },
    },
    unsolved: {
      on: {
        CORRECT: "solved",
      },
    },
    solved: {
      type: "final",
    },
  },
});

const lineService = interpret(lineStateMachine).onTransition((state) =>
  console.log(`STATE: ${state.value}`)
);

const CharCube: React.FC<Props> = ({ solution, isFocused, keyy }) => {
  const textInput = createRef<HTMLInputElement>();
  const [val, setVal] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [isReadOnly, setReadOnly] = useState(false);

  useEffect(() => {
    lineService.start();
  }, []);

  useEffect(() => {
    if (isFocused) {
      textInput.current.focus();
    }
  }, [isFocused]);

  const blur = () => {
    if (textInput.current) {
      textInput.current.blur();
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;

    if (value.toLowerCase() === solution.toLowerCase()) {
      setVal(solution);
      setReadOnly(true);
      blur();
      console.log(keyy);
    } else {
      setVal("");
      setPlaceholder(value);
    }
  };

  const placeHolderColor = "red";

  if (isReadOnly) {
    return <CharCubeSolved solution={solution} />;
  }

  return (
    <>
      <input
        type="text"
        minLength={1}
        maxLength={1}
        placeholder={placeholder}
        value={val}
        onChange={(e) => handleChange(e)}
        ref={textInput}
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
