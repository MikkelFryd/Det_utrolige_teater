import { useState } from "react"
import { useEvent } from "../context/event/Event"
import { EventCard } from "../eventcard/EventCard"
import { Footer } from "../partials/footer/Footer"
import { Header } from "../partials/header/Header"
import { Teaser } from "../partials/teaser/Teaser"
import Style from './events.module.scss'


export const Events = () => {
    const [ isFromEvent ] = useState(true)

    const {eventData} = useEvent()
    console.log(eventData)

    return (
        <>
        <section className={Style.eventcontainer}>
            <Header />
            <Teaser />
            <article>
                <h1 className={Style.headingtitle}>OVERSIGT</h1>
                <section className={Style.eventlist}>
                    {eventData && eventData.map((item, index) => {
                        return (
                            <EventCard isFromEvent={isFromEvent} item={item} key={index} />
                        )
                    })}
                </section>
            </article>
        </section>
        <Footer/>
        </>
    )
}