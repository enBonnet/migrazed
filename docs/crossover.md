# VS Code to Zed Theme Variables Crossover

This document maps VS Code theme variables to their Zed equivalents based on semantic meaning and usage.

## Legend

- ✅ **Direct Match** - Clear semantic equivalent
- ⚠️ **Partial Match** - Similar but not exact match
- ❌ **No Match** - No clear equivalent in Zed

---

## Terminal Colors

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `terminal.background` | `terminal.background` | ✅ | Terminal background |
| `terminal.foreground` | `terminal.foreground` | ✅ | Terminal foreground |
| `terminal.ansiBlack` | `terminal.ansi.black` | ✅ | ANSI black |
| `terminal.ansiRed` | `terminal.ansi.red` | ✅ | ANSI red |
| `terminal.ansiGreen` | `terminal.ansi.green` | ✅ | ANSI green |
| `terminal.ansiYellow` | `terminal.ansi.yellow` | ✅ | ANSI yellow |
| `terminal.ansiBlue` | `terminal.ansi.blue` | ✅ | ANSI blue |
| `terminal.ansiMagenta` | `terminal.ansi.magenta` | ✅ | ANSI magenta |
| `terminal.ansiCyan` | `terminal.ansi.cyan` | ✅ | ANSI cyan |
| `terminal.ansiWhite` | `terminal.ansi.white` | ✅ | ANSI white |
| `terminal.ansiBrightBlack` | `terminal.ansi.bright_black` | ✅ | Bright black |
| `terminal.ansiBrightRed` | `terminal.ansi.bright_red` | ✅ | Bright red |
| `terminal.ansiBrightGreen` | `terminal.ansi.bright_green` | ✅ | Bright green |
| `terminal.ansiBrightYellow` | `terminal.ansi.bright_yellow` | ✅ | Bright yellow |
| `terminal.ansiBrightBlue` | `terminal.ansi.bright_blue` | ✅ | Bright blue |
| `terminal.ansiBrightMagenta` | `terminal.ansi.bright_magenta` | ✅ | Bright magenta |
| `terminal.ansiBrightCyan` | `terminal.ansi.bright_cyan` | ✅ | Bright cyan |
| `terminal.ansiBrightWhite` | `terminal.ansi.bright_white` | ✅ | Bright white |

### VS Code Terminal Only

| VS Code Variable | Description |
|------------------|-------------|
| *(none unmatched)* | - |

### Zed Terminal Only

| Zed Variable | Description |
|--------------|-------------|
| `terminal.bright_foreground` | Bright terminal foreground |
| `terminal.dim_foreground` | Dim terminal foreground |
| `terminal.ansi.background` | Terminal ANSI background |
| `terminal.ansi.dim_black` | Dim black ANSI |
| `terminal.ansi.dim_red` | Dim red ANSI |
| `terminal.ansi.dim_green` | Dim green ANSI |
| `terminal.ansi.dim_yellow` | Dim yellow ANSI |
| `terminal.ansi.dim_blue` | Dim blue ANSI |
| `terminal.ansi.dim_magenta` | Dim magenta ANSI |
| `terminal.ansi.dim_cyan` | Dim cyan ANSI |
| `terminal.ansi.dim_white` | Dim white ANSI |

---

## Base Colors

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `foreground` | `text` | ✅ | Default text/foreground color |
| `focusBorder` | `border.focused` | ✅ | Focused element border |
| `selection.background` | *(see Editor)* | ✅ | Selected text background |
| `errorForeground` | `error` | ⚠️ | Error text color |

---

## Button Colors

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `button.background` | `element.background` | ✅ | Button background |
| `button.foreground` | `text` | ⚠️ | Button text (uses default) |
| `button.secondaryBackground` | `ghost_element.background` | ⚠️ | Secondary button uses ghost |
| `button.secondaryForeground` | `text` | ⚠️ | Secondary button text |
| `button.secondaryHoverBackground` | `ghost_element.hover` | ✅ | Secondary button hover |

---

## Dropdown Colors

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `dropdown.background` | `elevated_surface.background` | ✅ | Dropdown/popup background |
| `dropdown.border` | `border` | ⚠️ | General border color |
| `dropdown.foreground` | `text` | ✅ | Dropdown text |

---

