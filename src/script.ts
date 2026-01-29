#!/usr/bin/env bun

/**
 * VS Code to Zed Theme Converter
 *
 * This script converts VS Code theme JSON files to Zed theme format.
 *
 * Usage:
 *   bun run script.ts <input-vscode-theme.json> [output-directory]
 *
 * If output directory is not provided, the theme will be saved next to the script.
 */

import * as fs from "fs";
import * as path from "path";

// Bun type declarations
declare const Bun: {
  argv: string[];
  main: string;
};

declare const process: {
  exit(code: number): never;
};

// ============================================================================
// Type Definitions
// ============================================================================

interface VSCodeTheme {
  name?: string;
  author?: string;
  type?: "dark" | "light";
  colors?: Record<string, string>;
  tokenColors?: VSCodeTokenColor[];
  semanticHighlighting?: boolean;
  semanticTokenColors?: Record<string, string>;
}

interface VSCodeTokenColor {
  name?: string;
  scope?: string | string[];
  settings: {
    foreground?: string;
    background?: string;
    fontStyle?: string;
  };
}

interface ZedTheme {
  $schema: string;
  name: string;
  author: string;
  themes: ZedThemeVariant[];
}

interface ZedThemeVariant {
  name: string;
  appearance: "dark" | "light";
  style: ZedStyle;
}

interface ZedStyle {
  // Core colors
  background?: string;
  "surface.background"?: string;
  "elevated_surface.background"?: string;

  // Text colors
  text?: string;
  "text.accent"?: string;
  "text.disabled"?: string;
  "text.muted"?: string;
  "text.placeholder"?: string;
  "link_text.hover"?: string;

  // Border colors
  border?: string;
  "border.disabled"?: string;
  "border.focused"?: string;
  "border.selected"?: string;
  "border.transparent"?: string;
  "border.variant"?: string;
  "pane.focused_border"?: string;
  "pane_group.border"?: string;
  "panel.focused_border"?: string;

  // Element backgrounds
  "element.background"?: string;
  "element.active"?: string;
  "element.disabled"?: string;
  "element.hover"?: string;
  "element.selected"?: string;

  // Ghost element backgrounds
  "ghost_element.background"?: string;
  "ghost_element.active"?: string;
  "ghost_element.disabled"?: string;
  "ghost_element.hover"?: string;
  "ghost_element.selected"?: string;

  // Editor colors
  "editor.background"?: string;
  "editor.foreground"?: string;
  "editor.gutter.background"?: string;
  "editor.line_number"?: string;
  "editor.active_line_number"?: string;
  "editor.hover_line_number"?: string;
  "editor.active_line.background"?: string;
  "editor.highlighted_line.background"?: string;
  "editor.subheader.background"?: string;
  "editor.invisible"?: string;
  "editor.indent_guide"?: string;
  "editor.indent_guide_active"?: string;
  "editor.wrap_guide"?: string;
  "editor.active_wrap_guide"?: string;

  // Editor document highlights
  "editor.document_highlight.bracket_background"?: string;
  "editor.document_highlight.read_background"?: string;
  "editor.document_highlight.write_background"?: string;

  // Panel colors
  "panel.background"?: string;
  "panel.indent_guide"?: string;
  "panel.indent_guide_active"?: string;
  "panel.indent_guide_hover"?: string;

  // Tab colors
  "tab_bar.background"?: string;
  "tab.active_background"?: string;
  "tab.inactive_background"?: string;

  // Status bar
  "status_bar.background"?: string;

  // Title bar
  "title_bar.background"?: string;
  "title_bar.inactive_background"?: string;

  // Toolbar
  "toolbar.background"?: string;

  // Scrollbar
  "scrollbar.thumb.background"?: string;
  "scrollbar.thumb.border"?: string;
  "scrollbar.thumb.hover_background"?: string;
  "scrollbar.thumb.active_background"?: string;
  "scrollbar.track.background"?: string;
  "scrollbar.track.border"?: string;

  // Search
  "search.match_background"?: string;
  "search.active_match_background"?: string;

