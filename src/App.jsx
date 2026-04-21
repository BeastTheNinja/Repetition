import { BrowserRouter, Route, Router, Routes } from "react-router";
import { Now } from "./pages/now";
import { History } from "./pages/history";
import { OverView } from "./pages/overview";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Now />} />
        <Route path="/history" element={<History />} />
        <Route path="/overview" element={<OverView />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
