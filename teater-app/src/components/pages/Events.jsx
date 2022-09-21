import { useState } from "react";
import { useEvent } from "../context/eventcontext/Event";
import { EventCard } from "../eventcard/EventCard";
import { Header } from "../partials/header/Header";
import { Teaser } from "../partials/teaser/Teaser";
import Style from "./events.module.scss";

export const Events = () => {
  const [isFromEvent] = useState(true);
  const [searchData, setSearchData] = useState([]);

  const { eventData } = useEvent();
  console.log(eventData);

  return (
    <section className={Style.eventcontainer}>
      <Header setSearchData={setSearchData} />
      <Teaser />
      <article>
        <h1 className={Style.eventheader}>OVERSIGT</h1>
        <section className={Style.eventlist}>
          {searchData && searchData.length > 0 ? (
            <>
              {searchData &&
                searchData.map((item, index) => {
                  return (
                    <EventCard
                      isFromEvent={isFromEvent}
                      item={item}
                      key={index}
                    />
                  );
                })}
            </>
          ) : (
            <>
              {eventData &&
                eventData.map((item, index) => {
                  return (
                    <EventCard
                      isFromEvent={isFromEvent}
                      item={item}
                      key={index}
                    />
                  );
                })}
            </>
          )}
        </section>
      </article>
    </section>
  );
};
