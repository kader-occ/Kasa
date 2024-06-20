import { render, screen } from "@testing-library/react";
import "./ErrorPage";

test("render h1 A Propos", () => {
  render(<ErrorPage />);
  const linkElement = screen.getByText(/A Propos/i);
  expect(linkElement).toBeInTheDocument();
});
