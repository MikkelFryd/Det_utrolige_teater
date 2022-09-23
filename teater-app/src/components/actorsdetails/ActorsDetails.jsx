import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Footer } from "../partials/footer/Footer";
import { Header } from "../partials/header/Header";
import Style from "./actorsdetails.module.scss";

export const ActorsDetails = () => {
  const [actorDetails, setActorDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getEventDetails = async () => {
      const result = await axios.get(
        `https://api.mediehuset.net/detutroligeteater/actors/${id}`
      );
      setActorDetails(result.data.item);
    };
    getEventDetails();
  }, [id]);

  return (
    <>
      <Header />
      <section className={Style.detailscontainer}>
        <h1>Skuespillere</h1>
        <div>
          <img src={actorDetails.image} alt={actorDetails.name} />
          <article>
            <h2>{actorDetails.name}</h2>
            <p>{actorDetails.description}</p>
          </article>
        </div>
      </section>
      <div className={Style.linkcontainer}>
        <Link to="/actors">ALLE SKUESPILLERE</Link>
      </div>
      <Footer />
    </>
  );
};