## Input Colors

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `input.background` | `element.background` | ✅ | Input field background |
| `input.foreground` | `text` | ✅ | Input text |
| `input.border` | `border` | ⚠️ | Input border |
| `input.placeholderForeground` | `text.placeholder` | ✅ | Placeholder text |
| `inputOption.activeBorder` | `border.selected` | ✅ | Active option border |
| `inputValidation.infoBorder` | `info.border` | ✅ | Info validation border |
| `inputValidation.warningBorder` | `warning.border` | ✅ | Warning validation border |
| `inputValidation.errorBorder` | `error.border` | ✅ | Error validation border |

---

## Badge Colors

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `badge.background` | `element.background` | ⚠️ | Badge background |
| `badge.foreground` | `text` | ⚠️ | Badge text |

---

## Progress Bar

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `progressBar.background` | `element.background` | ⚠️ | Progress bar background |

---

## List Colors

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `list.activeSelectionBackground` | `element.selected` | ✅ | Active selection background |
| `list.activeSelectionForeground` | `text` | ⚠️ | Active selection text |
| `list.dropBackground` | `drop_target.background` | ✅ | Drop target background |
| `list.focusBackground` | `element.background` | ⚠️ | Focused item background |
| `list.highlightForeground` | `text.accent` | ✅ | Highlighted text |
| `list.hoverBackground` | `element.hover` | ✅ | Hover background |
| `list.inactiveSelectionBackground` | `element.selected` | ⚠️ | Inactive selection |
| `list.warningForeground` | `warning` | ✅ | Warning text |
| `list.errorForeground` | `error` | ✅ | Error text |

---

## Activity Bar

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `activityBar.background` | `surface.background` | ⚠️ | Activity bar uses surface |
| `activityBar.foreground` | `text` | ✅ | Activity bar text |
| `activityBar.inactiveForeground` | `text.muted` | ✅ | Inactive items |
| `activityBar.activeBorder` | `border.selected` | ✅ | Active item border |
| `activityBar.activeBackground` | `element.selected` | ✅ | Active item background |
| `activityBarBadge.background` | `element.background` | ⚠️ | Badge background |
| `activityBarBadge.foreground` | `text` | ⚠️ | Badge text |

---

## Side Bar

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `sideBar.background` | `panel.background` | ✅ | Side panel background |
| `sideBarTitle.foreground` | `text` | ✅ | Panel title text |
| `sideBarSectionHeader.background` | `surface.background` | ⚠️ | Section header background |
| `sideBarSectionHeader.border` | `border.variant` | ✅ | Section divider |

---

## Editor Groups

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `editorGroup.border` | `pane_group.border` | ✅ | Editor group border |
| `editorGroup.dropBackground` | `drop_target.background` | ✅ | Drop background |
| `editorGroupHeader.tabsBackground` | `tab_bar.background` | ✅ | Tabs container |

---

## Tab Colors

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `tab.activeBackground` | `tab.active_background` | ✅ | Active tab background |
| `tab.activeForeground` | `text` | ✅ | Active tab text |
| `tab.border` | `border` | ⚠️ | Tab border |
| `tab.activeBorderTop` | `border.selected` | ⚠️ | Active tab top border |
| `tab.inactiveBackground` | `tab.inactive_background` | ✅ | Inactive tab background |
| `tab.inactiveForeground` | `text.muted` | ✅ | Inactive tab text |

---

