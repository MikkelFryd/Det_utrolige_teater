import { Link } from "react-router-dom";
import Style from "./eventcard.module.scss";

export const EventCard = (props) => {
  return props.isFromEvent ? (
    <figure className={Style.eventitem}>
      <img src={props.item.image} alt={props.item.title} />
      <figcaption>
        <h1>{props.item.title}</h1>
        <div className={Style.eventheaders}>
          <h5>{props.item.stage_name}</h5>
          <h4>
            {props.item.startdate} - {props.item.stopdate}
          </h4>
        </div>
      </figcaption>
      <div className={Style.buttoncontainer}>
        <Link to={`/events/${props.item.id}`}>LÆS MERE</Link>
        <Link to={`/shop/${props.item.id}`}>KØB BILLET</Link>
      </div>
    </figure>
  ) : (
    <figure className={Style.eventcard}>
      <div className={Style.imagecontainer}>
        <img src={props.item.image} alt={props.item.title} />
      </div>
      <figcaption>
        <h5>{props.item.stage_name}</h5>
        <h4>
          {props.item.startdate} - {props.item.stopdate}
        </h4>
        <h1>{props.item.title}</h1>
        <h3>{props.item.genre}</h3>
      </figcaption>
      <div className={Style.buttoncontainer}>
        <Link to={`/events/${props.item.id}`}>LÆS MERE</Link>
        <Link to={`/shop/${props.item.id}`}>KØB BILLET</Link>
      </div>
    </figure>
  );
};
