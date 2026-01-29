import { describe, it, expect } from "bun:test";
import {
  hexToRgba,
  adjustColor,
  isLightColor,
} from "../src/script";

describe("hexToRgba", () => {
  it("should convert 6-digit hex to rgba with alpha", () => {
    const result = hexToRgba("#ff0000", 0.5);
    expect(result).toBe("#ff000080");
  });

  it("should convert 3-digit hex to rgba with alpha", () => {
    const result = hexToRgba("#f00", 0.5);
    expect(result).toBe("#ff000080");
  });

  it("should return 8-digit hex as-is", () => {
    const result = hexToRgba("#ff000080", 0.5);
    expect(result).toBe("#ff000080");
  });

  it("should handle full opacity", () => {
    const result = hexToRgba("#00ff00", 1);
    expect(result).toBe("#00ff00ff");
  });

  it("should handle zero opacity", () => {
    const result = hexToRgba("#0000ff", 0);
    expect(result).toBe("#0000ff00");
  });

  it("should handle hex without # prefix", () => {
    const result = hexToRgba("ff0000", 0.5);
    expect(result).toBe("#ff000080");
  });
});

describe("adjustColor", () => {
  it("should lighten a dark color", () => {
    const result = adjustColor("#000000", 50);
    expect(result).toBe("#323232");
  });

  it("should darken a light color", () => {
    const result = adjustColor("#ffffff", -50);
    expect(result).toBe("#cdcdcd");
  });

  it("should clamp at 255 (white)", () => {
    const result = adjustColor("#ffffff", 100);
    expect(result).toBe("#ffffff");
  });

  it("should clamp at 0 (black)", () => {
    const result = adjustColor("#000000", -100);
    expect(result).toBe("#000000");
  });

  it("should handle 3-digit hex", () => {
    const result = adjustColor("#f00", 50);
    expect(result).toBe("#ff3232");
  });

  it("should handle hex without # prefix", () => {
    const result = adjustColor("ff0000", 50);
    expect(result).toBe("#ff3232");
  });
});

describe("isLightColor", () => {
  it("should return true for white", () => {
    expect(isLightColor("#ffffff")).toBe(true);
  });

  it("should return false for black", () => {
    expect(isLightColor("#000000")).toBe(false);
  });

  it("should return true for light gray", () => {
    expect(isLightColor("#cccccc")).toBe(true);
  });

  it("should return false for dark gray", () => {
    expect(isLightColor("#333333")).toBe(false);
  });

  it("should handle 3-digit hex", () => {
    expect(isLightColor("#fff")).toBe(true);
    expect(isLightColor("#000")).toBe(false);
  });

  it("should handle hex without # prefix", () => {
    expect(isLightColor("ffffff")).toBe(true);
    expect(isLightColor("000000")).toBe(false);
  });
});
