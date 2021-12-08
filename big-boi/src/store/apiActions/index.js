import api from "../../services/api";
import { addBoi, addBois } from "../ducks/bois";

export const getAllBois = () => {
  return (dispatch) => {
    api
      .get("/bois")
      .then((res) => {
        dispatch(addBois(res.data));
      })
      .catch(console.log);
  };
};

export const addCBoiApi = (boi) => {
  const form = new FormData();
  form.append("name", boi.name);
  form.append("file", boi.url);
  form.append("age", boi.age);
  form.append("gender", boi.gender);
  form.append("weight", boi.weight);

  return (dispatch) => {
    api
      .post("/bois", form)
      .then((res) => {
        dispatch(addBoi(res.data));
      })
      .catch(console.log);
  };
};
