import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

const Shop = () => {
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div>
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          withdrawMoney(100);
        }}
      >
        Withdraw
      </button>
      Cash
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          depositMoney(100);
        }}
      >
        Deposit
      </button>
    </div>
  );
};

export default Shop;
