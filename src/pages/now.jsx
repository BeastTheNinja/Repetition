// Side: Now
// Viser elprisen lige nu for valgt region (standard DK1)
// Henter data via useApi og viser loading, fejl og pris
import { formatTime } from "../utils/formatTime";
import { useApi } from "../hook/useApi";
import style from "./now.module.scss";
import { PageHeader } from "../components/PageHeader";
import { StatusText } from "../components/StatusText";

export const Now = () => {
  const { nowTime, loading, error } = useApi({ priceClass: "DK1" });

  return (
    <>
      <PageHeader />
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

        <StatusText loading={loading} error={error} />
        {!loading && !error && (
          <h4>
            {formatTime(nowTime?.time_start)} - {formatTime(nowTime?.time_end)}
          </h4>
        )}
      </section>
    </>
  );
};
