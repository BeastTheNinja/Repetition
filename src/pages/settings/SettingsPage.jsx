import { useState } from "react";
import style from "./SettingsPage.module.scss";

export const SettingsPage = () => {
  const [region, setRegion] = useState("DK1");
  const [pricesInclMoms, setPricesInclMoms] = useState(false);
  const [alarmEnabled, setAlarmEnabled] = useState(false);
  const [regionOpen, setRegionOpen] = useState(false);

  return (
    <section className={style.settingsPage}>
      <h2 className={style.heading}>Indstillinger</h2>

      {/* Moms toggle */}
      <div className={style.toggleRow}>
        <span className={style.toggleLabel}>priser inkl. moms</span>
        <span
          className={
            style.toggleSwitch + (pricesInclMoms ? " " + style.on : "")
          }
          onClick={() => setPricesInclMoms((v) => !v)}>
          <span
            className={style.toggleCircle}
            style={pricesInclMoms ? { left: "2rem" } : { left: 0 }}
          />
        </span>
      </div>

      {/* Alarm toggle */}
      <div className={style.toggleRow}>
        <span className={style.toggleLabel}>laveste pris alarm</span>
        <span
          className={style.toggleSwitch + (alarmEnabled ? " " + style.on : "")}
          onClick={() => setAlarmEnabled((v) => !v)}>
          <span
            className={style.toggleCircle}
            style={alarmEnabled ? { left: "2rem" } : { left: 0 }}
          />
        </span>
      </div>

      {/* Region dropdown */}
      <div className={style.regionSection}>
        <div className={style.regionLabel}>Vælg region</div>
        <div
          className={style.regionDropdown}
          onClick={() => setRegionOpen((open) => !open)}>
          {region === "DK1" ? "region øst" : "region vest"}
          <span
            className={
              style.regionArrow + (regionOpen ? " " + style.open : "")
            }>
            <svg
              width="20"
              height="10"
              viewBox="0 0 20 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 1L10 9L19 1"
                stroke="#55EC20"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
        {regionOpen && (
          <div className={style.regionList}>
            <div
              className={
                style.regionItem +
                (region === "DK1" ? " " + style.selected : "")
              }
              onClick={() => {
                setRegion("DK1");
                setRegionOpen(false);
              }}>
              region øst
            </div>
            <div
              className={
                style.regionItem +
                (region === "DK2" ? " " + style.selected : "")
              }
              onClick={() => {
                setRegion("DK2");
                setRegionOpen(false);
              }}>
              region vest
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
