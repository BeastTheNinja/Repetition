import { useState } from "react";
import { useNavigate } from "react-router";
import { SettingsCog } from "./SettingsCog";
import { SettingsModal } from "../SettingsModal/SettingsModal";

// Simple mobile detection (can be improved)
const isMobile = () => window.innerWidth <= 600;

export const SettingsCogButton = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isMobile()) {
      navigate("/settings");
    } else {
      setModalOpen(true);
    }
  };

  return (
    <>
      <span onClick={handleClick} style={{ cursor: "pointer" }}>
        <SettingsCog />
      </span>
      <SettingsModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
