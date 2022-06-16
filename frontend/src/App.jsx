import Navigation from "./components/navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import GlobalStyle from "./globalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
