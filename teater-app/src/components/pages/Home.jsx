import { Header } from "../partials/header/Header"
import Style from './home.module.scss'
import { useState, useEffect } from "react"
import axios from 'axios'
import HeroImg from '../../assets/images/Fyrtøjet.jpg'
import { EventCard } from "../eventcard/EventCard"
import { Footer } from "../partials/footer/Footer"


export const Home = () => {

    const [eventData, setEventData] = useState([])

    useEffect(() => {
        const getEventData = async () => {
            let result = await axios.get('https://api.mediehuset.net/detutroligeteater/events')
            setEventData(result.data.items)
        }
        getEventData()
    }, [])

    let slicedArr = eventData.slice(0, 3)

    console.log(eventData)

    return (
        <>
        <section className={Style.homecontainer}>
            <Header />
            <article>
                <figure className={Style.eventfigure}>
                    <figcaption>
                        <h5>STOR SCENE</h5>
                        <h4>28. APRIL - 30.APRIL 2023</h4>
                        <h2>Fyrtøjet</h2>
                        <h3>BØRNETEATER</h3>
                    </figcaption>
                    <div>
                        <img src={HeroImg} alt="Biograf" />
                    </div>
                </figure>
                <section className={Style.gridcontainer}>
                    {slicedArr && slicedArr.map((item, index) => {
                        return (
                            <EventCard item={item} key={index}/>
                        )
                    })}
                </section>
            </article>
            <div className={Style.eventbutton}>
                <button>SE ALLE FORESTILLINGER</button>
            </div>
        </section>
        <Footer />
        </>
    )
}