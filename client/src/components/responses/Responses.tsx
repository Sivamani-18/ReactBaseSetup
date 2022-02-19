import React from "react";

interface ResponsesProps {
  recent_userdata: any;
  recent_approvals?: any;
  approvals?: boolean;
  recentresponses?: boolean;
}

export const Responses: React.FC<ResponsesProps> = ({
  recent_userdata,
  approvals,
  recentresponses,
}) => {
  return (
    <div className="responses-card">
      <div className="responses-head">
        {recentresponses && <label htmlFor="">Recent responses</label>}
        {approvals && <label htmlFor="">Recent approvals</label>}
        <span onClick={() => console.log("Click on View all")}>View all</span>
      </div>
      {recentresponses && (
        <>
          {recent_userdata &&
            recent_userdata.map((RecenData: any) => (
              <div className="responses-list">
                <div>
                  <label htmlFor="">{RecenData.form_heading}</label>
                  <span>{RecenData.email_or_status}</span>
                </div>
                <div>
                  <p>{RecenData.form_name}</p>
                  <span>{RecenData.submitted_on}</span>
                </div>
              </div>
            ))}
        </>
      )}
      {approvals && (
        <>
          {recent_userdata &&
            recent_userdata.map((RecenData: any) => (
              <div className="responses-list">
                <div>
                  <label htmlFor="">{RecenData.form_heading}</label>
                  {RecenData.approval_status ? <span className="sent-app">Sent for approval</span> : <span className="sent-approved">Approved</span>}
                </div>
                <div>
                  <p>{RecenData.form_name}</p>
                  <span>{RecenData.submitted_on}</span>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};
