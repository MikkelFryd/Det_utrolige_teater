
import { useAuth } from "../context/auth/Auth";

export const Login = () => {
  const { loginData } = useAuth();


  return (
    <>
      {loginData && loginData.username ? 
      <section>
        <h1>Min side</h1>
      </section> : null        
      }
    </>
  );
};
