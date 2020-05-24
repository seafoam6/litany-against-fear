import { useState, createRef, useEffect } from "react";
import CharCubeSolved from "./CharCubeSolved";
import { Machine, interpret } from "xstate";
import { useMachine, useService } from "@xstate/react";

interface Props {
  solution: string;
  isFocused: boolean;
  ind: number;
  onSolved?: Function;
}

const initial = "unsolved";
const unsolved = {
  on: {
    CORRECT: "solved",
  },
};
const solved = {
  type: "final" as const,
};
const states = {
  unsolved,
  solved,
};

// todo: add focused, unfocused
const lineStateMachine = Machine({
  id: "line",
  initial,
  states,
});

const CharCube: React.FC<Props> = ({
  solution,
  isFocused,
  ind,
  onSolved = () => {},
}) => {
  const textInput = createRef<HTMLInputElement>();
  const [val, setVal] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [state, send, service] = useMachine(lineStateMachine);

  useEffect(() => {
    const subscription = service.subscribe((state) => {
      //console.log(`STATE: ${state.value}`);
    });

    return subscription.unsubscribe;
  }, [service]);

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
      onSolved(ind);
      send("CORRECT");
      //
    } else {
      setVal("");
      setPlaceholder(value);
    }
  };

  const placeHolderColor = "red";
  const regex = RegExp(/[^A-Za-z0-9]+/);

  if (state.value === "solved" || regex.test(solution)) {
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
