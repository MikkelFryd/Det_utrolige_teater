import { Header } from "../partials/header/Header"
import Style from './home.module.scss'
import { useEffect } from "react"
import axios from 'axios'
import { EventCard } from "../eventcard/EventCard"
import { Footer } from "../partials/footer/Footer"
import { Teaser } from "../partials/teaser/Teaser"
import { Link } from "react-router-dom"
import { useEvent } from "../context/event/Event"


export const Home = () => {

    const {eventData, setEventData} = useEvent()

    useEffect(() => {
        const getEventData = async () => {
            let result = await axios.get('https://api.mediehuset.net/detutroligeteater/events')
            setEventData(result.data.items)
        }
        getEventData()
    }, [setEventData])

    let slicedArr = eventData.slice(0, 3)

    console.log(eventData)

    return (
        <>
        <section className={Style.homecontainer}>
            <Header />
            <Teaser />
            <article>
                <section className={Style.gridcontainer}>
                    {slicedArr && slicedArr.map((item, index) => {
                        return (
                            <EventCard item={item} key={index}/>
                        )
                    })}
                </section>
            </article>
            <div className={Style.eventbutton}>
                <button><Link to="/events">SE ALLE FORESTILLINGER</Link></button>
            </div>
        </section>
        <Footer />
        </>
    )
}