import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Sound from "./pages/Sound";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="sound" element={<Sound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
