import React from "react";
import "./styles.css";

const Boi = ({ boi, adddItemCart }) => {
  return (
    <div className="col-sm-3 mt-3 mb-3">
      <div className="card">
        <img src={boi.url} className="card-img-top" alt={boi.name} />
        <div className="card-body">
          <h5 className="card-title">{boi.name}</h5>
          <span>{boi.age}</span>
          <button className="btn btn-success float-end">
            <i
              className="fa fa-cart-plus fa-2x "
              aria-hidden="true"
              onClick={() => adddItemCart(boi)}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Boi;
