import CharCube from "../CharCube";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const setupTypedCorrect = async () => {
  const { container, debug } = render(<CharCube solution="s" />);

  const input = container.querySelector("input");
  await userEvent.type(input, "s");
  return { input, debug, container };
};

const setupTypedWrong = async () => {
  const { container, debug } = render(<CharCube solution="s" />);

  const input = container.querySelector("input");
  await userEvent.type(input, "x");
  return { input, debug, container };
};

const setupType = async (answer, typed) => {
  const { container, debug } = render(<CharCube solution={answer} />);

  const input = container.querySelector("input");
  await userEvent.type(input, typed);
  return { input, debug, container };
};

describe("CharCube", () => {
  it("should render", () => {
    const { container } = render(<CharCube solution="s" />);
    expect(container).toMatchSnapshot();
  });

  describe("inputing correct answer", () => {
    it("should have correct value", async () => {
      const { input } = await setupTypedCorrect();
      expect(input.value).toEqual("s");
    });
    it("should be readonly", async () => {
      const { input, debug } = await setupTypedCorrect();
      expect(input).toHaveAttribute("readonly");
    });
    it("should be case insensitive", async () => {
      const { input, debug } = await setupType("S", "s");
      expect(input).toHaveAttribute("readonly");
    });
  });

  describe("inputing wrong answer", () => {
    it("should not have a value", async () => {
      const { input, debug } = await setupTypedWrong();
      expect(input.value).toEqual("");
    });
    it("should have placeholder matching typed", async () => {
      const { input, debug } = await setupTypedWrong();
      expect(input).toHaveAttribute("placeholder", "x");
    });
    it("should be not readonly", async () => {
      const { input, debug } = await setupTypedWrong();
      expect(input).not.toHaveAttribute("readonly");
    });
  });
});
