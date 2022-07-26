import { Children } from "react";
import classNames from "classnames";
import "../../assets/styles/global.scss";
import "./styles.scss";
function NavItem({ children, startIcon, endIcon, variant, sx }) {
  let contained = undefined;
  if (variant === "contained") {
    contained = true;
  }
  if (variant === "outlined") {
    contained = false;
  }
  return (
    <div className="nav-item">
      {startIcon}
      <div
        className={classNames(
          "nav-item-text",
          { "bg-blue-800": contained },
          {}
        )}
      >
        {children}
      </div>
      {endIcon}
    </div>
  );
}

export default NavItem;
