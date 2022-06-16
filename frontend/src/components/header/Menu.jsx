import React, { useState } from "react";
import { HamburgerBtn, Line } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../reducer/navigation/menuReducer";

function Menu() {
  const dispatch = useDispatch();
  const showNav = useSelector((state) => state.menu.value);

  return (
    <HamburgerBtn
      nav={showNav}
      onDoubleClick={() => null}
      onClick={() => {
        dispatch(toggle());
      }}
    >
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </HamburgerBtn>
  );
}

export default Menu;
