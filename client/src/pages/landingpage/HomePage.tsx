import React from "react";
import { MainNav } from "../../components/nav/MainNav";
import { SubNav } from "../../components/nav/SubNav";
import { Responses } from "../../components/responses/Responses";
import { Recentapprovals, Recentresponses } from "../../userdata/UserData";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div>
      <MainNav navmenu="Questionnaires" link="/" />
      <SubNav addclass="submenu" />
      <div className="main-card">
        <div className="inner-block">
          <div className="count-block">
            <div className="flex">
              <div className="count-list">
                <label htmlFor="">46</label>
                <p>Forms approved</p>
              </div>
              <div className="count-list">
                <label htmlFor="">36</label>
                <p>Forms shared</p>
              </div>
            </div>
            <div className="flex">
              <div className="count-list">
                <label htmlFor="">4156</label>
                <p>Submissions</p>
              </div>
              <div className="count-list">
                <label htmlFor="">6</label>
                <p>Need approval</p>
              </div>
            </div>
          </div>
          <div className="hr-line" />
          <div className="responses-bolck">
           <Responses recentresponses={true} recent_userdata={Recentresponses} />
           <Responses approvals={true} recent_userdata={Recentapprovals} />
          </div>
        </div>
      </div>
    </div>
  );
};
