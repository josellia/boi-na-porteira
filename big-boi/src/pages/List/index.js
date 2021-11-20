import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Boi from "../../componentes/Boi";
import { getAllBois } from "../../store/apiActions";
import { addItem } from "../../store/ducks/cart";
import { addMessage } from "../../store/ducks/Layout";

const List = () => {
  const bois = useSelector((state) => state.bois);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBois());
  }, [dispatch]);

  const adddItemCart = (boi) => {
    dispatch(addItem(boi));
    dispatch(addMessage(`${boi.name} adicionado com sucesso`));
  };
  return (
    <div className="container-fluid">
      <div className="row">
        {bois.map((boi, index) => (
          <Boi key={index} boi={boi} adddItemCart={adddItemCart} />
        ))}
      </div>
    </div>
  );
};

export default List;