## Editor Colors

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `editor.background` | `editor.background` | ✅ | Editor background |
| `editor.foreground` | `editor.foreground` | ✅ | Editor text |
| `editorLineNumber.foreground` | `editor.line_number` | ✅ | Line numbers |
| `editor.selectionBackground` | `editor.document_highlight.read_background` | ⚠️ | Selection highlight |
| `editor.selectionHighlightBackground` | `editor.document_highlight.read_background` | ⚠️ | Selection highlight |
| `editor.foldBackground` | `editor.highlighted_line.background` | ⚠️ | Folded region |
| `editor.foldPlaceholderForeground` | `text.muted` | ⚠️ | Fold placeholder |
| `editor.wordHighlightBackground` | `editor.document_highlight.read_background` | ✅ | Word highlight |
| `editor.wordHighlightStrongBackground` | `editor.document_highlight.write_background` | ✅ | Strong word highlight |
| `editor.findMatchBackground` | `search.active_match_background` | ✅ | Find match |
| `editor.findMatchHighlightBackground` | `search.match_background` | ✅ | Find match highlight |
| `editor.findRangeHighlightBackground` | `search.match_background` | ⚠️ | Find range highlight |
| `editor.hoverHighlightBackground` | `element.hover` | ⚠️ | Hover highlight |
| `editor.lineHighlightBorder` | `editor.active_wrap_guide` | ⚠️ | Current line highlight |
| `editorLink.activeForeground` | `link_text.hover` | ✅ | Active link |
| `editor.rangeHighlightBackground` | `editor.highlighted_line.background` | ⚠️ | Range highlight |
| `editor.snippetTabstopHighlightBackground` | `editor.document_highlight.bracket_background` | ⚠️ | Snippet tabstop |
| `editor.snippetTabstopHighlightBorder` | `border.focused` | ⚠️ | Snippet tabstop border |
| `editor.snippetFinalTabstopHighlightBackground` | `editor.document_highlight.bracket_background` | ⚠️ | Final tabstop |
| `editor.snippetFinalTabstopHighlightBorder` | `border.selected` | ⚠️ | Final tabstop border |
| `editorWhitespace.foreground` | `editor.invisible` | ✅ | Whitespace characters |
| `editorIndentGuide.background` | `editor.indent_guide` | ✅ | Indent guide |
| `editorIndentGuide.activeBackground` | `editor.indent_guide_active` | ✅ | Active indent guide |
| `editorRuler.foreground` | `editor.wrap_guide` | ✅ | Ruler/guide lines |
| `editorCodeLens.foreground` | `text.muted` | ⚠️ | CodeLens text |
| `editorBracketHighlight.foreground1` | `syntax.punctuation.bracket` | ⚠️ | Bracket color 1 |
| `editorBracketHighlight.foreground2` | `syntax.punctuation.bracket` | ⚠️ | Bracket color 2 |
| `editorBracketHighlight.foreground3` | `syntax.punctuation.bracket` | ⚠️ | Bracket color 3 |
| `editorBracketHighlight.foreground4` | `syntax.punctuation.bracket` | ⚠️ | Bracket color 4 |
| `editorBracketHighlight.foreground5` | `syntax.punctuation.bracket` | ⚠️ | Bracket color 5 |
| `editorBracketHighlight.foreground6` | `syntax.punctuation.bracket` | ⚠️ | Bracket color 6 |
| `editorBracketHighlight.unexpectedBracket.foreground` | `error` | ✅ | Unexpected bracket |
| `editorError.foreground` | `error` | ✅ | Error indicator |
| `editorWarning.foreground` | `warning` | ✅ | Warning indicator |

---

## Editor Gutter

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `editorGutter.modifiedBackground` | `version_control.modified` | ✅ | Modified line indicator |
| `editorGutter.addedBackground` | `version_control.added` | ✅ | Added line indicator |
| `editorGutter.deletedBackground` | `version_control.deleted` | ✅ | Deleted line indicator |

---

## Editor Overview Ruler

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `editorOverviewRuler.border` | `border.variant` | ⚠️ | Overview ruler border |
| `editorOverviewRuler.selectionHighlightForeground` | `editor.document_highlight.read_background` | ⚠️ | Selection highlight |
| `editorOverviewRuler.wordHighlightForeground` | `editor.document_highlight.read_background` | ⚠️ | Word highlight |
| `editorOverviewRuler.wordHighlightStrongForeground` | `editor.document_highlight.write_background` | ⚠️ | Strong word highlight |
| `editorOverviewRuler.modifiedForeground` | `version_control.modified` | ✅ | Modified indicator |
| `editorOverviewRuler.addedForeground` | `version_control.added` | ✅ | Added indicator |
| `editorOverviewRuler.deletedForeground` | `version_control.deleted` | ✅ | Deleted indicator |
| `editorOverviewRuler.errorForeground` | `error` | ✅ | Error indicator |
| `editorOverviewRuler.warningForeground` | `warning` | ✅ | Warning indicator |
| `editorOverviewRuler.infoForeground` | `info` | ✅ | Info indicator |
| `editorOverviewRuler.currentContentForeground` | `version_control.conflict_marker.ours` | ⚠️ | Current content |
| `editorOverviewRuler.incomingContentForeground` | `version_control.conflict_marker.theirs` | ⚠️ | Incoming content |