  // Terminal colors
  "terminal.background"?: string;
  "terminal.foreground"?: string;
  "terminal.bright_foreground"?: string;
  "terminal.dim_foreground"?: string;
  "terminal.ansi.background"?: string;
  "terminal.ansi.black"?: string;
  "terminal.ansi.red"?: string;
  "terminal.ansi.green"?: string;
  "terminal.ansi.yellow"?: string;
  "terminal.ansi.blue"?: string;
  "terminal.ansi.magenta"?: string;
  "terminal.ansi.cyan"?: string;
  "terminal.ansi.white"?: string;
  "terminal.ansi.bright_black"?: string;
  "terminal.ansi.bright_red"?: string;
  "terminal.ansi.bright_green"?: string;
  "terminal.ansi.bright_yellow"?: string;
  "terminal.ansi.bright_blue"?: string;
  "terminal.ansi.bright_magenta"?: string;
  "terminal.ansi.bright_cyan"?: string;
  "terminal.ansi.bright_white"?: string;
  "terminal.ansi.dim_black"?: string;
  "terminal.ansi.dim_red"?: string;
  "terminal.ansi.dim_green"?: string;
  "terminal.ansi.dim_yellow"?: string;
  "terminal.ansi.dim_blue"?: string;
  "terminal.ansi.dim_magenta"?: string;
  "terminal.ansi.dim_cyan"?: string;
  "terminal.ansi.dim_white"?: string;

  // Status indicators
  error?: string;
  "error.background"?: string;
  "error.border"?: string;
  warning?: string;
  "warning.background"?: string;
  "warning.border"?: string;
  info?: string;
  "info.background"?: string;
  "info.border"?: string;
  success?: string;
  "success.background"?: string;
  "success.border"?: string;
  hint?: string;
  "hint.background"?: string;
  "hint.border"?: string;
  created?: string;
  "created.background"?: string;
  "created.border"?: string;
  deleted?: string;
  "deleted.background"?: string;
  "deleted.border"?: string;
  modified?: string;
  "modified.background"?: string;
  "modified.border"?: string;
  renamed?: string;
  "renamed.background"?: string;
  "renamed.border"?: string;
  conflict?: string;
  "conflict.background"?: string;
  "conflict.border"?: string;
  hidden?: string;
  "hidden.background"?: string;
  "hidden.border"?: string;
  ignored?: string;
  "ignored.background"?: string;
  "ignored.border"?: string;
  unreachable?: string;
  "unreachable.background"?: string;
  "unreachable.border"?: string;
  predictive?: string;
  "predictive.background"?: string;
  "predictive.border"?: string;

  // Version control
  "version_control.added"?: string;
  "version_control.modified"?: string;
  "version_control.deleted"?: string;
  "version_control.word_added"?: string;
  "version_control.word_deleted"?: string;
  "version_control.conflict_marker.ours"?: string;
  "version_control.conflict_marker.theirs"?: string;

  // Icons
  icon?: string;
  "icon.accent"?: string;
  "icon.disabled"?: string;
  "icon.muted"?: string;
  "icon.placeholder"?: string;

  // Drag and drop
  "drop_target.background"?: string;

  // Syntax highlighting
  syntax?: Record<string, ZedSyntaxStyle>;

  // Player colors (for collaboration)
  players?: ZedPlayerColor[];

  // Accents
  accents?: string[];
}

interface ZedSyntaxStyle {
  color?: string;
  background_color?: string;
  font_style?: "normal" | "italic" | "oblique";
  font_weight?: number;
}

interface ZedPlayerColor {
  background: string;
  cursor: string;
  selection: string;
}

// ============================================================================
// VS Code to Zed Color Mapping
// ============================================================================

