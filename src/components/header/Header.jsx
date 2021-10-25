import React from "react";
import CreateBtn from "./CreateBtn"
import HeaderNavigation from "./HeaderNavigation"

import { months } from "../../utils/dateUtils.js";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <CreateBtn />
      <HeaderNavigation />
    </header>
  );
};

export default Header;
