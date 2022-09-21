import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../context/authcontext/Auth";
import { useNavigate } from "react-router-dom";
import Style from './loginoverlay.module.scss'

export const LoginOverlay = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loginData, setLoginData } = useAuth();

  const navigate = useNavigate()

  const [message, setMessage] = useState("");
  const [displayLogin, setDisplayLogin] = useState(false)

  const sendLoginRequest = async (data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    try {
      const result = await axios.post(
        "https://api.mediehuset.net/token",
        formData
      );
      console.log(result.data);
      handleSessionData(result.data);
    } catch (err) {
      setMessage("Kunne ikke logge ind!");
    }
  };

  const handleSessionData = (data) => {
    if (data) {
      sessionStorage.setItem("token", JSON.stringify(data));
      setLoginData(data);
      navigate('/login')
    }
  };

  const handleLogin = () => {
    if(displayLogin === false) {
        setDisplayLogin(true)
    } else {
        setDisplayLogin(false)
    }
  }

  return (
    <>
      {!loginData && !loginData.username ? (
        <form className={Style.loginoverlay} onSubmit={handleSubmit(sendLoginRequest)}>
          <div className={Style.gridcontainer}>
            <input
              type="text"
              id="username"
              placeholder="Brugernavn"
              {...register("username", { required: true })}
            />
            {errors.username && <span>Du skal indtaste dit brugernavn!</span>}
            <input
              type="password"
              id="password"
              placeholder="Adgangskode"
              {...register("password", { required: true })}
            />
            {errors.password && <span>Du skal indtaste din adgangskode!</span>}
          </div>
            <button>LOGIN</button>
          {message && <div>{message}</div>}
        </form>
      ) : null
      }
    </>
  );
};
