import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f50a4a",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "Martel Sans", "serif"].join(","),
    h2: {
      fontFamily: "Martel Sans",
      fontSize: "1.5rem",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
