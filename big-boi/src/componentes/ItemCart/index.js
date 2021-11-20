import React from "react";

const ItemCart = (props) => {
  const { item, removeBoi } = props;
  return (
    <div className="col-sm-3 mt-5">
      <div
        className="card text-white bg-success mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header">{item.name}</div>
        <div className="card-body" style={{ padding: 0 }}>
          <p className="card-text">
            <img src={item.url} alt={item.name} width="100%" />
          </p>
        </div>
        <button
          className="btn btn-danger"
          style={{
            width: 50,
            position: "absolute",
            bottom: 15,
            right: 15,
          }}
        >
          <i className="fa fa-trash fa-2x" onClick={() => removeBoi(item)}></i>
        </button>
      </div>
    </div>
  );
};

export default ItemCart;
