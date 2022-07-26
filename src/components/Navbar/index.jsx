import React from "react";
import "./styles.scss";
import "../../assets/styles/global.scss";
import "../../assets/styles/width.scss";
import LogIn from "../LogIn";
import NavItem from "../NavItem";

function ResolveUndefined(item) {
  let { name, componentIcon, link } = item;
  name = name != undefined ? name : "";
  componentIcon = componentIcon != undefined ? componentIcon : {};
  link = link != undefined ? link : "#";
  return {
    name,
    componentIcon,
    link,
  };
}

const Navbar = ({ sx, items, spacing, brand, login }) => {
  items = items != undefined ? items : [];
  return (
    <>
      <div className="navbar bg-blue-900 px-56 justify-between" style={sx}>
        <div className="flex navbar-brand align-item-center">
          <a href="#" className="text-2xl nav-link">
            <span className="text-white">Traveloka</span>
          </a>
        </div>
        <div className="flex collapse navbar-collapse align-item-center">
          <ul className="navbar-nav">
            {items.map((item, index) => {
              const { name, componentIcon, link } = ResolveUndefined(item);
              return (
                <li
                  key={index}
                  className="nav-item"
                  style={{
                    paddingLeft: `${spacing}rem`,
                    paddingRight: `${spacing}rem`,
                  }}
                >
                  <a href={link} className="nav-link text-white">
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
          <LogIn login={false} />
        </div>
      </div>
      <NavItem variant="contained" startIcon={<i class="fa-solid fa-user"></i>}>
        hello world
      </NavItem>
    </>
  );
};

export default Navbar;