---

## Diff Editor

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `diffEditor.insertedTextBackground` | `version_control.word_added` | ✅ | Inserted text |
| `diffEditor.removedTextBackground` | `version_control.word_deleted` | ✅ | Removed text |

---

## Inline Chat

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `inlineChat.regionHighlight` | `predictive.background` | ⚠️ | Inline chat highlight |

---

## Editor Widget

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `editorWidget.background` | `elevated_surface.background` | ✅ | Widget background |
| `editorSuggestWidget.background` | `elevated_surface.background` | ✅ | Suggestion widget |
| `editorSuggestWidget.foreground` | `text` | ✅ | Suggestion text |
| `editorSuggestWidget.selectedBackground` | `element.selected` | ✅ | Selected suggestion |
| `editorHoverWidget.background` | `elevated_surface.background` | ✅ | Hover widget |
| `editorHoverWidget.border` | `border` | ✅ | Hover widget border |
| `editorMarkerNavigation.background` | `elevated_surface.background` | ⚠️ | Marker navigation |

---

## Peek View

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `peekView.border` | `border` | ⚠️ | Peek view border |
| `peekViewEditor.background` | `surface.background` | ⚠️ | Peek editor background |
| `peekViewEditor.matchHighlightBackground` | `search.match_background` | ✅ | Match highlight |
| `peekViewResult.background` | `surface.background` | ⚠️ | Results background |
| `peekViewResult.fileForeground` | `text` | ✅ | File name text |
| `peekViewResult.lineForeground` | `text.muted` | ✅ | Line number text |
| `peekViewResult.matchHighlightBackground` | `search.match_background` | ✅ | Match highlight |
| `peekViewResult.selectionBackground` | `element.selected` | ✅ | Selected result |
| `peekViewResult.selectionForeground` | `text` | ✅ | Selected text |
| `peekViewTitle.background` | `surface.background` | ⚠️ | Title background |
| `peekViewTitleDescription.foreground` | `text.muted` | ✅ | Title description |
| `peekViewTitleLabel.foreground` | `text` | ✅ | Title label |

---

## Merge Conflicts

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `merge.currentHeaderBackground` | `version_control.conflict_marker.ours` | ✅ | Current header |
| `merge.incomingHeaderBackground` | `version_control.conflict_marker.theirs` | ✅ | Incoming header |

---

## Panel Colors

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `panel.background` | `panel.background` | ✅ | Panel background |
| `panel.border` | `border` | ⚠️ | Panel border |
| `panelTitle.activeBorder` | `border.selected` | ✅ | Active title border |
| `panelTitle.activeForeground` | `text` | ✅ | Active title text |
| `panelTitle.inactiveForeground` | `text.muted` | ✅ | Inactive title text |

---

## Status Bar

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `statusBar.background` | `status_bar.background` | ✅ | Status bar background |
| `statusBar.foreground` | `text` | ✅ | Status bar text |
| `statusBar.debuggingBackground` | `element.background` | ⚠️ | Debugging mode |
| `statusBar.debuggingForeground` | `text` | ⚠️ | Debugging text |
| `statusBar.noFolderBackground` | `status_bar.background` | ⚠️ | No folder open |
| `statusBar.noFolderForeground` | `text` | ⚠️ | No folder text |
| `statusBarItem.prominentBackground` | `element.background` | ⚠️ | Prominent item |
| `statusBarItem.prominentHoverBackground` | `element.hover` | ✅ | Prominent hover |
| `statusBarItem.remoteForeground` | `text` | ⚠️ | Remote item text |
| `statusBarItem.remoteBackground` | `element.background` | ⚠️ | Remote item bg |

---

## Title Bar

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `titleBar.activeBackground` | `title_bar.background` | ✅ | Active title bar |
| `titleBar.activeForeground` | `text` | ✅ | Active title text |
| `titleBar.inactiveBackground` | `title_bar.inactive_background` | ✅ | Inactive title bar |
| `titleBar.inactiveForeground` | `text.muted` | ✅ | Inactive title text |

---

## Extension Button

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `extensionButton.prominentForeground` | `text` | ⚠️ | Button text |
| `extensionButton.prominentBackground` | `element.background` | ✅ | Button background |
| `extensionButton.prominentHoverBackground` | `element.hover` | ✅ | Button hover |

---

