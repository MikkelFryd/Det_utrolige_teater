import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Footer } from "../partials/footer/Footer";
import { Header } from "../partials/header/Header";
import Style from "./eventdetails.module.scss";
import FavoriteButton from "../favoritebutton/FavoriteButton";
import { Reviews } from "../reviews/Reviews";

export const EventDetails = () => {
  const [eventDetails, setEventDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getEventDetails = async () => {
      const result = await axios.get(
        `https://api.mediehuset.net/detutroligeteater/events/${id}`
      );
      setEventDetails(result.data.item);
    };
    getEventDetails();
  }, [id]);

  console.log(eventDetails);

  return (
    <>
      <Header />
      {eventDetails.id ? (
        <section className={Style.detailscontainer}>
          <div>
            <figure>
              <div
                className={Style.background}
                style={{ backgroundImage: `url(${eventDetails.image})` }}
              >
                <FavoriteButton event_id={eventDetails.id} />
              </div>
              <figcaption>
                <article>
                  <section>
                    <div>
                      <h5>{eventDetails.stage_name}</h5>
                      <h3>
                        {eventDetails.startdate} - {eventDetails.stopdate}
                      </h3>
                    </div>
                    <h3>BILLETPRIS: {eventDetails.price} DKK</h3>
                  </section>
                  <section>
                    <div className={Style.titlecontainer}>
                      <h1>{eventDetails.title}</h1>
                      <h3>{eventDetails.genre}</h3>
                    </div>
                    <div>
                      <Link to={`/shop/${eventDetails.id}`}>KØB BILLET</Link>
                    </div>
                  </section>
                  <div>
                    <p>{eventDetails.description}</p>
                  </div>
                </article>
                <h3>MEDVIRKENDE</h3>
                <div className={Style.actorcontainer}>
                  {eventDetails &&
                    eventDetails.actors.map((item, index) => {
                      return (
                        <div key={index}>
                          <img src={item.image} alt={item.name} />
                          <p>{item.name}</p>
                        </div>
                      );
                    })}
                </div>
              </figcaption>
            </figure>
            <Reviews id={eventDetails.id} />
          </div>
        </section>
      ) : null}
      <Footer />
    </>
  );
};
