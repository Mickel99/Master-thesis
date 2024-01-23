import Header1 from "./components/header/header1";
import Header2 from "./components/header/header2";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Header3 from "./components/header/header3";
import Hero from "./components/hero/hero";
import CardSection from "./components/hero/CardSection";
import Footer from "./components/footer/footer";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
        <Hero />
        <CardSection />
        <Footer/>
      </ThemeProvider>
      
    </ColorModeContext.Provider>
    
  );
}

export default App;
