# Zed Theme Variables

This document lists all available theme variables for Zed editor themes.

## Table of Contents

- [Core Colors](#core-colors)
- [Text Colors](#text-colors)
- [Border Colors](#border-colors)
- [Element Backgrounds](#element-backgrounds)
- [Ghost Element Backgrounds](#ghost-element-backgrounds)
- [Editor Colors](#editor-colors)
- [Panel Colors](#panel-colors)
- [Tab Colors](#tab-colors)
- [Status Bar](#status-bar)
- [Title Bar](#title-bar)
- [Toolbar](#toolbar)
- [Scrollbar](#scrollbar)
- [Search](#search)
- [Terminal Colors](#terminal-colors)
- [Status Indicators](#status-indicators)
- [Version Control](#version-control)
- [Icons](#icons)
- [Player Colors](#player-colors)
- [Syntax Highlighting](#syntax-highlighting)

---

## Core Colors

- [`background`](zed-theme-variables.md) - Background Color. Used for the app background and blank panels or windows.
- [`background.appearance`](zed-theme-variables.md) - The background appearance of the window (opaque, transparent, blurred).
- [`surface.background`](zed-theme-variables.md) - Background Color. Used for grounded surfaces like a panel or tab.
- [`elevated_surface.background`](zed-theme-variables.md) - Background color. Used for elevated surfaces, like a context menu, popup, or dialog.

---

## Text Colors

- [`text`](zed-theme-variables.md) - Text Color. Default text color used for most text.
- [`text.accent`](zed-theme-variables.md) - Text Color. Color used for emphasis or highlighting certain text, like an active filter or a matched character in a search.
- [`text.disabled`](zed-theme-variables.md) - Text Color. Color used for text denoting disabled elements. Typically, the color is faded or grayed out to emphasize the disabled state.
- [`text.muted`](zed-theme-variables.md) - Text Color. Color of muted or deemphasized text. It is a subdued version of the standard text color.
- [`text.placeholder`](zed-theme-variables.md) - Text Color. Color of the placeholder text typically shown in input fields to guide the user to enter valid data.
- [`link_text.hover`](zed-theme-variables.md) - Text color for links when hovered.

---

## Border Colors

- [`border`](zed-theme-variables.md) - Border color. Used for most borders, is usually a high contrast color.
- [`border.disabled`](zed-theme-variables.md) - Border color. Used for disabled elements, like a disabled input or button.
- [`border.focused`](zed-theme-variables.md) - Border color. Used for focused elements, like keyboard focused list item.
- [`border.selected`](zed-theme-variables.md) - Border color. Used for selected elements, like an active search filter or selected checkbox.
- [`border.transparent`](zed-theme-variables.md) - Border color. Used for transparent borders. Used for placeholder borders when an element gains a border on state change.
- [`border.variant`](zed-theme-variables.md) - Border color. Used for deemphasized borders, like a visual divider between two sections.
- [`pane.focused_border`](zed-theme-variables.md) - Border color for focused panes.
- [`pane_group.border`](zed-theme-variables.md) - Border color for pane groups.
- [`panel.focused_border`](zed-theme-variables.md) - Border color for focused panels.

---

## Element Backgrounds

- [`element.background`](zed-theme-variables.md) - Background Color. Used for the background of an element that should have a different background than the surface it's on (Buttons, Inputs, Checkboxes, Radio Buttons).
- [`element.active`](zed-theme-variables.md) - Background Color. Used for the active state of an element (mouse button pressed down or Return button pressed).
- [`element.disabled`](zed-theme-variables.md) - Background Color. Used for the disabled state of an element.
- [`element.hover`](zed-theme-variables.md) - Background Color. Used for the hover state of an element (mouse entering or touch).
- [`element.selected`](zed-theme-variables.md) - Background Color. Used for the selected state of an element (selected checkbox, toggled button, etc.).

---

## Ghost Element Backgrounds

- [`ghost_element.background`](zed-theme-variables.md) - Used for the background of a ghost element that should have the same background as the surface it's on.
- [`ghost_element.active`](zed-theme-variables.md) - Background Color. Used for the active state of a ghost element.
- [`ghost_element.disabled`](zed-theme-variables.md) - Background Color. Used for the disabled state of a ghost element.
- [`ghost_element.hover`](zed-theme-variables.md) - Background Color. Used for the hover state of a ghost element.
- [`ghost_element.selected`](zed-theme-variables.md) - Background Color. Used for the selected state of a ghost element.

---

## Editor Colors

- [`editor.background`](zed-theme-variables.md) - Background color for the editor area.
- [`editor.foreground`](zed-theme-variables.md) - Foreground color for the editor text.
- [`editor.gutter.background`](zed-theme-variables.md) - Background color for the editor gutter (line numbers area).
- [`editor.line_number`](zed-theme-variables.md) - Text Color. Used for the text of the line number in the editor gutter.
- [`editor.active_line_number`](zed-theme-variables.md) - Text Color. Used for the text of the line number in the editor gutter when the line is highlighted.
- [`editor.hover_line_number`](zed-theme-variables.md) - Text Color. Used for the text of the line number when hovered.
- [`editor.active_line.background`](zed-theme-variables.md) - Background color for the currently active/highlighted line.
- [`editor.highlighted_line.background`](zed-theme-variables.md) - Background color for highlighted lines.
- [`editor.subheader.background`](zed-theme-variables.md) - Background color for editor subheaders.
- [`editor.invisible`](zed-theme-variables.md) - Text Color. Used to mark invisible characters in the editor (spaces, tabs, carriage returns, etc.).
- [`editor.indent_guide`](zed-theme-variables.md) - Color for indent guide lines.
- [`editor.indent_guide_active`](zed-theme-variables.md) - Color for active indent guide lines.
- [`editor.wrap_guide`](zed-theme-variables.md) - Color for wrap guide lines.
- [`editor.active_wrap_guide`](zed-theme-variables.md) - Color for active wrap guide lines.

### Editor Document Highlights

- [`editor.document_highlight.bracket_background`](zed-theme-variables.md) - Highlighted brackets background color. Matching brackets in the cursor scope are highlighted with this background color.
- [`editor.document_highlight.read_background`](zed-theme-variables.md) - Read-access of a symbol, like reading a variable. A document highlight is a range inside a text document which deserves special attention.
- [`editor.document_highlight.write_background`](zed-theme-variables.md) - Write-access of a symbol, like writing to a variable.

---

## Panel Colors

- [`panel.background`](zed-theme-variables.md) - Background color for panels.
- [`panel.indent_guide`](zed-theme-variables.md) - Color for panel indent guides.
- [`panel.indent_guide_active`](zed-theme-variables.md) - Color for active panel indent guides.
- [`panel.indent_guide_hover`](zed-theme-variables.md) - Color for panel indent guides on hover.

---

## Tab Colors

- [`tab_bar.background`](zed-theme-variables.md) - Background color for the tab bar.
- [`tab.active_background`](zed-theme-variables.md) - Background color for active tabs.
- [`tab.inactive_background`](zed-theme-variables.md) - Background color for inactive tabs.

---

## Status Bar

- [`status_bar.background`](zed-theme-variables.md) - Background color for the status bar.

---

## Title Bar

- [`title_bar.background`](zed-theme-variables.md) - Background color for the title bar.
- [`title_bar.inactive_background`](zed-theme-variables.md) - Background color for the title bar when the window is inactive.

---

## Toolbar

- [`toolbar.background`](zed-theme-variables.md) - Background color for toolbars.

---

## Scrollbar

- [`scrollbar.thumb.background`](zed-theme-variables.md) - The color of the scrollbar thumb.
- [`scrollbar.thumb.border`](zed-theme-variables.md) - The border color of the scrollbar thumb.
- [`scrollbar.thumb.hover_background`](zed-theme-variables.md) - The color of the scrollbar thumb when hovered over.
- [`scrollbar.thumb.active_background`](zed-theme-variables.md) - The color of the scrollbar thumb when actively being dragged.
- [`scrollbar.track.background`](zed-theme-variables.md) - The background color of the scrollbar track.
- [`scrollbar.track.border`](zed-theme-variables.md) - The border color of the scrollbar track.

---

## Search

- [`search.match_background`](zed-theme-variables.md) - Background color for search matches.
- [`search.active_match_background`](zed-theme-variables.md) - Background color for the currently active/selected search match.

---

## Terminal Colors

### Terminal Base Colors

- [`terminal.background`](zed-theme-variables.md) - Terminal background color.
- [`terminal.foreground`](zed-theme-variables.md) - Terminal foreground color.
- [`terminal.bright_foreground`](zed-theme-variables.md) - Bright terminal foreground color.
- [`terminal.dim_foreground`](zed-theme-variables.md) - Dim terminal foreground color.
- [`terminal.ansi.background`](zed-theme-variables.md) - Terminal ANSI background color.

### Terminal ANSI Colors

- [`terminal.ansi.black`](zed-theme-variables.md) - Black ANSI terminal color.
- [`terminal.ansi.red`](zed-theme-variables.md) - Red ANSI terminal color.
- [`terminal.ansi.green`](zed-theme-variables.md) - Green ANSI terminal color.
- [`terminal.ansi.yellow`](zed-theme-variables.md) - Yellow ANSI terminal color.
- [`terminal.ansi.blue`](zed-theme-variables.md) - Blue ANSI terminal color.
- [`terminal.ansi.magenta`](zed-theme-variables.md) - Magenta ANSI terminal color.
- [`terminal.ansi.cyan`](zed-theme-variables.md) - Cyan ANSI terminal color.
- [`terminal.ansi.white`](zed-theme-variables.md) - White ANSI terminal color.

### Terminal Bright ANSI Colors

- [`terminal.ansi.bright_black`](zed-theme-variables.md) - Bright black ANSI terminal color.
- [`terminal.ansi.bright_red`](zed-theme-variables.md) - Bright red ANSI terminal color.
- [`terminal.ansi.bright_green`](zed-theme-variables.md) - Bright green ANSI terminal color.
- [`terminal.ansi.bright_yellow`](zed-theme-variables.md) - Bright yellow ANSI terminal color.
- [`terminal.ansi.bright_blue`](zed-theme-variables.md) - Bright blue ANSI terminal color.
- [`terminal.ansi.bright_magenta`](zed-theme-variables.md) - Bright magenta ANSI terminal color.
- [`terminal.ansi.bright_cyan`](zed-theme-variables.md) - Bright cyan ANSI terminal color.
- [`terminal.ansi.bright_white`](zed-theme-variables.md) - Bright white ANSI terminal color.

### Terminal Dim ANSI Colors

- [`terminal.ansi.dim_black`](zed-theme-variables.md) - Dim black ANSI terminal color.
- [`terminal.ansi.dim_red`](zed-theme-variables.md) - Dim red ANSI terminal color.
- [`terminal.ansi.dim_green`](zed-theme-variables.md) - Dim green ANSI terminal color.
- [`terminal.ansi.dim_yellow`](zed-theme-variables.md) - Dim yellow ANSI terminal color.
- [`terminal.ansi.dim_blue`](zed-theme-variables.md) - Dim blue ANSI terminal color.
- [`terminal.ansi.dim_magenta`](zed-theme-variables.md) - Dim magenta ANSI terminal color.
- [`terminal.ansi.dim_cyan`](zed-theme-variables.md) - Dim cyan ANSI terminal color.
- [`terminal.ansi.dim_white`](zed-theme-variables.md) - Dim white ANSI terminal color.

---

## Status Indicators

### Error

- [`error`](zed-theme-variables.md) - Indicates a system error, a failed operation or a diagnostic error.
- [`error.background`](zed-theme-variables.md) - Background color for error states.
- [`error.border`](zed-theme-variables.md) - Border color for error states.

### Warning

- [`warning`](zed-theme-variables.md) - Represents a warning status, like an operation that is about to fail.
- [`warning.background`](zed-theme-variables.md) - Background color for warning states.
- [`warning.border`](zed-theme-variables.md) - Border color for warning states.

### Info

- [`info`](zed-theme-variables.md) - Represents informational status updates or messages.
- [`info.background`](zed-theme-variables.md) - Background color for info states.
- [`info.border`](zed-theme-variables.md) - Border color for info states.

### Success

- [`success`](zed-theme-variables.md) - Indicates a successful operation or task completion.
- [`success.background`](zed-theme-variables.md) - Background color for success states.
- [`success.border`](zed-theme-variables.md) - Border color for success states.

### Hint

- [`hint`](zed-theme-variables.md) - Indicates a hint or some kind of additional information.
- [`hint.background`](zed-theme-variables.md) - Background color for hint states.
- [`hint.border`](zed-theme-variables.md) - Border color for hint states.

### Created

- [`created`](zed-theme-variables.md) - Indicates something new, like a new file added to a Git repository.
- [`created.background`](zed-theme-variables.md) - Background color for created states.
- [`created.border`](zed-theme-variables.md) - Border color for created states.

### Deleted

- [`deleted`](zed-theme-variables.md) - Indicates that something no longer exists, like a deleted file.
- [`deleted.background`](zed-theme-variables.md) - Background color for deleted states.
- [`deleted.border`](zed-theme-variables.md) - Border color for deleted states.

### Modified

- [`modified`](zed-theme-variables.md) - Indicates a changed or altered status, like a file that has been edited.
- [`modified.background`](zed-theme-variables.md) - Background color for modified states.
- [`modified.border`](zed-theme-variables.md) - Border color for modified states.

### Renamed

- [`renamed`](zed-theme-variables.md) - Represents a renamed status, such as a file that has been renamed.
- [`renamed.background`](zed-theme-variables.md) - Background color for renamed states.
- [`renamed.border`](zed-theme-variables.md) - Border color for renamed states.

### Conflict

- [`conflict`](zed-theme-variables.md) - Indicates some kind of conflict, like a file changed on disk while it was open, or merge conflicts in a Git repository.
- [`conflict.background`](zed-theme-variables.md) - Background color for conflict states.
- [`conflict.border`](zed-theme-variables.md) - Border color for conflict states.

### Hidden

- [`hidden`](zed-theme-variables.md) - Represents a hidden status, such as a file being hidden in a file tree.
- [`hidden.background`](zed-theme-variables.md) - Background color for hidden states.
- [`hidden.border`](zed-theme-variables.md) - Border color for hidden states.

### Ignored

- [`ignored`](zed-theme-variables.md) - Indicates that something is deliberately ignored, such as a file or operation ignored by Git.
- [`ignored.background`](zed-theme-variables.md) - Background color for ignored states.
- [`ignored.border`](zed-theme-variables.md) - Border color for ignored states.

### Unreachable

- [`unreachable`](zed-theme-variables.md) - Indicates some kind of unreachable status, like a block of code that can never be reached.
- [`unreachable.background`](zed-theme-variables.md) - Background color for unreachable states.
- [`unreachable.border`](zed-theme-variables.md) - Border color for unreachable states.

### Predictive

- [`predictive`](zed-theme-variables.md) - Indicates something that is predicted, like automatic code completion, or generated code.
- [`predictive.background`](zed-theme-variables.md) - Background color for predictive states.
- [`predictive.border`](zed-theme-variables.md) - Border color for predictive states.

---

## Version Control

- [`version_control.added`](zed-theme-variables.md) - Color for added files in version control.
- [`version_control.modified`](zed-theme-variables.md) - Color for modified files in version control.
- [`version_control.deleted`](zed-theme-variables.md) - Color for deleted files in version control.
- [`version_control.word_added`](zed-theme-variables.md) - Background color for added words in diff view.
- [`version_control.word_deleted`](zed-theme-variables.md) - Background color for deleted words in diff view.
- [`version_control.conflict_marker.ours`](zed-theme-variables.md) - Background color for "ours" conflict marker section.
- [`version_control.conflict_marker.theirs`](zed-theme-variables.md) - Background color for "theirs" conflict marker section.

---

## Icons

- [`icon`](zed-theme-variables.md) - Fill Color. Used for the default fill color of an icon.
- [`icon.accent`](zed-theme-variables.md) - Fill Color. Used for the accent fill color of an icon. This might be used to show when a toggleable icon button is selected.
- [`icon.disabled`](zed-theme-variables.md) - Fill Color. Used for the disabled fill color of an icon.
- [`icon.muted`](zed-theme-variables.md) - Fill Color. Used for the muted or deemphasized fill color of an icon.
- [`icon.placeholder`](zed-theme-variables.md) - Fill Color. Used for the placeholder fill color of an icon.

---

## Player Colors

- [`players`](zed-theme-variables.md) - Array of player color objects for multiplayer collaboration features. Each player has:
  - `background` - Background color for the player's cursor/selection
  - `cursor` - Color for the player's cursor
  - `selection` - Color for the player's text selection

---

## Syntax Highlighting

- [`syntax`](zed-theme-variables.md) - The styles for syntax nodes. This is an object where keys are syntax token types and values are HighlightStyleContent objects containing:
  - `color` - Text color for the syntax element
  - `background_color` - Background color for the syntax element
  - `font_style` - Font style (normal, italic, oblique)
  - `font_weight` - Font weight (100-900)

### Common Syntax Token Types

- [`syntax.attribute`](zed-theme-variables.md) - Attribute tokens (e.g., HTML attributes, decorators).
- [`syntax.boolean`](zed-theme-variables.md) - Boolean literals (true, false).
- [`syntax.comment`](zed-theme-variables.md) - Comments.
- [`syntax.comment.doc`](zed-theme-variables.md) - Documentation comments.
- [`syntax.constant`](zed-theme-variables.md) - Constants.
- [`syntax.constructor`](zed-theme-variables.md) - Constructors.
- [`syntax.embedded`](zed-theme-variables.md) - Embedded content.
- [`syntax.emphasis`](zed-theme-variables.md) - Emphasized text.
- [`syntax.emphasis.strong`](zed-theme-variables.md) - Strongly emphasized text (bold).
- [`syntax.enum`](zed-theme-variables.md) - Enum definitions.
- [`syntax.function`](zed-theme-variables.md) - Function names.
- [`syntax.function.builtin`](zed-theme-variables.md) - Built-in functions (e.g., print, console.log, etc.).
- [`syntax.hint`](zed-theme-variables.md) - Hint/annotation text.
- [`syntax.keyword`](zed-theme-variables.md) - Keywords.
- [`syntax.label`](zed-theme-variables.md) - Labels.
- [`syntax.link_text`](zed-theme-variables.md) - Link text.
- [`syntax.link_uri`](zed-theme-variables.md) - Link URIs/URLs.
- [`syntax.namespace`](zed-theme-variables.md) - Namespaces/modules.
- [`syntax.number`](zed-theme-variables.md) - Numeric literals.
- [`syntax.operator`](zed-theme-variables.md) - Operators.
- [`syntax.predictive`](zed-theme-variables.md) - Predictive/AI-generated content.
- [`syntax.preproc`](zed-theme-variables.md) - Preprocessor directives.
- [`syntax.primary`](zed-theme-variables.md) - Primary/default text.
- [`syntax.property`](zed-theme-variables.md) - Properties.
- [`syntax.punctuation`](zed-theme-variables.md) - Punctuation.
- [`syntax.punctuation.bracket`](zed-theme-variables.md) - Brackets.
- [`syntax.punctuation.delimiter`](zed-theme-variables.md) - Delimiters.
- [`syntax.punctuation.list_marker`](zed-theme-variables.md) - List markers.
- [`syntax.punctuation.markup`](zed-theme-variables.md) - Markup punctuation.
- [`syntax.punctuation.special`](zed-theme-variables.md) - Special punctuation.
- [`syntax.selector`](zed-theme-variables.md) - CSS selectors.
- [`syntax.selector.pseudo`](zed-theme-variables.md) - Pseudo-selectors.
- [`syntax.string`](zed-theme-variables.md) - String literals.
- [`syntax.string.escape`](zed-theme-variables.md) - Escape sequences in strings.
- [`syntax.string.regex`](zed-theme-variables.md) - Regular expressions.
- [`syntax.string.special`](zed-theme-variables.md) - Special strings.
- [`syntax.string.special.symbol`](zed-theme-variables.md) - Symbol strings.
- [`syntax.tag`](zed-theme-variables.md) - Tags (HTML, XML, etc.).
- [`syntax.text.literal`](zed-theme-variables.md) - Literal text.
- [`syntax.title`](zed-theme-variables.md) - Titles/headings.
- [`syntax.type`](zed-theme-variables.md) - Type names.
- [`syntax.variable`](zed-theme-variables.md) - Variables.
- [`syntax.variable.special`](zed-theme-variables.md) - Special variables.
- [`syntax.variant`](zed-theme-variables.md) - Enum variants.

---

## Accents

- [`accents`](zed-theme-variables.md) - Array of accent colors used throughout the theme for emphasis and highlighting.

---

## Drag and Drop

- [`drop_target.background`](zed-theme-variables.md) - Background Color. Used for the area that shows where a dragged element will be dropped.

---

## Usage Example

```json
{
  "$schema": "https://zed.dev/schema/themes/v0.2.0.json",
  "author": "Your Name",
  "name": "My Theme",
  "themes": [
    {
      "appearance": "dark",
      "name": "My Dark Theme",
      "style": {
        "background": "#1e1e1e",
        "text": "#d4d4d4",
        "editor.background": "#1e1e1e",
        "editor.foreground": "#d4d4d4",
        "border": "#454545",
        "element.background": "#2d2d2d",
        "syntax": {
          "comment": {
            "color": "#6a9955",
            "font_style": "italic"
          },
          "keyword": {
            "color": "#569cd6"
          }
        }
      }
    }
  ]
}
```