## Picker Group

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `pickerGroup.border` | `border.variant` | ✅ | Picker group border |
| `pickerGroup.foreground` | `text` | ✅ | Picker group text |

---

## Debug Toolbar

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `debugToolBar.background` | `toolbar.background` | ✅ | Debug toolbar |

---

## Walkthrough

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `walkThrough.embeddedEditorBackground` | `editor.background` | ⚠️ | Embedded editor |

---

## Settings

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `settings.headerForeground` | `text` | ✅ | Settings header |
| `settings.modifiedItemIndicator` | `modified` | ✅ | Modified indicator |
| `settings.dropdownBackground` | `element.background` | ✅ | Dropdown background |
| `settings.dropdownForeground` | `text` | ✅ | Dropdown text |
| `settings.dropdownBorder` | `border` | ✅ | Dropdown border |
| `settings.checkboxBackground` | `element.background` | ✅ | Checkbox background |
| `settings.checkboxForeground` | `text` | ✅ | Checkbox text |
| `settings.checkboxBorder` | `border` | ✅ | Checkbox border |
| `settings.textInputBackground` | `element.background` | ✅ | Text input bg |
| `settings.textInputForeground` | `text` | ✅ | Text input text |
| `settings.textInputBorder` | `border` | ✅ | Text input border |
| `settings.numberInputBackground` | `element.background` | ✅ | Number input bg |
| `settings.numberInputForeground` | `text` | ✅ | Number input text |
| `settings.numberInputBorder` | `border` | ✅ | Number input border |

---

## Breadcrumb

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `breadcrumb.foreground` | `text` | ✅ | Breadcrumb text |
| `breadcrumb.background` | `background` | ✅ | Breadcrumb background |
| `breadcrumb.focusForeground` | `text.accent` | ✅ | Focused breadcrumb |
| `breadcrumb.activeSelectionForeground` | `text.accent` | ✅ | Active selection |
| `breadcrumbPicker.background` | `elevated_surface.background` | ✅ | Picker background |

---

## List Filter Widget

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `listFilterWidget.background` | `elevated_surface.background` | ✅ | Filter widget bg |
| `listFilterWidget.outline` | `border.focused` | ✅ | Filter widget outline |
| `listFilterWidget.noMatchesOutline` | `error.border` | ✅ | No matches outline |

---

## Git Decoration

| VS Code Variable | Zed Equivalent | Match Type | Notes |
|------------------|----------------|------------|-------|
| `gitDecoration.modifiedResourceForeground` | `modified` | ✅ | Modified resource |
| `gitDecoration.deletedResourceForeground` | `deleted` | ✅ | Deleted resource |
| `gitDecoration.untrackedResourceForeground` | `created` | ✅ | Untracked/new resource |
| `gitDecoration.ignoredResourceForeground` | `ignored` | ✅ | Ignored resource |
| `gitDecoration.conflictingResourceForeground` | `conflict` | ✅ | Conflicting resource |

---

## Token Colors / Syntax Highlighting

