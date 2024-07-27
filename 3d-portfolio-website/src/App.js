import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Sections/Hero";
import Skills from "./components/Sections/Skills";
import Experience from "./components/Sections/Experience";
import Education from "./components/Sections/Education";
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";
import Footer from "./components/Sections/Footer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  position: relative;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        {" "}
        <Navbar />
        <Body>
          <Hero />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
          <Footer />
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
