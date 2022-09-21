import { useAuth } from "../context/authcontext/Auth";
import { useFavorites } from "../context/favoritecontext/Favorite";
import { Footer } from "../partials/footer/Footer";
import { Header } from "../partials/header/Header";
import Style from './login.module.scss'
import LoginHeart from '../../assets/images/LoginHeart.svg'
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const { loginData, setLoginData } = useAuth();

  const { favorites } = useFavorites()

  const navigate = useNavigate()
  
  const logOut = () => {
    sessionStorage.removeItem("token");
    setLoginData("");
    navigate('/')
  };

  console.log(favorites)

  return (
    <>
    <Header />
      {loginData && loginData.username ? 
      <section className={Style.logincontainer}>
        <div className={Style.topcontainer}>
            <h1>Min side</h1>
            <div>
                <p>DU ER LOGOET PÅ {loginData.username}</p>
                <button onClick={logOut}>LOG OUT</button>
            </div>
        </div>
        <article>
            <div>
                <h2>MINE RESERVATIONER</h2>
            </div>
        </article>
        <article>
            <div className={Style.articlewrapper}>
                <div className={Style.gridcontainer}>
                    <img src={LoginHeart} alt="icon" />
                    <h2>MINE FAVORITTER</h2>
                </div>
                <div className={Style.gridwrapper}>
                    <h5>FORESTILLING</h5>
                    <h5>REDIGER</h5>
                </div>
                {favorites.length > 1 ? 
                <div className={Style.favoritecontainer}>
                {favorites.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>{item.title}, {item.stage_name}</p>
                            <button></button>
                        </div>
                    )
                })}
                </div> : null}
            </div>
        </article>
        <article>
            <div>
                <h4>MINE ANMELDELSER</h4>
            </div>
        </article>
      </section> : null        
      }
      <Footer />
    </>
  );
};
