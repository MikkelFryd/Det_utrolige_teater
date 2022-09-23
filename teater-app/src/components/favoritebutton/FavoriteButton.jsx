import axios from "axios";
import { useEffect, useState } from "react";
import Style from "./favoritebutton.module.scss";
import { useFavorites } from "../context/favoritecontext/Favorite";
import { useAuth } from "../context/authcontext/Auth";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const FavoriteButton = ({ event_id }) => {
  const { loginData } = useAuth();
  const { favorites } = useFavorites();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (favorites.length) {
      setIsFavorite(() => favorites.some((item) => item.event_id === event_id));
    }
  }, [favorites, event_id]);

  const toggleFavorite = async () => {
    const endpoint = "https://api.mediehuset.net/detutroligeteater/favorites";

    const options = {
      headers: {
        Authorization: `Bearer ${loginData.access_token}`,
      },
    };

    console.log(favorites);

    if (isFavorite) {
      await axios.delete(`${endpoint}/${event_id}`, options);
      setIsFavorite(false);
    } else {
      const formData = new FormData();
      formData.append("event_id", event_id);
      await axios.post(endpoint, formData, options);
      setIsFavorite(true);
    }
  };

  return (
    <>
      <div className={Style.hearticon} onClick={toggleFavorite}>
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </div>
    </>
  );
};

export default FavoriteButton;
