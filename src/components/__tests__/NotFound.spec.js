import { render } from "@testing-library/react";
import { NotFound } from "../NotFound";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("NotFound Component", () => {
  it("renders correctly and matches the snapshot", () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    const result = render(<NotFound />)

    expect(result).toMatchSnapshot();
  });
});
