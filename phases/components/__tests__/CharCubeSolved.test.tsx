import CharCubeSolved from "../CharCubeSolved";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

describe("CharCubeSolved", () => {
  it("should render", () => {
    const { container, debug } = render(<CharCubeSolved solution="s" />);
    expect(container).toMatchSnapshot();
  });
});
