import Header1 from "./components/header/header1";
import Header2 from "./components/header/header2";
import Header3 from "./components/header/header3";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
