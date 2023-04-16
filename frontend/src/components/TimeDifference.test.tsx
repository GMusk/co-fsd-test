import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { TimeDifference } from "./TimeDifference";

describe("Time Difference", () => {
  it("should display server time and difference", () => {
    render(<TimeDifference />);
  });
  it("should update every second", () => {
    render(<TimeDifference />);
  });
  it("should refetch after 30 seconds", () => {
    render(<TimeDifference />);
  });
});
