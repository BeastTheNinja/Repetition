import { useMemo } from "react";
import { useApi } from "../hook/useApi";
import { PriceList } from "../components/PriceList/PriceList";
import { PriceExtremes } from "../components/PriceExtremes/PriceExtremes";
import { SettingsCogButton } from "../components/SettingsCog/SettingsCogButton";
import style from "./overview.module.scss";

export const OverView = () => {
  const { prices, loading, error } = useApi({ priceClass: "DK1" });
  const dailyPrices = useMemo(() => prices.slice(0, 24), [prices]);

  const minPrice = useMemo(() => {
    if (!dailyPrices.length) return null;
    return dailyPrices.reduce((min, item) =>
      item.DKK_per_kWh < min.DKK_per_kWh ? item : min,
    );
  }, [dailyPrices]);

  const maxPrice = useMemo(() => {
    if (!dailyPrices.length) return null;
    return dailyPrices.reduce((max, item) =>
      item.DKK_per_kWh > max.DKK_per_kWh ? item : max,
    );
  }, [dailyPrices]);

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
        <SettingsCogButton />
      </div>
      <section className={style.overviewPage}>
        <h1 className={style.title}>Oversigt</h1>

        <PriceExtremes minPrice={minPrice} maxPrice={maxPrice} />

        {loading && <p className={style.statusText}>Henter priser...</p>}
        {error && <p className={style.statusText}>Kunne ikke hente data.</p>}

        {!loading && !error && <PriceList items={dailyPrices} />}
      </section>
    </>
  );
};
