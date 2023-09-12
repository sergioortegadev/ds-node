import { useState } from "react";
import { Link } from "react-router-dom";
import { helpHttp } from "./proyecto_final/helpersRest/helpHTTP.js";

const Login = () => {
  let api = helpHttp();
  let url = "http://localhost:5567/users/auth";

  const [data, setData] = useState({});

  const handleChange = (e) => {};

  /*  const getUserAuth = () => {


   api.get(url, { body: data }).then((res) => {
      console.log(res);
      try {
        api.get(url).then((res) => setDb(res.product));
        // Tomamos la db y le agregamos data
        //setDb([...db, res]);
      } catch (error) {
        console.log(error);
      }
    });
  }; 

  } */

  return (
    <>
      <button>
        <Link to="/">Home</Link>
      </button>
      <form className="login-form">
        <label>
          Usuario
          <input type="text" />
        </label>
        <label>
          Password
          <input type="password" />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default Login;
