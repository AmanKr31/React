import React from "react";
import PersonalInfo from "./PersonalInfo";
import ProffInfo from "./ProffInfo";

const Props = () => {
  let studName = "Satyam";
  let studAge = 28;
  let studEmail = "satyam@me.in";
  let studMob = "+91-9876567897";
  let studLinkedin = "www.linkedin.comsatyam";

  let companyInfo = {
    name: "Microsoft Corp.",
    department: "Frontend Engineering",
    skills: ["Angular", "React", "Bootstrap", "Tailwind", "Micro Frontend"],
    github: "www.github.com\satyam"
  }
  return (
    <>
      <div className="container">
        <div className="row  mt-4">
          <PersonalInfo
            name={studName}
            age={studAge}
            email={studEmail}
            mob={studMob}
            linkedIn={studLinkedin}
          />
          <ProffInfo data={companyInfo} />
        </div>
      </div>
    </>
  );
};

export default Props;
