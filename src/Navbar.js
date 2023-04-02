import React from "react";

import { useSelector } from "react-redux";
const Navbar = () => {
  const amount = useSelector((state) => state.amount);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">Bank Application</a>
        <div>Bank balance: {amount}</div>
      </div>
    </nav>
  );
};

export default Navbar;
