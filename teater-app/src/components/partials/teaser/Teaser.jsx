import Style from "./teaser.module.scss";

export const Teaser = () => {
  return (
    <figure className={Style.eventfigure}>
      <figcaption>
        <h5>STOR SCENE</h5>
        <h4>28. APRIL - 30.APRIL 2023</h4>
        <h1>Fyrtøjet</h1>
        <h3>BØRNETEATER</h3>
      </figcaption>
      <div className={Style.cardbackground} />
    </figure>
  );
};
