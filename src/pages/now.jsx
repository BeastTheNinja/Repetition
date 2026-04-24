import { formatTime } from "../utils/formatTime";
import { useApi } from "../hook/useApi";
import style from "./now.module.scss";
import { SettingsCogButton } from "../components/SettingsCog/SettingsCogButton";

export const Now = () => {
  const { nowTime, loading, error } = useApi({ priceClass: "DK1" });

  return (
    <>
      <SettingsCogButton />
      <section className={style.nowStyling}>
        <h1>Elprisen lige nu</h1>

        <div className={style.circleWrapper}>
          <div className={style.circleOuter}></div>
          <div className={style.circleMiddle}></div>
          <div className={style.circleInner}></div>

          <div className={style.price}>
            <span className={style.value}>
              {loading ? "..." : (nowTime?.DKK_per_kWh ?? "-")} KR
            </span>
            <span className={style.unit}>PR. KWH</span>
          </div>
        </div>

        {error ?
          <h4>Kunne ikke hente data</h4>
        : <h4>
            {formatTime(nowTime?.time_start)} - {formatTime(nowTime?.time_end)}
          </h4>
        }
      </section>
    </>
  );
};
