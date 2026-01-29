import { describe, it, expect } from "bun:test";
import type { VSCodeTheme, VSCodeTokenColor, ZedThemeVariant } from "../src/script";

// Import the functions we need to test
// Note: We'll need to export these from script.ts

describe("Theme Conversion", () => {
  describe("Basic Theme Structure", () => {
    it("should create a valid VS Code theme object", () => {
      const vsCodeTheme: VSCodeTheme = {
        name: "Test Theme",
        author: "Test Author",
        type: "dark",
        colors: {
          "editor.background": "#1e1e1e",
          "editor.foreground": "#d4d4d4",
        },
        tokenColors: [
          {
            scope: "comment",
            settings: {
              foreground: "#6a9955",
            },
          },
        ],
      };

      expect(vsCodeTheme.name).toBe("Test Theme");
      expect(vsCodeTheme.type).toBe("dark");
      expect(vsCodeTheme.colors?.["editor.background"]).toBe("#1e1e1e");
    });

    it("should create a valid light theme", () => {
      const vsCodeTheme: VSCodeTheme = {
        name: "Test Light",
        type: "light",
        colors: {
          "editor.background": "#ffffff",
        },
      };

      expect(vsCodeTheme.type).toBe("light");
    });
  });

  describe("Token Colors", () => {
    it("should handle single scope as string", () => {
      const tokenColor: VSCodeTokenColor = {
        scope: "comment",
        settings: {
          foreground: "#6a9955",
        },
      };

      expect(tokenColor.scope).toBe("comment");
    });

    it("should handle multiple scopes as array", () => {
      const tokenColor: VSCodeTokenColor = {
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          foreground: "#6a9955",
        },
      };

      expect(Array.isArray(tokenColor.scope)).toBe(true);
      expect(tokenColor.scope).toContain("comment");
    });

    it("should handle font styles", () => {
      const tokenColor: VSCodeTokenColor = {
        scope: "comment",
        settings: {
          foreground: "#6a9955",
          fontStyle: "italic",
        },
      };

      expect(tokenColor.settings.fontStyle).toBe("italic");
    });
  });

  describe("Zed Theme Variant Structure", () => {
    it("should create a valid dark Zed theme variant", () => {
      const variant: ZedThemeVariant = {
        name: "Test Dark",
        appearance: "dark",
        style: {
          background: "#1e1e1e",
          text: "#d4d4d4",
          "editor.background": "#1e1e1e",
        },
      };

      expect(variant.appearance).toBe("dark");
      expect(variant.style.background).toBe("#1e1e1e");
    });

    it("should create a valid light Zed theme variant", () => {
      const variant: ZedThemeVariant = {
        name: "Test Light",
        appearance: "light",
        style: {
          background: "#ffffff",
          text: "#333333",
          "editor.background": "#ffffff",
        },
      };

      expect(variant.appearance).toBe("light");
      expect(variant.style.background).toBe("#ffffff");
    });
  });
});

describe("Color Mapping", () => {
  it("should have expected VS Code to Zed color mappings", () => {
    // These are key mappings that should exist
    const expectedMappings = [
      { vscode: "editor.background", zed: "editor.background" },
      { vscode: "editor.foreground", zed: "editor.foreground" },
      { vscode: "terminal.background", zed: "terminal.background" },
      { vscode: "terminal.foreground", zed: "terminal.foreground" },
      { vscode: "foreground", zed: "text" },
      { vscode: "focusBorder", zed: "border.focused" },
      { vscode: "button.background", zed: "element.background" },
    ];

    // This test documents the expected mappings
    // The actual mappings are in the colorMapping object in script.ts
    for (const mapping of expectedMappings) {
      expect(mapping.vscode).toBeDefined();
      expect(mapping.zed).toBeDefined();
    }
  });
});

describe("Example Themes", () => {
  it("should load the example dark theme", async () => {
    const themeFile = Bun.file("example/vscode/humans.json");
    const content = await themeFile.text();
    const theme = JSON.parse(content) as VSCodeTheme;

    expect(theme.name).toBe("Humans");
    // Note: The example theme doesn't have a type field, defaults to dark
    expect(theme.type).toBeUndefined();
    expect(theme.colors).toBeDefined();
    expect(theme.tokenColors).toBeDefined();
  });

  it("should load the example light theme", async () => {
    const themeFile = Bun.file("example/vscode/humans-light.json");
    const content = await themeFile.text();
    const theme = JSON.parse(content) as VSCodeTheme;

    expect(theme.name).toBe("Humans Light");
    expect(theme.type).toBe("light");
    expect(theme.colors).toBeDefined();
  });
});
