# RoSeal i18n

RoSeal internationalization (i18n) GitHub repository that holds all of RoSeal's localization.
Changes here will not be made to RoSeal until its next update.

## DISCLAIMER

Strings are formatted with JSX and not treated as raw HTML. If there is a JSX tag that is unknown to
RoSeal, the string formatting fails and defaults to no formatting. Adding attributes is also not
possible. **Only editing translation strings to execute XSS is not going to work.**

**Do not translate:**

- Strings marked as "DEPRECATED"
- Strings inside arrows `<>` or curly brackets "{}", these are formatted by the extension and must
  be consistent across all locales.
  - e.g: `<bold>Seal</bold>` should be translated to `<bold>Foca</bold>`, `{sealEmoji} Seal` should
    be translated to `{sealEmoji} Foca`. (example translations, may not be accurate). We will
    automatically validate these in the future.

If you want to report a RoSeal bug or make a suggestion, please use the
[Discord server](https://discord.gg/YemzCFaQPC).
