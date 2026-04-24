import calendarIcon from "../../assets/icons/Calender.svg";
import style from "./DateInputCard.module.scss";

const formatDisplayDate = (isoDate) => {
  if (!isoDate) return "";
  const [year, month, day] = isoDate.split("-");
  if (!year || !month || !day) return isoDate;
  return `${day}-${month}-${year}`;
};

export const DateInputCard = ({
  value,
  onChange,
  id = "date-input",
  name = "date-input",
}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        <span className={style.dateText}>{formatDisplayDate(value)}</span>
        <img className={style.calendarIcon} src={calendarIcon} alt="Kalender" />
      </div>

      <input
        className={style.nativeInput}
        type="date"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        aria-label="Vaelg dato"
      />
    </div>
  );
};
