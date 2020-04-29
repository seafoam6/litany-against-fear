import React from "react";
import CharCube from "../CharCube";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

describe("CharCube", () => {
  it("should render", () => {
    const { container, debug } = render(<CharCube solution="s" />);
    expect(container).toMatchSnapshot();
  });
});
