import { render, screen } from "@testing-library/react";
import AboutPage from "./AboutPage";

test("render h1 A Propos", () => {
  render(<AboutPage />);
  const linkElement = screen.getByText(/A Propos/i);
  expect(linkElement).toBeInTheDocument();
});
