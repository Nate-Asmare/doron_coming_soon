import React, { useReducer } from "react";

enum ActionKind {
  INPUT = "INPUT",
  BLUR = "BLUR",
  RESET = "RESET",
}

interface Action {
  type: ActionKind;
  payload?: string;
}

interface State {
  value: string;
  isTouched: boolean;
}

const inputStateReducer = (state: State, action: Action): State => {
  if (action.type === "INPUT") {
    return { value: action.payload!, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
  return state;
};

const useInput = (validation: (s: any) => boolean, initialValue?: string) => {
  const initialInputState: State = {
    value: "",
    isTouched: false,
  };

  if (initialValue) {
    initialInputState.value = initialValue;
  }

  const [inputState, dispatch] = useReducer(inputStateReducer, {
    ...initialInputState,
  });

  const isValid = validation(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: ActionKind.INPUT, payload: event.target.value });
  };

  const inputBlurHandler = (event: React.ChangeEvent<HTMLElement>) => {
    dispatch({ type: ActionKind.BLUR });
  };

  const reset = () => {
    dispatch({ type: ActionKind.RESET });
  };

  return {
    value: inputState.value,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
