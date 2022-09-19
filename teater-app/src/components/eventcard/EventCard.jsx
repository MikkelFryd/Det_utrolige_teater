import Style from './eventcard.module.scss'

export const EventCard = props => {

    return (
        <figure className={Style.eventcard}>
            <div>
                <img src={props.item.image} alt={props.item.title} />
            </div>
            <figcaption>
                <h5>{props.item.stage_name}</h5>
                <h4>{props.item.startdate} - {props.item.stopdate}</h4>
                <h2>{props.item.title}</h2>
                <h3>{props.item.genre}</h3>
            </figcaption>
                <div className={Style.buttoncontainer}>
                    <button>LÆS MERE</button>
                    <button>KØB BILLET</button>
                </div>
        </figure>
    )
}