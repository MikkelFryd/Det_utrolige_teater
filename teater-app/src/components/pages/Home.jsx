import { Header } from "../partials/header/Header";
import Style from "./home.module.scss";
import { useEffect } from "react";
import axios from "axios";
import { EventCard } from "../eventcard/EventCard";
import { Footer } from "../partials/footer/Footer";
import { Teaser } from "../partials/teaser/Teaser";
import { Link } from "react-router-dom";
import { useEvent } from "../context/eventcontext/Event";
import { useState } from "react";

export const Home = () => {
  const { eventData, setEventData } = useEvent();

  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const getEventData = async () => {
      let result = await axios.get(
        "https://api.mediehuset.net/detutroligeteater/events"
      );
      setEventData(result.data.items);
    };
    getEventData();
  }, [setEventData]);

  let slicedSearchArr = searchData.slice(0, 3);
  let slicedEventArr = eventData.slice(0, 3);

  console.log(eventData);

  return (
    <>
      <section className={Style.homecontainer}>
        <Header setSearchData={setSearchData} />
        <Teaser />
        <article>
          {slicedSearchArr.length > 0 ? (
            <section className={Style.gridcontainer}>
              {slicedSearchArr &&
                slicedSearchArr.map((item, index) => {
                  return <EventCard item={item} key={index} />;
                })}
            </section>
          ) : (
            <section className={Style.gridcontainer}>
              {slicedEventArr &&
                slicedEventArr.map((item, index) => {
                  return <EventCard item={item} key={index} />;
                })}
            </section>
          )}
        </article>
        <div className={Style.eventbutton}>
          <button>
            <Link to="/events">SE ALLE FORESTILLINGER</Link>
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};
