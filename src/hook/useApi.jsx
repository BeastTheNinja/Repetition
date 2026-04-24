import { useEffect, useMemo, useState } from "react";
import { findTimeWindow } from "../utils/findTimeWindow";
import { createApiOptions } from "../utils/createApiOptions";

export const useApi = ({ date, priceClass = "DK1" } = {}) => {
  const [nowTime, setNowTime] = useState(undefined);
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dateKey = useMemo(() => {
    const dato = date ? new Date(date) : new Date();
    return dato.toISOString().slice(0, 10);
  }, [date]);

  useEffect(() => {
    let cancelled = false;

    const getData = async () => {
      setLoading(true);
      setError(null);

      try {
        const { year, month, day } = createApiOptions({
          date: dateKey,
          priceClass,
        });
        const res = await fetch(
          "https://www.elprisenligenu.dk/api/v1/prices/" +
            year +
            "/" +
            month +
            "-" +
            day +
            "_" +
            priceClass +
            ".json",
        );

        if (!res.ok) throw new Error("failed to fetch");

        const data = await res.json();
        const current = data.find((item) =>
          findTimeWindow(item.time_start, item.time_end),
        );

        if (!cancelled) {
          setPrices(data);
          setNowTime(current);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err);
          setPrices([]);
          setNowTime(undefined);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    getData();
    return () => {
      cancelled = true;
    };
  }, [dateKey, priceClass]);

  return { nowTime, prices, loading, error };
};
