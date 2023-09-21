import React from "react";
import "./NavBar.css";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
  return (
    <nav>
        <ul>
            <li>Productos</li>
            <li>Sucursales</li>
            <li>Contactanos</li>
            <li>Ofertas</li>
            <li>
                <ShoppingCartIcon/>
            </li>

        </ul>
    </nav>
  )
}

export default NavBar;