import axios from "axios"
import { useEffect, useState } from "react"
import Styles from "./favoritebutton.module.scss"
import { useFavorites } from "../context/favorites/Favorite"
import { useAuth } from "../context/auth/Auth"
import {ReactComponent as HeartIcon} from '../../assets/images/heart.svg'

/**
 * Knap komponent som kan tilføje og fjerne et 
 * produkt fra en favorit liste.
 * Anvender FavoriteProvider med useContext metode
 * Kræver login
 * @param {*} param 
 * @returns 
 */
const FavoriteButton = ({ event_id }) => {
  // Henter auth data
  const { loginData } = useAuth()
  // Henter liste over eksisterende favoritter
  const { favorites } = useFavorites()
  // Sætter var til at indikere om produkt er favorit eller ej
  const [isFavorite, setIsFavorite] = useState(false)

  // Kalder useEffect
  useEffect(() => {
	// Hvis vi allerede har favoritter...
    if(favorites.length) {
	  // Setter bool efter om produkt ligger i listen over favoritter
      setIsFavorite(() =>
        favorites.some(item => item.event_id === event_id)
      )
    }
  }, [favorites, event_id])

  // Toggle funktion 
  const toggleFavorite = async () => {
	// Endpoint path
    const endpoint = "https://api.mediehuset.net/detutroligeteater/favorites"
	// Header options med token key
    const options = {
      headers: {
        Authorization: `Bearer ${loginData.access_token}`,
      },
    }

    console.log(favorites)
	// Hvis favorit er true
    if (isFavorite) {
	  // Delete request til api endpoint
	  await axios.delete(`${endpoint}/${event_id}`, options)
      setIsFavorite(false)
    } else {
	  // Sætter form data
      const formData = new FormData()
      formData.append("event_id", event_id)
	  // Create kald til API endpoint
      await axios.post(endpoint, formData, options)
      setIsFavorite(true)
    }
  }

  return (
    <>
      <HeartIcon
        onClick={toggleFavorite}
        className={
          isFavorite ? `${Styles.svg} ${Styles.active}` : Styles.svg
        }
      />
    </>
  )
}

export default FavoriteButton
