import { useEffect, useState } from "react";
import { findTimeWindow } from "../utils/findTimeWindow";
import { formatTime } from "../utils/formatTime";
import style from './now.module.scss'

export const Now = () => {
  const [nowTime, setNowTime] = useState(undefined);

  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }

  let day = date.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  const priceClass = "DK1";

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `https://www.elprisenligenu.dk/api/v1/prices/${year}/${month}-${day}_${priceClass}.json`,
        );
        if (!res.ok) {
          throw new Error("failed to fetch");
        }
        const data = await res.json();
        const nowData = data.filter((item) =>
          findTimeWindow(item.time_start, item.time_end),
        );
        if (nowData) {
          setNowTime(nowData[0]);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <section className={style.nowStyling}>
      <h1>Elprisen lige nu</h1>
      <div>
        <div>
          <div>
            <h3> ${nowTime?.DKK_per_kWh} kr pr. KWh</h3>
          </div>
        </div>
      </div>
      <h4>
        {formatTime(nowTime?.time_start)}-{formatTime(nowTime?.time_end)}
      </h4>
    </section>
  );
};
