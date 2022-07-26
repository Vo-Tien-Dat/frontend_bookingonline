import React, { Fragment } from "react";

import Navbar from "../../components/Navbar";
const Header = () => {
  const navItems = [
    {
      name: "Dowload App",
      componentIcon: "",
      link: "",
    },
    {
      name: "Partner with us",
      componentIcon: "",
      link: "",
    },
    {
      name: "Saved",
      componentIcon: "",
      link: "",
    },
    {
      name: "My booking",
      icon: "",
      link: "",
    },
  ];
  return <Navbar items={navItems} spacing={0.5} />;
};

export default Header;
