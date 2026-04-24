import style from "./PriceList.module.scss";

export const PriceRow = ({ timeLabel, priceLabel }) => {
  return (
    <article className={style.row}>
      <div className={style.timeCell}>{timeLabel}</div>
      <div className={style.priceCell}>{priceLabel}</div>
    </article>
  );
};
