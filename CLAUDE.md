# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

`react-native-sketchbook` is a React Native design system published to npm. There is no app in this
repo — Storybook (rendered through `react-native-web`) is the only way to run and view components,
and the built Storybook is also the public demo site deployed to Vercel.

## Commands

Package manager is **pnpm** (see `packageManager` in `package.json`).

```bash
pnpm storybook          # dev server on :6006 — the primary dev loop
pnpm type-check         # tsc -p tsconfig.typecheck.json (covers src + stories + .storybook)
pnpm lint               # biome check . (lint + formatting + import sorting)
pnpm format             # biome check . --apply (auto-fixes)
pnpm build              # tsc -> dist/ (this is what `prepare`/publish runs)
pnpm build-storybook    # static build -> storybook-static/
```

CI (`.github/workflows/test.yml`) runs `pnpm lint` and `pnpm type-check` on every push. There is no
unit test suite; the only tests are visual regression:

```bash
pnpm build-storybook    # must run first
pnpm storycap:all       # serves storybook-static and captures 414x736 screenshots -> __screenshots__/
pnpm reg-suit           # diffs against the S3 baseline keyed by git hash (needs AWS creds)
```

`storycap:all` deletes `__screenshots__` and needs Chrome available. Locally you usually only need
`storybook` + `type-check` + `lint`; the reg-suit step is CI-only in practice.

## Architecture

### Theme system (`src/Themes`)
Everything visual flows through React context, not stylesheets:

- `theme.ts` composes `colors.ts` (light/dark maps with identical keys) + `size.ts`
  (`DefaultFontSize`, `DefaultSpaceSize`).
- `ThemeProvider` takes `appearance` (`'light' | 'dark'`) and an optional `theme` override.
- Components never import color/size constants directly — they call `useColors()`,
  `useFontSizes()`, `useSpaceSizes()`, `useAppearance()`. `useColors()` already resolves
  light vs. dark, so components stay appearance-agnostic.
- Dark mode works because `darkTheme` spreads `lightTheme` and overrides a few keys. Adding a color
  means adding it to `lightTheme` (which extends the `Color` union) and overriding in `darkTheme`
  only if it must differ.

### Component conventions
- One directory per category (`Buttons/`, `Icons/`, `Typography/`, …), each with an `index.ts`
  barrel; `src/index.ts` is a hand-maintained public API re-export. **New public components must be
  added to `src/index.ts` explicitly** — the barrels alone don't publish them (e.g. `XStack`/`YStack`
  in `Utils/Stacks.tsx` are exported from `Utils/index.ts` but not from the package root).
- Composition over props explosion: a `Base*` component holds layout/behavior and themed variants
  wrap it (`BaseButton` → `PrimaryButton`, `RoundButton`; `Typography` → `Heading`, `Paragraph`, …).
- Components are `React.FC` wrapped in `React.memo` with an explicit `displayName`, styles in a
  module-level `StyleSheet.create`, and dynamic (themed) values merged in via style arrays.
- Prop types use JSDoc comments — Storybook's `ArgsTable` renders them as the prop docs.
- **No external dependencies.** Everything is built from `react-native` primitives; icons in
  `src/Icons` are drawn with positioned `View`s rather than an SVG library. Keep it that way — the
  package ships zero runtime deps.
- Web parity matters (`react-native-web`): use `Pressable`/`PressableOpacity`, and consult
  `Utils/Platform.ts` (`isWeb`, `isIOS`, `isAndroid`, `isIPad`) rather than checking `Platform.OS`
  ad hoc.

### Stories
Stories live next to components and are picked up by `../src/**/*.stories.@(tsx|mdx)`. Two formats
coexist (Storybook 7): older `.stories.mdx` docs pages using `Meta`/`Story`/`ArgsTable`, and
`.stories.tsx` files. For light/dark comparison stories, use `LightThemeDecorator` /
`DarkThemeDecorator` from `.storybook/StoryDecorator.tsx`; the global decorator only wraps stories in
a flex `View`. Every new story also becomes a visual-regression screenshot.

`.storybook/main.js` aliases `react-native` → `react-native-web` and runs `.tsx`/`.jsx` through
`@react-native/babel-preset`, which is why RN source works unchanged in the browser.

### Build output and type-checking
Two tsconfigs, on purpose. `tsconfig.json` drives `pnpm build`: it emits `dist/` from `src/` with
declarations and excludes `**/*.stories.tsx` so stories stay out of the published package.
`tsconfig.typecheck.json` extends it, drops that exclusion and adds `.storybook`, and is what
`pnpm type-check` runs — so story and decorator type errors fail CI instead of only surfacing at
Storybook build time. Widening what gets checked means editing the typecheck config; widening what
gets *shipped* means editing the base one.

## Tooling notes

- **Biome** (`biome.json`) is the linter *and* formatter — there is no ESLint config in the repo.
  Both scripts run `biome check`, so `pnpm lint` in CI fails on unformatted code and unsorted
  imports, not just lint rules. The config pins the two settings where Biome's defaults disagree
  with this codebase: `indentStyle: space` and `quoteStyle`/`bracketSpacing` for single quotes and
  `{noSpace}` braces. Run `pnpm format` rather than hand-formatting.
