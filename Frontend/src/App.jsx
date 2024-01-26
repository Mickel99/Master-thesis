  import { CssBaseline, ThemeProvider } from '@mui/material';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import { ColorModeContext, useMode } from './theme';
  import Header1 from './components/header/header1';
  import Header2 from './components/header/header2';
  import Hero from './components/hero/hero';
  import Main from './components/main/main';
  import CardSection from './components/hero/CardSection';
  import Footer from './components/footer/footer';
  import ProductPage from './components/main/ProductPage';
import Header3 from './components/header/header3';
import ContactUs from './components/main/ContactUs';

  function App() {
    const [theme, colorMode] = useMode();

    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Routes>
              <Route path="/" element={<>
                <Header1 />
                <Header2 />
                <Header3 />
                <Hero />
                <Main />
                <CardSection />
                <Footer />
              </>} />
              <Route path="/contactus" element= {<ContactUs />} />
              <Route path="/products" element={<ProductPage />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }

  export default App;
