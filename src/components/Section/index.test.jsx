import React from "react";
import { render } from "@testing-library/react";
import Section from "./index";
jest.mock("../Heros", () => {
  const Hero = () => <div data-testid="hero-component" />;
  return Hero;
});

jest.mock("../TextModules", () => {
  const TextModules = () => <div data-testid="text-modules-component" />;
  return TextModules;
});

describe("Section", () => {
  it("renders a Hero component when type is a hero type", () => {
    const type = "globalHero";
    const data = {
      /* mock data */
    };
    const { getByTestId } = render(<Section type={type} data={data} />);
    const heroComponent = getByTestId("hero-component");
    expect(heroComponent).toBeInTheDocument();
  });

  it("renders a TextModules component when type is a text module type", () => {
    const type = "highlightedTextBlock";
    const data = {
      /* mock data */
    };
    const { getByTestId } = render(<Section type={type} data={data} />);
    const textModulesComponent = getByTestId("text-modules-component");
    expect(textModulesComponent).toBeInTheDocument();
  });

  it("renders a fallback h2 element when type is not recognized", () => {
    const type = "unknownType";
    const data = {
      /* mock data */
    };
    const { getByText } = render(<Section type={type} data={data} />);
    const fallbackElement = getByText(type);
    expect(fallbackElement).toBeInTheDocument();
  });
});
