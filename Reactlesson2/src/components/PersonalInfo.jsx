import React from "react";

const PersonalInfo = (data) => {
  return (
    <div className="col-md-4">
      <div className="card" style={{ width: "22rem" }}>
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          
          <p className="card-text">
            {data.name} is a software engineer having 3 years of experience. He
            is {data.age} years old. He loves to work in frontend engineering.
            He is available at {data.mob}
          </p>
          <a href="#" className="card-link">
            {data.email}
          </a>
          <a href="#" className="card-link">
            {data.linkedIn}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