| VS Code Token | Zed Syntax | Match Type | Notes |
|---------------|------------|------------|-------|
| `comment` | `syntax.comment` | ✅ | Comments |
| `comment keyword.codetag.notation` | `syntax.comment.doc` | ⚠️ | Documentation comments |
| `constant` | `syntax.constant` | ✅ | Constants |
| `variable.other.constant` | `syntax.constant` | ✅ | Constant variables |
| `constant.character.escape` | `syntax.string.escape` | ✅ | Escape sequences |
| `constant.regexp` | `syntax.string.regex` | ✅ | RegExp constants |
| `entity.name.tag` | `syntax.tag` | ✅ | HTML/XML tags |
| `entity.other.attribute-name` | `syntax.attribute` | ✅ | Attribute names |
| `entity.name.function` | `syntax.function` | ✅ | Function names |
| `entity.name.type` | `syntax.type` | ✅ | Type names |
| `entity.name.type.class` | `syntax.type` | ✅ | Class names |
| `entity.name.class` | `syntax.type` | ✅ | Class names |
| `entity.other.inherited-class` | `syntax.type` | ⚠️ | Inherited classes |
| `keyword` | `syntax.keyword` | ✅ | Keywords |
| `storage` | `syntax.keyword` | ⚠️ | Storage keywords |
| `storage.modifier` | `syntax.keyword` | ⚠️ | Modifiers |
| `string` | `syntax.string` | ✅ | String literals |
| `string.regexp` | `syntax.string.regex` | ✅ | RegExp strings |
| `string.quoted.docstring.multi` | `syntax.comment.doc` | ✅ | Docstrings |
| `string.template` | `syntax.string` | ⚠️ | Template strings |
| `punctuation.definition.string.begin` | `syntax.string` | ⚠️ | String start |
| `punctuation.definition.string.end` | `syntax.string` | ⚠️ | String end |
| `variable` | `syntax.variable` | ✅ | Variables |
| `variable.language` | `syntax.variable.special` | ✅ | Language variables |
| `variable.parameter` | `syntax.variable` | ⚠️ | Function parameters |
| `support.function` | `syntax.function.builtin` | ✅ | Built-in functions |
| `support.variable` | `syntax.variable` | ⚠️ | Built-in variables |
| `support.constant` | `syntax.constant` | ⚠️ | Built-in constants |
| `meta.decorator` | `syntax.attribute` | ✅ | Decorators |
| `markup.inserted` | `created` | ✅ | Inserted text |
| `markup.deleted` | `deleted` | ✅ | Deleted text |
| `markup.changed` | `modified` | ✅ | Changed text |
| `markup.underline.link` | `syntax.link_uri` | ✅ | Link URLs |
| `invalid` | `error` | ✅ | Invalid syntax |
| `invalid.deprecated` | `warning` | ⚠️ | Deprecated |
| `log.error` | `error` | ✅ | Log errors |
| `log.warning` | `warning` | ✅ | Log warnings |
| `emphasis` | `syntax.emphasis` | ✅ | Italic text |
| `strong` | `syntax.emphasis.strong` | ✅ | Bold text |
| `markup.bold` | `syntax.emphasis.strong` | ✅ | Bold markup |
| `markup.italic` | `syntax.emphasis` | ✅ | Italic markup |
| `markup.heading` | `syntax.title` | ✅ | Headings |
| `header` | `syntax.title` | ✅ | Headers |
| `markup.underline` | `syntax.emphasis` | ⚠️ | Underlined text |
| `punctuation.definition.comment` | `syntax.comment` | ⚠️ | Comment punctuation |
| `punctuation.definition.bracket` | `syntax.punctuation.bracket` | ✅ | Brackets |
| `punctuation.section.scope` | `syntax.punctuation.bracket` | ⚠️ | Scope punctuation |
| `source.*` | `syntax.primary` | ⚠️ | Source files |

---

# Unmatched Variables

## VS Code Only (No Clear Zed Equivalent)

### Editor-Specific Features

| VS Code Variable | Description | Possible Zed Workaround |
|------------------|-------------|------------------------|
| `editor.foldPlaceholderForeground` | Fold placeholder text | `text.muted` |
| `editor.snippetTabstopHighlightBackground` | Snippet tabstop bg | `editor.document_highlight.bracket_background` |
| `editor.snippetTabstopHighlightBorder` | Snippet tabstop border | `border.focused` |
| `editor.snippetFinalTabstopHighlightBackground` | Final tabstop bg | `editor.document_highlight.bracket_background` |
| `editor.snippetFinalTabstopHighlightBorder` | Final tabstop border | `border.selected` |
| `editorCodeLens.foreground` | CodeLens text | `text.muted` |

### VS Code UI Components

| VS Code Variable | Description | Possible Zed Workaround |
|------------------|-------------|------------------------|
| `walkThrough.embeddedEditorBackground` | Walkthrough embedded editor | `editor.background` |
| `inlineChat.regionHighlight` | Inline chat region | `predictive.background` |

### Bracket Pair Colorization (VS Code Specific)

| VS Code Variable | Description | Notes |
|------------------|-------------|-------|
| `editorBracketHighlight.foreground1` | Bracket color 1 | Zed uses single `syntax.punctuation.bracket` |
| `editorBracketHighlight.foreground2` | Bracket color 2 | - |
| `editorBracketHighlight.foreground3` | Bracket color 3 | - |
| `editorBracketHighlight.foreground4` | Bracket color 4 | - |
| `editorBracketHighlight.foreground5` | Bracket color 5 | - |
| `editorBracketHighlight.foreground6` | Bracket color 6 | - |

---

## Zed Only (No Clear VS Code Equivalent)

