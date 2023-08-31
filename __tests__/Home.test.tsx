import { render, screen } from "@testing-library/react";

import Home from "@/app/page";

describe("Home", () => {
  it("should renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /rick and morty characters/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
