import CogIcon from "../../assets/icons/iconcog.svg";
import style from "./SettingsCog.module.scss";

export const SettingsCog = () => {
  return (
    <img className={style.cogIcon} src={CogIcon} alt="indstillings knap" />
  );
};
