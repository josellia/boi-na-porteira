import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemCart from "../../componentes/ItemCart";
import { removeItem } from "../../store/ducks/cart";
import { addMessage } from "../../store/ducks/Layout";

const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeBoi = (boi) => {
    dispatch(removeItem(boi._id));
    dispatch(addMessage(`${boi.name} removido do carrinho`));
  };
  return (
    <div className="container-fluid">
      <div className="row">
        {items.length === 0 ? (
          <p className="col-sm-12 mt-5 text-warning text-center">
            Sem items no carrinho
          </p>
        ) : (
          <React.Fragment>
            {items.map((item, index) => (
              <ItemCart item={item} key={index} removeBoi={removeBoi} />
            ))}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Cart;