const colorMapping: Record<string, keyof ZedStyle> = {
  // Terminal colors
  "terminal.background": "terminal.background",
  "terminal.foreground": "terminal.foreground",
  "terminal.ansiBlack": "terminal.ansi.black",
  "terminal.ansiRed": "terminal.ansi.red",
  "terminal.ansiGreen": "terminal.ansi.green",
  "terminal.ansiYellow": "terminal.ansi.yellow",
  "terminal.ansiBlue": "terminal.ansi.blue",
  "terminal.ansiMagenta": "terminal.ansi.magenta",
  "terminal.ansiCyan": "terminal.ansi.cyan",
  "terminal.ansiWhite": "terminal.ansi.white",
  "terminal.ansiBrightBlack": "terminal.ansi.bright_black",
  "terminal.ansiBrightRed": "terminal.ansi.bright_red",
  "terminal.ansiBrightGreen": "terminal.ansi.bright_green",
  "terminal.ansiBrightYellow": "terminal.ansi.bright_yellow",
  "terminal.ansiBrightBlue": "terminal.ansi.bright_blue",
  "terminal.ansiBrightMagenta": "terminal.ansi.bright_magenta",
  "terminal.ansiBrightCyan": "terminal.ansi.bright_cyan",
  "terminal.ansiBrightWhite": "terminal.ansi.bright_white",

  // Base colors
  "foreground": "text",
  "focusBorder": "border.focused",
  "errorForeground": "error",

  // Button colors
  "button.background": "element.background",
  "button.secondaryBackground": "ghost_element.background",
  "button.secondaryHoverBackground": "ghost_element.hover",

  // Dropdown colors
  "dropdown.background": "elevated_surface.background",
  "dropdown.foreground": "text",

  // Input colors
  "input.background": "element.background",
  "input.foreground": "text",
  "input.placeholderForeground": "text.placeholder",
  "inputOption.activeBorder": "border.selected",
  "inputValidation.infoBorder": "info.border",
  "inputValidation.warningBorder": "warning.border",
  "inputValidation.errorBorder": "error.border",

  // Badge colors
  "badge.background": "element.background",
  "badge.foreground": "text",

  // Progress bar
  "progressBar.background": "element.background",

  // List colors
  "list.activeSelectionBackground": "element.selected",
  "list.dropBackground": "drop_target.background",
  "list.highlightForeground": "text.accent",
  "list.hoverBackground": "element.hover",
  "list.inactiveSelectionBackground": "element.selected",
  "list.warningForeground": "warning",
  "list.errorForeground": "error",

  // Activity bar
  "activityBar.background": "surface.background",
  "activityBar.foreground": "text",
  "activityBar.inactiveForeground": "text.muted",
  "activityBar.activeBorder": "border.selected",
  "activityBar.activeBackground": "element.selected",
  "activityBarBadge.background": "element.background",
  "activityBarBadge.foreground": "text",

  // Side bar
  "sideBar.background": "panel.background",
  "sideBarTitle.foreground": "text",
  "sideBarSectionHeader.background": "surface.background",
  "sideBarSectionHeader.border": "border.variant",

  // Editor groups
  "editorGroup.border": "pane_group.border",
  "editorGroup.dropBackground": "drop_target.background",
  "editorGroupHeader.tabsBackground": "tab_bar.background",

  // Tab colors
  "tab.activeBackground": "tab.active_background",
  "tab.activeForeground": "text",
  "tab.inactiveBackground": "tab.inactive_background",
  "tab.inactiveForeground": "text.muted",

  // Editor colors
  "editor.background": "editor.background",
  "editor.foreground": "editor.foreground",
  "editorLineNumber.foreground": "editor.line_number",
  "editor.selectionBackground": "editor.document_highlight.read_background",
  "editor.selectionHighlightBackground": "editor.document_highlight.read_background",
  "editor.wordHighlightBackground": "editor.document_highlight.read_background",
  "editor.wordHighlightStrongBackground": "editor.document_highlight.write_background",
  "editor.findMatchBackground": "search.active_match_background",
  "editor.findMatchHighlightBackground": "search.match_background",
  "editor.findRangeHighlightBackground": "search.match_background",
  "editor.hoverHighlightBackground": "element.hover",
  "editor.lineHighlightBorder": "editor.active_wrap_guide",
  "editorLink.activeForeground": "link_text.hover",
  "editor.rangeHighlightBackground": "editor.highlighted_line.background",
  "editorWhitespace.foreground": "editor.invisible",
  "editorIndentGuide.background": "editor.indent_guide",
  "editorIndentGuide.activeBackground": "editor.indent_guide_active",
  "editorRuler.foreground": "editor.wrap_guide",
  "editorError.foreground": "error",
  "editorWarning.foreground": "warning",

  // Editor gutter
  "editorGutter.modifiedBackground": "version_control.modified",
  "editorGutter.addedBackground": "version_control.added",
  "editorGutter.deletedBackground": "version_control.deleted",

  // Overview ruler
  "editorOverviewRuler.modifiedForeground": "version_control.modified",
  "editorOverviewRuler.addedForeground": "version_control.added",
  "editorOverviewRuler.deletedForeground": "version_control.deleted",
  "editorOverviewRuler.errorForeground": "error",
  "editorOverviewRuler.warningForeground": "warning",
  "editorOverviewRuler.infoForeground": "info",
  "editorOverviewRuler.currentContentForeground": "version_control.conflict_marker.ours",
  "editorOverviewRuler.incomingContentForeground": "version_control.conflict_marker.theirs",

  // Diff editor
  "diffEditor.insertedTextBackground": "version_control.word_added",
  "diffEditor.removedTextBackground": "version_control.word_deleted",

  // Editor widget
  "editorWidget.background": "elevated_surface.background",
  "editorSuggestWidget.background": "elevated_surface.background",
  "editorSuggestWidget.foreground": "text",
  "editorSuggestWidget.selectedBackground": "element.selected",
  "editorHoverWidget.background": "elevated_surface.background",
  "editorHoverWidget.border": "border",
  "editorMarkerNavigation.background": "elevated_surface.background",

  // Peek view
  "peekView.border": "border",
  "peekViewEditor.background": "surface.background",
  "peekViewEditor.matchHighlightBackground": "search.match_background",
  "peekViewResult.background": "surface.background",
  "peekViewResult.fileForeground": "text",
  "peekViewResult.lineForeground": "text.muted",
  "peekViewResult.matchHighlightBackground": "search.match_background",
  "peekViewResult.selectionBackground": "element.selected",
  "peekViewResult.selectionForeground": "text",
  "peekViewTitle.background": "surface.background",
  "peekViewTitleDescription.foreground": "text.muted",
  "peekViewTitleLabel.foreground": "text",

  // Merge conflicts
  "merge.currentHeaderBackground": "version_control.conflict_marker.ours",
  "merge.incomingHeaderBackground": "version_control.conflict_marker.theirs",

  // Panel colors
  "panel.background": "panel.background",
  "panelTitle.activeBorder": "border.selected",
  "panelTitle.activeForeground": "text",
  "panelTitle.inactiveForeground": "text.muted",

  // Status bar
  "statusBar.background": "status_bar.background",
  "statusBar.foreground": "text",
  "statusBarItem.prominentHoverBackground": "element.hover",

  // Title bar
  "titleBar.activeBackground": "title_bar.background",
  "titleBar.activeForeground": "text",
  "titleBar.inactiveBackground": "title_bar.inactive_background",
  "titleBar.inactiveForeground": "text.muted",

  // Extension button
  "extensionButton.prominentBackground": "element.background",
  "extensionButton.prominentHoverBackground": "element.hover",

  // Picker group
  "pickerGroup.border": "border.variant",
  "pickerGroup.foreground": "text",

  // Debug toolbar
  "debugToolBar.background": "toolbar.background",

  // Settings
  "settings.headerForeground": "text",
  "settings.modifiedItemIndicator": "modified",
  "settings.dropdownBackground": "element.background",
  "settings.dropdownForeground": "text",
  "settings.dropdownBorder": "border",
  "settings.checkboxBackground": "element.background",
  "settings.checkboxForeground": "text",
  "settings.checkboxBorder": "border",
  "settings.textInputBackground": "element.background",
  "settings.textInputForeground": "text",
  "settings.textInputBorder": "border",
  "settings.numberInputBackground": "element.background",
  "settings.numberInputForeground": "text",
  "settings.numberInputBorder": "border",

  // Breadcrumb
  "breadcrumb.foreground": "text",
  "breadcrumb.background": "background",
  "breadcrumb.focusForeground": "text.accent",
  "breadcrumb.activeSelectionForeground": "text.accent",
  "breadcrumbPicker.background": "elevated_surface.background",

  // List filter widget
  "listFilterWidget.background": "elevated_surface.background",
  "listFilterWidget.outline": "border.focused",
  "listFilterWidget.noMatchesOutline": "error.border",

  // Git decoration
  "gitDecoration.modifiedResourceForeground": "modified",
  "gitDecoration.deletedResourceForeground": "deleted",
  "gitDecoration.untrackedResourceForeground": "created",
  "gitDecoration.ignoredResourceForeground": "ignored",
  "gitDecoration.conflictingResourceForeground": "conflict",
};

