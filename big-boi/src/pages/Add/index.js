import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addCBoiApi } from "../../store/apiActions";

import { addMessage } from "../../store/ducks/Layout";

const Add = () => {
  const [name, setName] = useState();
  const [file, setFile] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState("");
  const [pathImage, setPthImage] = useState();

  const dispatch = useDispatch();

  const genderChange = (e) => {
    const target = e.target;
    if (target.checked) {
      setGender(target.value);
    }
  };

  const onFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.type.includes("image")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function load() {
          setPthImage(reader.result);
        };
        setFile(file);
      } else {
        console.log("There was a error");
      }
    }
  };
  const formSubmit = () => {
    // if (errors) {
    //   return;
    // }
    dispatch(addCBoiApi(name, file, age, gender, weight));
    // reset();

    dispatch(addMessage("Cadastrado com sucesso"));
  };

  // const erros = {};
  // const validate = (values) => {
  //   if (!values?.name) {
  //     erros.name = "Required";
  //     console.log("FUNFA IN HERE", errors);
  //   }

  // };

  return (
    <form className="container mt-5 " onSubmit={formSubmit}>
      <div className="row">
        <div className="form-group col-md-4">
          <label htmlFor="name">
            Raça <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Raça..."
            onChange={(e) => {
              const { value } = e.target;
              setName(value);
            }}
            // {...register("name", {
            //   required: true,
            // })}
          />
          {/* {errors.name?.type === "required" && (
            <p className="text-danger">O campo é raça obrigatório</p>
          )} */}
        </div>
        <div className="form-group col-md-3">
          <label>
            Idade em meses <span className="text-danger">*</span>
          </label>
          <input
            type="number"
            name="age"
            className="form-control"
            placeholder="Idade do animal"
            onChange={(e) => {
              const { value } = e.target;
              setAge(value);
            }}
            // {...register({
            //   validate: {
            //     positiveNumber: (value) => {
            //       console.log("PoisitiveNumber check");
            //       return parseFloat(value) > 0;
            //     },
            //   },
            // })}
          />
          {/* {errors.age && errors.age.type === "positiveNumber" && (
            <p className="text-danger">A idade é inválida</p>
          )} */}
        </div>
        <div className="form-group col-md-2">
          <label>
            Peso (kg) <span className="text-danger">*</span>
          </label>
          <input
            type="number"
            name="weight"
            className="form-control"
            onChange={(e) => {
              const { value } = e.target;
              setWeight(value);
            }}
          />
        </div>
        <div className="form-group col-md-3">
          <label>
            Sexo <span className="text-danger">*</span>
          </label>
          <div className="form-check ">
            <input
              className="form-check-input"
              type="radio"
              id="inlineCheckbox1"
              value="female"
              checked={gender == "female"}
              onChange={genderChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              F
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="inlineCheckbox2"
              value="male"
              checked={gender === "male"}
              onChange={genderChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              M
            </label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <label>
            URL <span className="text-danger">*</span>
          </label>
          <input
            type="file"
            name="url"
            className="form-control"
            onChange={onFileChange}
          />
        </div>
        <div className="form-group col-md-6">
          {file && (
            <img
              className="img-fluid image-thumbnail mt-3"
              width="20%"
              src={pathImage}
              alt="Image dowload"
            />
          )}
        </div>
      </div>
      <button type="submit" className="btn btn-success mt-3 float-end">
        Adicionar
      </button>
    </form>
  );
};

export default Add;
