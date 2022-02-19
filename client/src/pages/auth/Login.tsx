import React from "react";
import { MainNav } from "../../components/nav/MainNav";
import { SubNav } from "../../components/nav/SubNav";

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  return (
    <div>
      <MainNav navmenu="Questionnaires" link="/" />
      <SubNav addclass="submenu" />
    </div>
  );
};
