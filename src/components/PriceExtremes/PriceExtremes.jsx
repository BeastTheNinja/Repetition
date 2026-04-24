import style from "./PriceExtremes.module.scss";

export const PriceExtremes = ({ minPrice, maxPrice }) => {
  const formatPrice = (value) => Number(value ?? 0).toFixed(3);

  return (
    <section className={style.extremes}>
      <div className={style.extremeItem}>
        <div className={style.circleOuter}>
          <div className={style.circleInner}>
            <p>
              <span className={style.value}>
                {minPrice ? `${formatPrice(minPrice.DKK_per_kWh)} kr` : "-"}
              </span>
              <br />
              <span className={style.unit}>pr. kwh</span>
            </p>
          </div>
        </div>
        <p className={style.label}>laveste pris</p>
      </div>

      <div className={style.extremeItem}>
        <div className={style.circleOuter}>
          <div className={style.circleInner}>
            <p>
              <span className={style.value}>
                {maxPrice ? `${formatPrice(maxPrice.DKK_per_kWh)} kr` : "-"}
              </span>
              <br />
              <span className={style.unit}>pr. kwh</span>
            </p>
          </div>
        </div>
        <p className={style.label}>højeste pris</p>
      </div>
    </section>
  );
};
