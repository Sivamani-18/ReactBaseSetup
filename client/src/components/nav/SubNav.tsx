import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Nav.css";

interface SubNavProps {
  navmenu?: string;
  addclass?: string;
}

const navMenu = [
  {
    title: "Dashboard",
    link: "/home",
  },
  {
    title: "Responses",
    link: "/login",
  },
  {
    title: "Form approvals",
    link: "/form-approvals",
  },
  {
    title: "Forms & Questionnaires",
    link: "/forms-questionnaires",
  },
];

export const SubNav: React.FC<SubNavProps> = ({ navmenu, addclass }) => {
  const location = useLocation();
  return (
    <div className={`nav-menu ${addclass}`}>
      {navMenu.map((nav: any) => (
        <Link
          className={`no-underline ${
            location.pathname.includes(nav.link) ? "active" : ""
          }`}
          to={nav.link}
        >
          {nav.title}
        </Link>
      ))}
    </div>
  );
};