// ============================================================================
// Token Color to Syntax Mapping
// ============================================================================

const tokenToSyntaxMapping: Record<string, string> = {
  // Comments
  "comment": "comment",
  "punctuation.definition.comment": "comment",
  "comment keyword.codetag.notation": "comment.doc",
  "comment.block.documentation keyword": "comment.doc",

  // Constants
  "constant": "constant",
  "variable.other.constant": "constant",
  "constant.character.escape": "string.escape",
  "constant.character.string.escape": "string.escape",
  "constant.regexp": "string.regex",
  "constant.other.date": "constant",
  "constant.other.timestamp": "constant",

  // Entities
  "entity.name.tag": "tag",
  "entity.other.attribute-name": "attribute",
  "entity.name.function": "function",
  "entity.name.type": "type",
  "entity.name.type.class": "type",
  "entity.name.class": "type",
  "entity.other.inherited-class": "type",

  // Keywords
  "keyword": "keyword",
  "punctuation.definition.keyword": "keyword",
  "storage": "keyword",
  "storage.modifier": "keyword",
  "storage.type": "keyword",

  // Strings
  "string": "string",
  "string.regexp": "string.regex",
  "string.quoted.docstring.multi": "comment.doc",
  "string.quoted.docstring.multi.python": "comment.doc",
  "string.template": "string",
  "string.unquoted.heredoc": "string",

  // Variables
  "variable": "variable",
  "variable.language": "variable.special",
  "variable.parameter": "variable",
  "variable.other.readwrite": "variable",

  // Support
  "support.function": "function.builtin",
  "support.variable": "variable",
  "support.constant": "constant",
  "support.type": "type",

  // Meta
  "meta.decorator": "attribute",

  // Markup
  "markup.inserted": "",
  "markup.deleted": "",
  "markup.changed": "",
  "markup.underline.link": "link_uri",
  "markup.bold": "emphasis.strong",
  "markup.italic": "emphasis",

  // Invalid
  "invalid": "",
  "invalid.deprecated": "",

  // Log
  "log.error": "",
  "log.warning": "",

  // Text styles
  "emphasis": "emphasis",
  "strong": "emphasis.strong",
  "header": "title",
  "markup.underline": "emphasis",
  "markup.heading": "title",

  // Punctuation
  "punctuation.definition.bracket": "punctuation.bracket",
  "punctuation.section.scope": "punctuation.bracket",
  "punctuation.definition.string.begin": "string",
  "punctuation.definition.string.end": "string",
};

