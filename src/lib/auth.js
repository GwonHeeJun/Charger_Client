import axios from "axios";

const Default_URL =
  "http://charger-env.i3arnwanuk.us-east-2.elasticbeanstalk.com/";

export const Register = ({ id, password, name, email, phone }) =>
  axios.post(Default_URL + "api/auth/register", {
    id,
    password,
    name,
    email,
    phone
  });

  export const Login = ({ id, password }) =>
  axios.post(Default_URL + "api/auth/login", {
    id,
    password
  });

  export const Check = ({ token }) => 
  axios.get(Default_URL + "api/auth/", {
    headers: {
      token
    }
  })
