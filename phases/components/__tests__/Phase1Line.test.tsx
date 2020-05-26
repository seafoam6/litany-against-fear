import { alterArray, firstNonNullChar } from "../Phase1Line";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const arrayState = [
  "I",
  null,
  "m",
  "u",
  "s",
  "t",
  null,
  "n",
  "o",
  "t",
  null,
  "f",
  "e",
  "a",
  "r",
  null,
];

describe("alterArray", () => {
  it("should set the first character to null", () => {
    const result = alterArray(arrayState, 0, null);
    expect(result).toEqual([
      null,
      null,
      "m",
      "u",
      "s",
      "t",
      null,
      "n",
      "o",
      "t",
      null,
      "f",
      "e",
      "a",
      "r",
      null,
    ]);
  });

  it("should set the any character to null", () => {
    const result = alterArray(arrayState, 2, null);
    expect(result).toEqual([
      "I",
      null,
      null,
      "u",
      "s",
      "t",
      null,
      "n",
      "o",
      "t",
      null,
      "f",
      "e",
      "a",
      "r",
      null,
    ]);
  });

  it("should set the any character to null", () => {
    const result = alterArray(arrayState, 4, null);
    const result2 = alterArray(result, 0, null);

    expect(result2).toEqual([
      null,
      null,
      "m",
      "u",
      null,
      "t",
      null,
      "n",
      "o",
      "t",
      null,
      "f",
      "e",
      "a",
      "r",
      null,
    ]);
  });
});

describe("firstNonNullChar", () => {
  it("should return first index that's not null", () => {
    const result = firstNonNullChar(arrayState);
    expect(result).toBe(0);
  });
});
