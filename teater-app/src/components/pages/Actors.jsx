import { Footer } from "../partials/footer/Footer";
import { Header } from "../partials/header/Header";
import Style from "./actors.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Actors = () => {
  const [actorData, setActorData] = useState([]);

  useEffect(() => {
    const getActorData = async () => {
      let result = await axios.get(
        "https://api.mediehuset.net/detutroligeteater/actors"
      );
      setActorData(result.data.items);
    };
    getActorData();
  }, []);

  console.log(actorData);

  const handleDescription = (item) => {
    let description = item.slice(0, 360);
    return description;
  };

  return (
    <>
      <Header />
      <section className={Style.actorcontainer}>
        <h1>Skuespillere</h1>
        {actorData &&
          actorData.map((item, index) => {
            return (
              <div key={index} className={Style.gridcontainer}>
                <div
                  className={Style.background}
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className={Style.namecontainer}>
                  <h2>{item.name}</h2>
                  <p>{handleDescription(item.description)}...</p>
                </div>
                <div className={Style.linkcontainer}>
                  <Link to={`/actors/${item.id}`}>LÆS MERE</Link>
                </div>
              </div>
            );
          })}
      </section>
      <Footer />
    </>
  );
};