### Zed Core Concepts

| Zed Variable | Description | Notes |
|--------------|-------------|-------|
| `background` | App background | VS Code uses workbench theming |
| `background.appearance` | Window appearance | Zed-specific (opaque/transparent/blurred) |
| `surface.background` | Grounded surfaces | VS Code uses various panel backgrounds |
| `elevated_surface.background` | Elevated surfaces | Popups, dialogs |

### Zed Element System

| Zed Variable | Description | Notes |
|--------------|-------------|-------|
| `element.background` | Generic element bg | VS Code uses specific component colors |
| `element.active` | Active element | Mouse pressed state |
| `element.disabled` | Disabled element | - |
| `element.hover` | Hover element | - |
| `element.selected` | Selected element | - |
| `ghost_element.background` | Ghost element bg | Transparent background |
| `ghost_element.active` | Ghost active | - |
| `ghost_element.disabled` | Ghost disabled | - |
| `ghost_element.hover` | Ghost hover | - |
| `ghost_element.selected` | Ghost selected | - |

### Zed Border System

| Zed Variable | Description | Notes |
|--------------|-------------|-------|
| `border.disabled` | Disabled border | - |
| `border.transparent` | Transparent border | Placeholder borders |
| `border.variant` | Deemphasized border | Section dividers |
| `pane.focused_border` | Focused pane border | - |
| `panel.focused_border` | Focused panel border | - |

### Zed Text System

| Zed Variable | Description | Notes |
|--------------|-------------|-------|
| `text.accent` | Accent text | Matched search chars, active filters |
| `text.disabled` | Disabled text | - |
| `text.muted` | Muted text | Deemphasized text |

### Zed Editor Features

| Zed Variable | Description | Notes |
|--------------|-------------|-------|
| `editor.gutter.background` | Gutter background | VS Code uses editor background |
| `editor.active_line_number` | Active line number | VS Code uses `editorLineNumber.activeForeground` |
| `editor.hover_line_number` | Hovered line number | VS Code doesn't have specific |
| `editor.active_line.background` | Active line bg | VS Code uses `editor.lineHighlightBackground` |
| `editor.highlighted_line.background` | Highlighted line | VS Code uses selection highlight |
| `editor.subheader.background` | Subheader bg | VS Code doesn't have |
| `editor.active_wrap_guide` | Active wrap guide | VS Code uses `editorRuler.foreground` |

### Zed Scrollbar

| Zed Variable | Description | Notes |
|--------------|-------------|-------|
| `scrollbar.thumb.background` | Scrollbar thumb | VS Code uses workbench colors |
| `scrollbar.thumb.border` | Thumb border | - |
| `scrollbar.thumb.hover_background` | Thumb hover | - |
| `scrollbar.thumb.active_background` | Thumb active | - |
| `scrollbar.track.background` | Track background | - |
| `scrollbar.track.border` | Track border | - |

### Zed Status Indicators

| Zed Variable | Description | Notes |
|--------------|-------------|-------|
| `success` | Success indicator | VS Code uses gitDecoration |
| `success.background` | Success bg | - |
| `success.border` | Success border | - |
| `hint` | Hint indicator | VS Code uses editor hints |
| `hint.background` | Hint bg | - |
| `hint.border` | Hint border | - |
| `created` | Created indicator | VS Code uses gitDecoration.untracked |
| `created.background` | Created bg | - |
| `created.border` | Created border | - |
| `renamed` | Renamed indicator | VS Code doesn't have specific |
| `renamed.background` | Renamed bg | - |
| `renamed.border` | Renamed border | - |
| `hidden` | Hidden indicator | VS Code uses gitDecoration.ignored |
| `hidden.background` | Hidden bg | - |
| `hidden.border` | Hidden border | - |
| `unreachable` | Unreachable indicator | VS Code doesn't have |
| `unreachable.background` | Unreachable bg | - |
| `unreachable.border` | Unreachable border | - |
| `predictive` | Predictive indicator | AI-generated content |
| `predictive.background` | Predictive bg | - |
| `predictive.border` | Predictive border | - |

### Zed Icons

| Zed Variable | Description | Notes |
|--------------|-------------|-------|
| `icon` | Default icon fill | VS Code uses foreground colors |
| `icon.accent` | Accent icon fill | - |
| `icon.disabled` | Disabled icon fill | - |
| `icon.muted` | Muted icon fill | - |
| `icon.placeholder` | Placeholder icon fill | - |

