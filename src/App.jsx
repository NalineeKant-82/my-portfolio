import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import MainLayout from "./layout/MainLayout";

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0052cc",
      light: "#ffffff",
      dark: "#000000",
      paper: "#171717",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
  typography: {},
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
