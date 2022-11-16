import { PaletteOptions, css } from "@mui/material/styles";

export type AllowedTheme = NonNullable<PaletteOptions["mode"]>;

export const DEFAULT_THEME: AllowedTheme = "dark";

export const globalStyles = css`
  :root {
    body {
      background-color: #fff;
      color: #333;
    }
  }
  [data-theme="dark"] {
    body {
      background-color: #333;
      color: #fff;
    }
  }
`;