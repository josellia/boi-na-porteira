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

export const addCBoiApi = (name, url, age, gender, weight) => {
  const form = new FormData();
  form.append("name", name);
  form.append("file", url);
  form.append("age", age);
  form.append("gender", gender);
  form.append("weight", weight);

  return (dispatch) => {
    api
      .post("/bois", form)
      .then((res) => {
        dispatch(addBoi(res.data));
      })
      .catch(console.log);
  };
};
