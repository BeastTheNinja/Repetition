// Fælles side-header med indstillingsikon og evt. overskrift
import { SettingsCogButton } from "../components/SettingsCog/SettingsCogButton";

export const PageHeader = ({ title }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "flex-end",
      width: "100%",
      alignItems: "center",
      marginBottom: "1rem",
    }}>
    {title && (
      <h1 style={{ flex: 1, textAlign: "left", margin: 0 }}>{title}</h1>
    )}
    <SettingsCogButton />
  </div>
);
