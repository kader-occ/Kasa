import { render, screen } from "@testing-library/react";
import AccueilPage from "./AccueilPage";

test("render h1 Accueil", () => {
  render(<AccueilPage />);
  const linkElement = screen.getByText(/Accueil/i);
  expect(linkElement).toBeInTheDocument();
});
