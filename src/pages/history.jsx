import { useState } from "react";
import { useApi } from "../hook/useApi";
import { PriceList } from "../components/PriceList/PriceList";
import { DateInputCard } from "../components/DateInputCard/DateInputCard";
import { SettingsCogButton } from "../components/SettingsCog/SettingsCogButton";
import style from "./history.module.scss";

const formatDisplayDate = (isoDate) => {
  const [year, month, day] = isoDate.split("-");
  if (!year || !month || !day) return isoDate;
  return `${day}-${month}-${year}`;
};

export const History = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10),
  );

  const { prices, loading, error } = useApi({
    date: selectedDate,
    priceClass: "DK1",
  });
  const dailyPrices = prices.slice(0, 24);

  return (
    <>
      <SettingsCogButton />
      <section className={style.historyPage}>
        <h1 className={style.title}>Historik</h1>

        <DateInputCard
          id="Dato"
          name="indtast dato"
          value={selectedDate}
          onChange={(event) => setSelectedDate(event.target.value)}
        />

        <h3 className={style.dayCard}>
          Elpriserne d. {formatDisplayDate(selectedDate)}
        </h3>

        {loading && <p className={style.statusText}>Henter priser...</p>}
        {error && <p className={style.statusText}>Kunne ikke hente data.</p>}

        {!loading && !error && <PriceList items={dailyPrices} />}
      </section>
    </>
  );
};
