import axios from "axios";

const Default_URL =
  "http://charger-env.i3arnwanuk.us-east-2.elasticbeanstalk.com/";

export const ChargeCredit = ({ credit_type, amount, payment_type, token }) =>
  axios.post(
    Default_URL + "api/credit/add",
    {
      credit_type,
      amount,
      payment_type
    },
    {
      headers: {
        token
      }
    }
  );

export const ChargeList = ({ token }) =>
  axios.get(Default_URL + "api/credit/list", {
    headers: {
      token
    }
  });

export const GetMyAmount = ({ token }) =>
  axios.get(Default_URL + "api/credit/", {
    headers: {
      token
    }
  });

export const GetMySaleList = ({ token }) =>
  axios.get(Default_URL + "api/sale/list", {
    headers: {
      token
    }
  });

export const PostNewSale = ({ selling_elec, selling_price, token }) =>
  axios.post(
    Default_URL + "api/sale/newsale",
    {
      selling_elec,
      selling_price
    },
    {
      headers: {
        token
      }
    }
  );
