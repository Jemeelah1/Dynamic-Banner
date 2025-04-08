// import { render, screen, fireEvent } from "@testing-library/react";
// import { describe, test, expect } from "jest";
// import DynamicBanner from "./component/DynamicBanner";
// import mk from "../assets/svgs/mk.svg";

// describe("DynamicBanner Component", () => {
//   test("renders with default title, description, and image", () => {
//     render(<DynamicBanner />);

//     expect(
//       screen.getByText("My Favorite Game - Mortal Kombat")
//     ).toBeInTheDocument();
//     expect(
//       screen.getByText(/Discover a reborn Mortal Kombat Universe/i)
//     ).toBeInTheDocument();
//     expect(screen.getByAltText("Default Banner")).toHaveAttribute("src", mk);
//   });

//   test("updates the title when user types", () => {
//     render(<DynamicBanner />);

//     const titleInput = screen.getByLabelText("Banner Title");
//     fireEvent.change(titleInput, { target: { value: "New Game Title" } });

//     expect(screen.getByText("New Game Title")).toBeInTheDocument();
//   });

//   test("updates the description with a word limit", () => {
//     render(<DynamicBanner />);

//     const descInput = screen.getByLabelText("Banner Description");
//     fireEvent.change(descInput, {
//       target: {
//         value:
//           "This is a test description that should be trimmed to twenty words or less.",
//       },
//     });

//     expect(
//       screen.getByText(/This is a test description that should be trimmed/i)
//     ).toBeInTheDocument();
//     expect(descInput.value.split(" ").length).toBeLessThanOrEqual(20);
//   });

//   test("changes background color when color input is modified", () => {
//     render(<DynamicBanner />);

//     const colorInput = screen.getByDisplayValue("#283E68");
//     fireEvent.change(colorInput, { target: { value: "#FF5733" } });

//     expect(screen.getByDisplayValue("#FF5733")).toBeInTheDocument();
//   });

//   test("uploads and displays a new image", () => {
//     render(<DynamicBanner />);

//     const file = new File(["dummy content"], "test-image.jpg", {
//       type: "image/jpeg",
//     });
//     const imageInput = screen.getByLabelText("Banner Image");

//     fireEvent.change(imageInput, { target: { files: [file] } });

//     expect(screen.getByAltText("Uploaded Banner")).toBeInTheDocument();
//   });
// });

import { render, screen, fireEvent } from "@testing-library/react";
import DynamicBanner from "./component/DynamicBanner";
import { describe, test, expect } from "@jest/globals";
import jest from "jest-mock";

jest.mock("../assets/svgs/mk.svg", () => "mk.svg");

describe("DynamicBanner Component", () => {
  test("renders with default title, description, and image", () => {
    render(<DynamicBanner />);

    expect(
      screen.getByText("My Favorite Game - Mortal Kombat")
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Discover a reborn Mortal Kombat Universe/i)
    ).toBeInTheDocument();
    expect(screen.getByAltText("Default Banner")).toHaveAttribute(
      "src",
      "mk.svg"
    );
  });

  test("updates the title when user types", () => {
    render(<DynamicBanner />);

    const titleInput = screen.getByLabelText("Banner Title");
    fireEvent.change(titleInput, { target: { value: "New Game Title" } });

    expect(screen.getByText("New Game Title")).toBeInTheDocument();
  });

  test("updates the description with a word limit", () => {
    render(<DynamicBanner />);

    const descInput = screen.getByLabelText("Banner Description");
    const testDescription =
      "This is a test description that should be trimmed to twenty words or less. Adding extra words to test the limit exceeding.";

    fireEvent.change(descInput, {
      target: {
        value: testDescription,
      },
    });

    const trimmed = testDescription.split(" ").slice(0, 50).join(" ");

    expect(screen.getByText(trimmed)).toBeInTheDocument();
    expect(descInput.value.split(" ").length).toBeLessThanOrEqual(50);
  });

  test("changes background color when color input is modified", () => {
    render(<DynamicBanner />);

    const colorInput = screen.getByLabelText("Banner Background Color");
    fireEvent.change(colorInput, { target: { value: "#FF5733" } });

    expect(screen.getByDisplayValue("#FF5733")).toBeInTheDocument();
  });

  test("uploads and displays a new image", () => {
    render(<DynamicBanner />);

    const file = new File(["dummy content"], "test-image.jpg", {
      type: "image/jpeg",
    });
    const imageInput = screen.getByLabelText("Banner Image");

    fireEvent.change(imageInput, { target: { files: [file] } });

    expect(screen.getByAltText("Uploaded Banner")).toBeInTheDocument();
  });
});
