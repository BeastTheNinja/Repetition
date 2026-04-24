// Hovedapplikationskomponent for elpris PWA
// Indeholder routing og fælles layout (NavBar, Footer)
// Viser forskellige sider afhængigt af URL (Now, History, Overview, Settings)
import { BrowserRouter, Route, Router, Routes } from "react-router";
import { Now } from "./pages/now";
import { History } from "./pages/history";
import { OverView } from "./pages/overview";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { SettingsPage } from "./pages/settings/SettingsPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Now />} />
        <Route path="/history" element={<History />} />
        <Route path="/overview" element={<OverView />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
