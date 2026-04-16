// TypeScript mirror of CSS design tokens for use in JS contexts
// The source of truth is globals.css — keep these in sync when rebranding

export const themeTokens = {
  primary: {
    50: "#eef8fd",
    100: "#d5eefb",
    200: "#abddf7",
    300: "#72c5f1",
    400: "#3baee6",
    500: "#1e9fd8",
    600: "#1882b6",
    700: "#156a96",
    800: "#14567a",
    900: "#1a2c3d",
  },
  foreground: "#1a2c3d",
  muted: "#6b7280",
  border: "#e5e7eb",
  surface: "#f8fafc",
  background: "#ffffff",
} as const;