// ============================================================================
// Utility Functions
// ============================================================================

function hexToRgba(hex: string, alpha: number): string {
  // Remove # if present
  hex = hex.replace("#", "");

  // Parse hex
  let r: number, g: number, b: number;
  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  } else if (hex.length === 8) {
    // Already has alpha
    return `#${hex}`;
  } else {
    return hex;
  }

  // Convert alpha to hex
  const a = Math.round(alpha * 255).toString(16).padStart(2, "0");

  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}${a}`;
}

function adjustColor(hex: string, amount: number): string {
  hex = hex.replace("#", "");

  let r: number, g: number, b: number;
  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  }

  r = Math.max(0, Math.min(255, r + amount));
  g = Math.max(0, Math.min(255, g + amount));
  b = Math.max(0, Math.min(255, b + amount));

  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

function isLightColor(hex: string): boolean {
  hex = hex.replace("#", "");

  let r: number, g: number, b: number;
  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  }

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5;
}

// ============================================================================
// Theme Conversion Functions
// ============================================================================

function convertColors(vsCodeColors: Record<string, string>): Partial<ZedStyle> {
  const zedStyle: Partial<ZedStyle> = {};

  // Map known colors
  for (const [vsCodeKey, zedKey] of Object.entries(colorMapping)) {
    if (vsCodeColors[vsCodeKey]) {
      (zedStyle as Record<string, string>)[zedKey as string] = vsCodeColors[vsCodeKey];
    }
  }

  // Derive additional colors
  deriveAdditionalColors(zedStyle, vsCodeColors);

  return zedStyle;
}

function deriveAdditionalColors(zedStyle: Partial<ZedStyle>, vsCodeColors: Record<string, string>): void {
  const editorBg = vsCodeColors["editor.background"] || vsCodeColors["terminal.background"] || "#1e1e1e";
  const editorFg = vsCodeColors["editor.foreground"] || vsCodeColors["terminal.foreground"] || "#d4d4d4";
  const isLight = isLightColor(editorBg);

  // Derive surface background if not set
  if (!zedStyle["surface.background"]) {
    zedStyle["surface.background"] = adjustColor(editorBg, isLight ? -10 : 10);
  }

  // Derive elevated surface
  if (!zedStyle["elevated_surface.background"]) {
    zedStyle["elevated_surface.background"] = adjustColor(editorBg, isLight ? -20 : 20);
  }

  // Derive background
  if (!zedStyle["background"]) {
    zedStyle["background"] = editorBg;
  }

  // Derive text colors
  if (!zedStyle["text.muted"]) {
    zedStyle["text.muted"] = adjustColor(editorFg, isLight ? -80 : -80);
  }

  if (!zedStyle["text.disabled"]) {
    zedStyle["text.disabled"] = adjustColor(editorFg, isLight ? -120 : -120);
  }

  if (!zedStyle["text.accent"]) {
    const accent = vsCodeColors["button.background"] || vsCodeColors["activityBarBadge.background"] || editorFg;
    zedStyle["text.accent"] = accent;
  }

  // Derive border colors
  if (!zedStyle["border"]) {
    zedStyle["border"] = adjustColor(editorBg, isLight ? -30 : 30);
  }

  if (!zedStyle["border.variant"]) {
    zedStyle["border.variant"] = adjustColor(editorBg, isLight ? -20 : 20);
  }

  if (!zedStyle["border.transparent"]) {
    zedStyle["border.transparent"] = hexToRgba(zedStyle["border"] || "#808080", 0);
  }

  // Derive element states
  if (!zedStyle["element.hover"]) {
    zedStyle["element.hover"] = adjustColor(zedStyle["element.background"] || editorFg, isLight ? -20 : 20);
  }

  if (!zedStyle["element.active"]) {
    zedStyle["element.active"] = adjustColor(zedStyle["element.background"] || editorFg, isLight ? -40 : 40);
  }

  if (!zedStyle["element.disabled"]) {
    zedStyle["element.disabled"] = adjustColor(zedStyle["element.background"] || editorFg, isLight ? -60 : -60);
  }

  // Derive ghost element colors
  if (!zedStyle["ghost_element.background"]) {
    zedStyle["ghost_element.background"] = hexToRgba(editorBg, 0);
  }

  if (!zedStyle["ghost_element.hover"]) {
    zedStyle["ghost_element.hover"] = hexToRgba(editorFg, 0.1);
  }

  if (!zedStyle["ghost_element.active"]) {
    zedStyle["ghost_element.active"] = hexToRgba(editorFg, 0.2);
  }

  if (!zedStyle["ghost_element.selected"]) {
    zedStyle["ghost_element.selected"] = hexToRgba(editorFg, 0.15);
  }

  // Derive editor colors
  if (!zedStyle["editor.gutter.background"]) {
    zedStyle["editor.gutter.background"] = editorBg;
  }

  if (!zedStyle["editor.active_line_number"]) {
    zedStyle["editor.active_line_number"] = zedStyle["text.accent"] || editorFg;
  }

  if (!zedStyle["editor.hover_line_number"]) {
    zedStyle["editor.hover_line_number"] = zedStyle["text.muted"] || editorFg;
  }

  if (!zedStyle["editor.active_line.background"]) {
    zedStyle["editor.active_line.background"] = hexToRgba(editorFg, 0.05);
  }

  if (!zedStyle["editor.highlighted_line.background"]) {
    zedStyle["editor.highlighted_line.background"] = hexToRgba(editorFg, 0.1);
  }

  // Derive scrollbar colors
  if (!zedStyle["scrollbar.thumb.background"]) {
    zedStyle["scrollbar.thumb.background"] = adjustColor(editorBg, isLight ? -40 : 40);
  }

  if (!zedStyle["scrollbar.thumb.hover_background"]) {
    zedStyle["scrollbar.thumb.hover_background"] = adjustColor(zedStyle["scrollbar.thumb.background"] || editorFg, isLight ? -20 : 20);
  }

  if (!zedStyle["scrollbar.thumb.active_background"]) {
    zedStyle["scrollbar.thumb.active_background"] = adjustColor(zedStyle["scrollbar.thumb.background"] || editorFg, isLight ? -40 : 40);
  }

  if (!zedStyle["scrollbar.track.background"]) {
    zedStyle["scrollbar.track.background"] = hexToRgba(editorBg, 0);
  }

  // Derive terminal dim colors from normal colors
  const ansiColors = [
    "black", "red", "green", "yellow", "blue", "magenta", "cyan", "white"
  ];

  for (const color of ansiColors) {
    const normalKey = `terminal.ansi.${color}` as keyof ZedStyle;
    const dimKey = `terminal.ansi.dim_${color}` as keyof ZedStyle;

    if (zedStyle[normalKey] && !zedStyle[dimKey]) {
      (zedStyle as Record<string, string>)[dimKey] = adjustColor(zedStyle[normalKey] as string, -40);
    }
  }

  // Derive terminal bright foreground
  if (!zedStyle["terminal.bright_foreground"]) {
    zedStyle["terminal.bright_foreground"] = editorFg;
  }

  if (!zedStyle["terminal.dim_foreground"]) {
    zedStyle["terminal.dim_foreground"] = zedStyle["text.muted"] || editorFg;
  }

  // Derive status indicator backgrounds and borders
  const indicators = ["error", "warning", "info", "success", "hint", "created", "deleted", "modified", "renamed", "conflict", "hidden", "ignored", "unreachable", "predictive"];

  for (const indicator of indicators) {
    const colorKey = indicator as keyof ZedStyle;
    const bgKey = `${indicator}.background` as keyof ZedStyle;
    const borderKey = `${indicator}.border` as keyof ZedStyle;

    if (zedStyle[colorKey]) {
      if (!zedStyle[bgKey]) {
        (zedStyle as Record<string, string>)[bgKey] = hexToRgba(zedStyle[colorKey] as string, 0.1);
      }
      if (!zedStyle[borderKey]) {
        (zedStyle as Record<string, string>)[borderKey] = zedStyle[colorKey] as string;
      }
    }
  }

  // Derive icon colors
  if (!zedStyle["icon"]) {
    zedStyle["icon"] = editorFg;
  }

  if (!zedStyle["icon.accent"]) {
    zedStyle["icon.accent"] = zedStyle["text.accent"] || editorFg;
  }

  if (!zedStyle["icon.disabled"]) {
    zedStyle["icon.disabled"] = zedStyle["text.disabled"] || editorFg;
  }

  if (!zedStyle["icon.muted"]) {
    zedStyle["icon.muted"] = zedStyle["text.muted"] || editorFg;
  }

  if (!zedStyle["icon.placeholder"]) {
    zedStyle["icon.placeholder"] = zedStyle["text.placeholder"] || editorFg;
  }

  // Derive drop target
  if (!zedStyle["drop_target.background"]) {
    zedStyle["drop_target.background"] = hexToRgba(zedStyle["text.accent"] || editorFg, 0.2);
  }
}

function convertTokenColors(tokenColors: VSCodeTokenColor[]): Record<string, ZedSyntaxStyle> {
  const syntax: Record<string, ZedSyntaxStyle> = {};

  for (const token of tokenColors) {
    const scopes = Array.isArray(token.scope) ? token.scope : [token.scope || ""];

    for (const scope of scopes) {
      const zedSyntaxKey = tokenToSyntaxMapping[scope];

      if (zedSyntaxKey && zedSyntaxKey !== "") {
        // Only set if not already set (first match wins)
        if (!syntax[zedSyntaxKey]) {
          syntax[zedSyntaxKey] = {};

          if (token.settings.foreground) {
            syntax[zedSyntaxKey].color = token.settings.foreground;
          }

          if (token.settings.background) {
            syntax[zedSyntaxKey].background_color = token.settings.background;
          }

          if (token.settings.fontStyle) {
            const styles = token.settings.fontStyle.split(" ");
            if (styles.includes("italic")) {
              syntax[zedSyntaxKey].font_style = "italic";
            }
            if (styles.includes("bold")) {
              syntax[zedSyntaxKey].font_weight = 700;
            }
          }
        }
      }
    }
  }

  return syntax;
}

function generatePlayerColors(editorBg: string, isLight: boolean): ZedPlayerColor[] {
  // Generate a set of distinct player colors for collaboration
  const baseColors = isLight
    ? ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c", "#e91e63", "#ff5722"]
    : ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7", "#dfe6e9", "#fd79a8", "#a29bfe"];

  return baseColors.map((color) => ({
    background: hexToRgba(color, 0.3),
    cursor: color,
    selection: hexToRgba(color, 0.3),
  }));
}

function convertTheme(vsCodeTheme: VSCodeTheme): ZedTheme {
  const appearance: "dark" | "light" = vsCodeTheme.type || "dark";
  const themeName = vsCodeTheme.name || "Converted Theme";
  const author = vsCodeTheme.author || "";

  // Convert colors
  const colors = vsCodeTheme.colors || {};
  const style = convertColors(colors) as ZedStyle;

  // Convert token colors to syntax
  if (vsCodeTheme.tokenColors && vsCodeTheme.tokenColors.length > 0) {
    style.syntax = convertTokenColors(vsCodeTheme.tokenColors);
  }

  // Generate player colors
  const editorBg = colors["editor.background"] || colors["terminal.background"] || "#1e1e1e";
  const isLight = appearance === "light";
  style.players = generatePlayerColors(editorBg, isLight);

  // Generate accents from theme colors
  const accentColors: string[] = [];
  if (colors["button.background"]) accentColors.push(colors["button.background"]);
  if (colors["activityBarBadge.background"]) accentColors.push(colors["activityBarBadge.background"]);
  if (colors["editorLink.activeForeground"]) accentColors.push(colors["editorLink.activeForeground"]);
  if (accentColors.length === 0) {
    accentColors.push(isLight ? "#007acc" : "#007acc");
  }
  style.accents = accentColors;

  const zedTheme: ZedTheme = {
    $schema: "https://zed.dev/schema/themes/v0.2.0.json",
    name: themeName,
    author: author,
    themes: [
      {
        name: themeName,
        appearance: appearance,
        style: style,
      },
    ],
  };

  return zedTheme;
}

// ============================================================================
// Main Function
// ============================================================================

function main(): void {
  const args = Bun.argv.slice(2);

  if (args.length < 1) {
    console.error("Usage: bun run script.ts <input-vscode-theme.json> [output-directory]");
    console.error("");
    console.error("Arguments:");
    console.error("  input-vscode-theme.json  Path to the VS Code theme JSON file");
    console.error("  output-directory         Optional: Directory where the Zed theme will be saved");
    console.error("                           If not provided, the theme will be saved next to the script");
    process.exit(1);
  }

  const inputPath = path.resolve(args[0]);
  const outputDir = args[1] ? path.resolve(args[1]) : path.dirname(Bun.main);

  // Validate input file
  if (!fs.existsSync(inputPath)) {
    console.error(`Error: Input file not found: ${inputPath}`);
    process.exit(1);
  }

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    console.log(`Creating output directory: ${outputDir}`);
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Read and parse VS Code theme
  let vsCodeTheme: VSCodeTheme = {};
  try {
    const content = fs.readFileSync(inputPath, "utf-8");
    vsCodeTheme = JSON.parse(content);
  } catch (error) {
    console.error(`Error: Failed to parse input file: ${error}`);
    process.exit(1);
  }

  // Convert theme
  console.log(`Converting theme: ${vsCodeTheme.name || "Unnamed Theme"}...`);
  const zedTheme = convertTheme(vsCodeTheme);

  // Generate output filename
  const baseName = path.basename(inputPath, ".json");
  const outputFileName = `${baseName}.json`;
  const outputPath = path.join(outputDir, outputFileName);

  // Write output
  try {
    const output = JSON.stringify(zedTheme, null, 2);
    fs.writeFileSync(outputPath, output, "utf-8");
    console.log(`✓ Successfully converted theme to: ${outputPath}`);
  } catch (error) {
    console.error(`Error: Failed to write output file: ${error}`);
    process.exit(1);
  }
}

// Run main function
main();
