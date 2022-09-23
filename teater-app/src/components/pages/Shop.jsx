import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../partials/footer/Footer";
import { Header } from "../partials/header/Header";
import Style from "./shop.module.scss";

export const Shop = () => {
  const [shopData, setShopData] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    const getShopData = async () => {
      let result = await axios.get(
        `https://api.mediehuset.net/detutroligeteater/events/${id}`
      );
      setShopData(result.data.item);
    };
    getShopData();
  }, [id]);

  console.log(shopData);

  const increase = (e) => {
    e.preventDefault();
    setQuantity(quantity + 1);
  };

  const decrease = (e) => {
    e.preventDefault();
    setQuantity(quantity - 1);
  };

  return (
    <>
      <Header />
      <section className={Style.shopcontainer}>
        <div className={Style.gridwrapper}>
          <div
            className={Style.background}
            style={{ backgroundImage: `url(${shopData.image})` }}
          />
          <div className={Style.formcontainer}>
            <h1>Køb billet</h1>
            <div className={Style.titlecontainer}>
              <h3>{shopData.title}</h3>
              <h4>
                {shopData.stage_name} {shopData.startdate} {shopData.starttime}
              </h4>
            </div>
            <form>
              <div>
                <label htmlFor="firstname">FORNAVN</label>
                <input type="text" id="firstname" />
              </div>
              <div>
                <label htmlFor="lastname">EFTERNAVN</label>
                <input type="text" id="lastname" />
              </div>
              <div>
                <label htmlFor="street">VEJNAVN & NR</label>
                <input type="text" id="street" />
              </div>
              <div>
                <label htmlFor="city">POSTNR & BY</label>
                <input type="text" id="city" />
              </div>
              <p>ALLE FELTER SKAL UDFYLDES</p>
              <div className={Style.pricecontainer}>
                <div className={Style.quantitycontainer}>
                  <p>ANTAL</p>
                  <div className={Style.buttoncontainer}>
                    <button
                      onClick={(e) => {
                        decrease(e);
                      }}
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      onClick={(e) => {
                        increase(e);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className={Style.pricewrapper}>
                  <h2>PRIS {shopData.price * quantity} DKK</h2>
                  <p>PRIS INKL MOMS</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
