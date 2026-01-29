# Migrating Themes from VS Code to Zed

## Overview

Migrating themes from VS Code to Zed involves converting theme files from VS Code's JSON format to Zed's theme format. This process enables users to maintain their preferred visual experience when transitioning between editors.

## Theme Format Differences

### VS Code Theme Structure

VS Code themes are defined in JSON files with the following key components:

- **Colors**: UI element colors (backgrounds, borders, etc.)
- **Token Colors**: Syntax highlighting rules for different programming languages
- **Semantic Token Colors**: Enhanced syntax highlighting using semantic information

Example structure:
```json
{
  "name": "Theme Name",
  "type": "dark",
  "colors": {
    "editor.background": "#1e1e1e",
    "editor.foreground": "#d4d4d4"
  },
  "tokenColors": [
    {
      "scope": ["keyword"],
      "settings": {
        "foreground": "#569cd6"
      }
    }
  ]
}
```

### Zed Theme Structure

Zed themes use a different JSON structure with:

- **Colors**: Direct color definitions for UI elements
- **Styles**: Syntax highlighting rules organized by scope
- **Metadata**: Theme name, author, and other properties

Example structure:
```json
{
  "name": "Theme Name",
  "author": "",
  "themes": [
    {
      "name": "Theme Name",
      "appearance": "dark",
      "style": {
        "background": "#1e1e1e",
        "foreground": "#d4d4d4"
      },
      "syntax": {
        "keyword": {
          "color": "#569cd6"
        }
      }
    }
  ]
}
```

## Migration Tools

### theme_importer

Zed provides an official command-line tool called `theme_importer` that automates the conversion process.

**Installation:**

On macOS with Homebrew:
```bash
brew install blackmann/brew/zed-theme-importer
```

**Usage:**
```bash
theme_importer path/to/vscode-theme.json
```

The tool outputs a JSON object that can be directly used in Zed's theme format.

## Migration Process

### Step 1: Locate VS Code Theme Files

VS Code theme files are typically located in:
- Extension directories: `{extensionPath}/themes/*.json`
- User settings: `~/.vscode/extensions/{publisher}.{extensionName}/themes/`

### Step 2: Convert the Theme

Use the `theme_importer` tool to convert the VS Code theme:

```bash
theme_importer /path/to/vscode-theme.json > converted-theme.json
```

The output may include additional logging text. Extract only the JSON content between the first `{` and its matching `}`.

### Step 3: Format for Zed

Wrap the converted output in Zed's expected structure:

```json
{
  "name": "Theme Name",
  "author": "",
  "themes": [
    {
      // Insert converted theme properties here
    }
  ]
}
```

### Step 4: Install in Zed

Place the converted theme file in Zed's themes directory:

- **Linux/macOS**: `~/.config/zed/themes/`
- **Windows**: `%APPDATA%\Zed\themes\`

The filename should match the theme name (e.g., `my-theme.json`).

### Step 5: Activate the Theme

1. Open Zed
2. Open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P)
3. Type "Theme: Select Theme"
4. Choose your newly migrated theme

## Key Migration Considerations

### Color Mapping

| VS Code Property | Zed Property | Notes |
|------------------|--------------|-------|
| `editor.background` | `background` | Main editor background |
| `editor.foreground` | `foreground` | Default text color |
| `editor.lineHighlightBackground` | `line_highlight` | Current line highlight |
| `editorCursor.foreground` | `cursor` | Cursor color |
| `editor.selectionBackground` | `selection` | Selection color |

### Token Color Conversion

VS Code uses scope-based token coloring, while Zed organizes syntax highlighting differently:

- **VS Code**: Uses `scope` arrays with dot-notation (e.g., `["keyword.control"]`)
- **Zed**: Uses nested objects with scope names as keys

The `theme_importer` tool handles most of this conversion automatically, but manual adjustments may be needed for complex themes.

### Semantic Tokens

VS Code supports semantic token colors that provide enhanced highlighting based on language semantics. Zed has limited support for semantic tokens, so some advanced highlighting features may not transfer directly.

## Common Challenges

### 1. Incomplete Color Mapping

Some VS Code color properties may not have direct equivalents in Zed. These colors may need to be:
- Mapped to the closest Zed equivalent
- Omitted if not critical
- Manually added to the Zed theme structure

### 2. Scope Differences

VS Code and Zed use different scope naming conventions. The `theme_importer` tool attempts to map these, but:
- Some scopes may not convert perfectly
- Manual adjustments may be needed for optimal results
- Test the theme with your preferred languages

### 3. UI Element Styling

VS Code themes include extensive UI element styling (activity bar, status bar, etc.). Zed has a more limited set of UI elements:
- Focus on editor-related colors
- Some UI customizations may not be applicable
- Consider the simplified Zed UI when migrating

### 4. Multiple Theme Variants

VS Code themes often include light and dark variants. In Zed:
- Each variant should be a separate theme file
- Use the `appearance` property to specify "light" or "dark"
- Consider creating separate files for each variant

## Best Practices

### 1. Test Thoroughly

After migration:
- Open various file types (JavaScript, Python, Markdown, etc.)
- Check syntax highlighting for common constructs
- Verify UI colors look correct
- Test in both light and dark modes if applicable

### 2. Keep Original Theme

Always maintain a copy of the original VS Code theme file for:
- Reference during manual adjustments
- Re-conversion if needed
- Comparison with the migrated version

### 3. Document Customizations

If you make manual adjustments to the migrated theme:
- Document what was changed and why
- Keep notes on scope mappings that required tweaking
- Save these notes for future reference or updates

### 4. Version Control

Consider using version control for your custom themes:
- Track changes over time
- Easily revert problematic modifications
- Share themes with others

## Comparison Summary

| Aspect | VS Code | Zed |
|--------|---------|-----|
| Theme Format | JSON with tokenColors | JSON with style properties |
| Installation | Extension marketplace | Manual file copy |
| Conversion | N/A | Uses `theme_importer` |
| Storage | Extension directory | `~/.config/zed/themes/` |
| UI Customization | Extensive | Limited |
| Semantic Tokens | Full support | Limited support |
| Scope System | Dot-notation | Nested objects |

## Additional Resources

- **Zed Theme Documentation**: Official Zed documentation on theme structure
- **VS Code Theme Color Reference**: Complete list of VS Code color IDs
- **theme_importer Repository**: Source code and documentation for the conversion tool
- **Community Themes**: Browse existing Zed themes for reference and inspiration

## Troubleshooting

### Theme Not Appearing in Zed

1. Verify the file is in the correct directory
2. Check the JSON syntax is valid
3. Ensure the theme structure follows Zed's format
4. Restart Zed after adding the theme

### Colors Not Displaying Correctly

1. Check that color values are valid hex codes
2. Verify scope names are correct for your language
3. Test with a simple theme to isolate the issue
4. Review the `theme_importer` output for conversion errors

### Syntax Highlighting Issues

1. Compare scope names between VS Code and Zed
2. Check if the language is supported in Zed
3. Verify the theme includes scopes for your language
4. Consider manual adjustments for specific scopes
