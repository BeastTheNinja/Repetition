import styles from "./SettingsModal.module.scss";
import CirkelXmark from "../../assets/icons/CirkelXmark.svg";

export const SettingsModal = ({
  isOpen = false,
  onClose = () => {},
  region = "DK1",
  onRegionChange = () => {},
  onTogglePricesInclMoms = () => {},
  onToggleAlarm = () => {},
  pricesInclMoms = false,
  alarmEnabled = false,
}) => {
  if (!isOpen) return null;
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent} style={{ position: "relative" }}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Luk">
          <img src={CirkelXmark} alt="Luk" width={28} height={28} />
        </button>
        <h2
          style={{
            textAlign: "center",
            color: "#EBEBEB",
            fontSize: 32,
            fontWeight: 300,
            fontFamily: "Roboto",
          }}>
          indstillinger
        </h2>
        <div className={styles.togglesSection}>
          {/* Moms toggle */}
          <div className={styles.toggleRow}>
            <span className={styles.toggleLabel}>priser inkl. moms</span>
            <span
              className={
                styles.toggleSwitch + (pricesInclMoms ? " " + styles.on : "")
              }
              onClick={onTogglePricesInclMoms}
              role="button"
              tabIndex={0}
              aria-pressed={pricesInclMoms}>
              <span
                className={styles.toggleCircle}
                style={pricesInclMoms ? { left: "2rem" } : { left: 0 }}
              />
            </span>
          </div>
          {/* Alarm toggle */}
          <div className={styles.toggleRow}>
            <span className={styles.toggleLabel}>laveste pris alarm</span>
            <span
              className={
                styles.toggleSwitch + (alarmEnabled ? " " + styles.on : "")
              }
              onClick={onToggleAlarm}
              role="button"
              tabIndex={0}
              aria-pressed={alarmEnabled}>
              <span
                className={styles.toggleCircle}
                style={alarmEnabled ? { left: "2rem" } : { left: 0 }}
              />
            </span>
          </div>
        </div>
        {/* Region vælger */}
        <div className={styles.regionSection}>
          <div className={styles.regionLabel}>Vælg region</div>
          <div className={styles.regionDropdown}>
            <select
              id="region-select"
              value={region}
              onChange={(e) => onRegionChange(e.target.value)}
              style={{
                width: "100%",
                background: "transparent",
                color: "#fff",
                border: "none",
                fontSize: 16,
                textAlign: "center",
              }}>
              <option value="DK1">region øst</option>
              <option value="DK2">region vest</option>
            </select>
            <span className={styles.regionArrow} />
          </div>
        </div>
      </div>
    </div>
  );
};