### Zed Players (Collaboration)

| Zed Variable | Description | Notes |
|--------------|-------------|-------|
| `players` | Array of player colors | Multiplayer collaboration |

### Zed Accents

| Zed Variable | Description | Notes |
|--------------|-------------|-------|
| `accents` | Array of accent colors | Theme-wide accent colors |

### Zed Drag and Drop

| Zed Variable | Description | Notes |
|--------------|-------------|-------|
| `drop_target.background` | Drop target bg | VS Code uses `list.dropBackground` |

### Zed Panel Indent Guides

| Zed Variable | Description | Notes |
|--------------|-------------|-------|
| `panel.indent_guide` | Panel indent guide | VS Code doesn't have |
| `panel.indent_guide_active` | Active panel indent | - |
| `panel.indent_guide_hover` | Hover panel indent | - |

---

## Summary

| Category | VS Code Variables | Zed Variables | Matched | VS Code Only | Zed Only |
|----------|-------------------|---------------|---------|--------------|----------|
| Terminal | 18 | 28 | 16 | 0 | 12 |
| Base Colors | 4 | 7 | 3 | 0 | 4 |
| Buttons | 5 | 10 | 5 | 0 | 6 |
| Dropdowns | 3 | - | 3 | 0 | 0 |
| Input | 8 | - | 8 | 0 | 0 |
| Badges | 2 | - | 2 | 0 | 0 |
| Progress | 1 | - | 1 | 0 | 0 |
| Lists | 9 | - | 9 | 0 | 0 |
| Activity Bar | 7 | - | 7 | 0 | 0 |
| Side Bar | 4 | - | 4 | 0 | 0 |
| Editor Groups | 3 | 3 | 3 | 0 | 0 |
| Tabs | 6 | 3 | 6 | 0 | 0 |
| Editor | 32 | 15 | 28 | 4 | 5 |
| Editor Gutter | 3 | - | 3 | 0 | 0 |
| Overview Ruler | 12 | - | 12 | 0 | 0 |
| Diff Editor | 2 | 7 | 2 | 0 | 5 |
| Inline Chat | 1 | - | 1 | 0 | 0 |
| Editor Widget | 7 | - | 7 | 0 | 0 |
| Peek View | 12 | - | 12 | 0 | 0 |
| Merge Conflicts | 2 | 2 | 2 | 0 | 0 |
| Panels | 5 | 4 | 5 | 0 | 1 |
| Status Bar | 10 | 1 | 10 | 0 | 0 |
| Title Bar | 4 | 2 | 4 | 0 | 0 |
| Extension Button | 3 | - | 3 | 0 | 0 |
| Picker Group | 2 | - | 2 | 0 | 0 |
| Debug Toolbar | 1 | - | 1 | 0 | 0 |
| Walkthrough | 1 | - | 1 | 0 | 0 |
| Settings | 13 | - | 13 | 0 | 0 |
| Breadcrumb | 5 | - | 5 | 0 | 0 |
| List Filter | 3 | - | 3 | 0 | 0 |
| Git Decoration | 5 | - | 5 | 0 | 0 |
| Syntax/Token | ~200 | ~50 | ~45 | ~155 | ~5 |
| **TOTAL** | **~400** | **~120** | **~240** | **~160** | **~40** |

### Key Differences

1. **Architecture**: VS Code uses a component-specific approach (e.g., `button.background`, `input.background`), while Zed uses a semantic system (e.g., `element.background` for all interactive elements).

2. **Status Indicators**: Zed has a comprehensive status indicator system (`success`, `hint`, `created`, `renamed`, `hidden`, `unreachable`, `predictive`) that VS Code handles through git decorations and editor colors.

3. **Terminal**: Zed supports dim ANSI colors and additional terminal states that VS Code doesn't have.

4. **Icons**: Zed has dedicated icon color variables, while VS Code uses foreground colors.

5. **Collaboration**: Zed has player colors for multiplayer features that VS Code doesn't have.

6. **Scrollbar**: Zed has detailed scrollbar styling that VS Code handles through workbench theming.

7. **Syntax**: VS Code has a much more granular token color system with language-specific scopes, while Zed uses a simplified syntax highlighting system.
