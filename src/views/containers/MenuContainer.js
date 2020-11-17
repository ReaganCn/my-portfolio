import React, { useEffect, useState } from "react";
import MenuComponent from "../components/Menu";


const MenuContainer = () => {

  const [show, setShow] = useState(false);

  const showMiniMenu = () => {
      show ? setShow(false) : setShow(true);
  }

  return (
   <MenuComponent 
   onClick = {() => showMiniMenu()}
   show={show}
   />
  )
};

export default MenuContainer;
