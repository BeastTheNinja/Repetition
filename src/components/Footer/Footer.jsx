// Komponent: Footer
// Viser information om elpriser og region nederst på siden
// Giver brugeren ekstra kontekst om priserne
import style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={style.FooterStyling}>
      <p>
        Priser er <span>ex moms</span> og afgifter
      </p>
      <p>
        Du vises lige nu priserne for
        <span> Øst Darnmark</span>
      </p>
    </footer>
  );
};
