import { formatTime } from "../../utils/formatTime";
import style from "./PriceList.module.scss";
import { PriceRow } from "./PriceRow";

export const PriceList = ({ items = [] }) => {
  const formatPrice = (value) => Number(value ?? 0).toFixed(3);

  return (
    <section className={style.listWrapper}>
      {items.map((item) => (
        <PriceRow
          key={item.time_start}
          timeLabel={`kl. ${formatTime(item.time_start)}`}
          priceLabel={`${formatPrice(item.DKK_per_kWh)} kr`}
        />
      ))}
    </section>
  );
};
