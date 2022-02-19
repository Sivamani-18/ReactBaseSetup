import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

interface MainNavProps {
  navmenu:string;
  link:string;
}

export const MainNav: React.FC<MainNavProps> = ({
  navmenu,link
}) => {
  return (
    <div className="nav-menu">
      <Link className="no-underline" to={link}>{navmenu}</Link>
    </div>
  );
};
