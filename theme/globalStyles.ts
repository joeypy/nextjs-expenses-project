import { PaletteOptions, css } from "@mui/material/styles";

export type AllowedTheme = NonNullable<PaletteOptions["mode"]>;

export const DEFAULT_THEME: AllowedTheme = "dark";

export const globalStyles = css`
  :root {
    body {
      background-color: #fff;
      color: #474747;
    }
  }
  [data-theme="dark"] {
    body {
      background-color: #474747;
      color: #fff;
    }
  }
`;