import Style from "./review.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import StarChecked from "../../assets/images/StarChecked.svg";
import StarUnchecked from "../../assets/images/StarUnchecked.svg";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/authcontext/Auth";
import { LoginOverlay } from "../partials/loginoverlay/LoginOverlay";
import { IoStar } from 'react-icons/io5'
import PaperIcon from '../../assets/images/PaperIcon.svg'
import { useForm } from "react-hook-form";


export const Reviews = () => {

  const [reviewData, setReviewData] = useState([]);
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  const [subjectText, setSubjectText] = useState('')
  const [commentText, setCommentText] = useState('')


  const { loginData } = useAuth();

  const { id } = useParams();

  useEffect(() => {
    const getReviewData = async () => {

      let result = await axios.get(
        `https://api.mediehuset.net/detutroligeteater/reviews?event_id=${id}`
      );
      setReviewData(result.data.items);
    };
    getReviewData();
  }, [id, loginData.access_token]);

  const handleStars = (stars) => {
    let tempArr = [];

    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        tempArr.push(<img src={StarChecked} alt="star" />);
      } else {
        tempArr.push(<img src={StarUnchecked} alt="star" />);
      }
    }
    return tempArr;
  };

  const handleDate = (item) => {
    let date = item.slice(0, 10);
    return date;
  };
  
  const submitForm = async (e) => {
      
    let urlencoded = new URLSearchParams()
    urlencoded.append('event_id', id)
    urlencoded.append('subject', subjectText)
    urlencoded.append('comment', commentText)
    urlencoded.append('num_stars', rating.toString())
  
        e.preventDefault()
            let options = {
              body: urlencoded,
              redirect: 'follow',
              method: 'POST',
              headers: {
                  Authorization: `Bearer ${loginData.access_token}`
                }
            };

            fetch("https://api.mediehuset.net/detutroligeteater/reviews",options)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }

  console.log(subjectText)
  console.log(commentText)

console.log(rating)

  return (
    <section className={Style.reviewcontainer}>
      <h1>ANMELDELSER</h1>
      {reviewData &&
        reviewData.slice(0, 2).map((item, index) => {
          return (
            <article key={index} className={Style.reviewarticle}>
              <div className={Style.reviewwrapper}>
                <div className={Style.starscontainer}>
                  {handleStars(item.num_stars).map((item) => {
                    return item;
                  })}
                </div>
                <p className={Style.datetext}>{handleDate(item.created)}</p>
                <h3>{item.subject}</h3>
                <p>{item.comment}</p>
              </div>
            </article>
          );
        })}
        <>
            {!loginData.username ?
            <form>
                <div>
                    <p>Skriv en anmeldelse</p>
                    <p>Du skal være logget ind for at skrive en anmeldelse</p>
                    <LoginOverlay />
                </div>
            </form>
            :
            <form>
                <section>
                    <div className={Style.reviewwrapper}>
                        <div className={Style.headerwrapper}>
                            <img src={PaperIcon} alt="paper_icon"/>
                            <p>Skriv en anmeldelse</p>
                        </div>
                        <div className={Style.gridwrapper}>
                            <p>Antal stjerner:</p>
                            <div className={Style.ratingscontainer}>
                              {[ ...Array(5)].map((star, i) => {
                                const ratingValue = i + 1;
                                return (
                                    <label>
                                        <input
                                        type="radio"
                                        name="rating"
                                        value={ratingValue}
                                        onClick={() => setRating(ratingValue)}
                                        />
                                        <IoStar
                                        color={ratingValue <= (hover || rating) ? '#fff' : '#333'}
                                        size={50}
                                        className={Style.star}
                                        onMouseEnter={() => setHover(ratingValue)}
                                        onMouseLeave={() => setHover(null)}
                                        />
                                    </label>
                                )
                              })}
                            </div>
                        </div>
                        <input onChange={(e) => setSubjectText(e.target.value)} type="text" placeholder="Emne" className={Style.subject} />
                        <textarea onChange={(e) => setCommentText(e.target.value)} className={Style.comment} placeholder="Kommentar" name="comment" id="comment" cols="30" rows="10"></textarea>
                    </div>
                <button onClick={(e) => submitForm(e)}>SEND</button>
                </section>
            </form>
            }
        </>
    </section>
  );
};
