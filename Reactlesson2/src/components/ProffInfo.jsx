import React from "react";

const ProffInfo = ({data}) => {
  return (
    <div className="col-md-4">
      <div className="card" style={{ width: "22rem" }}>
        <div className="card-body">
          <h5 className="card-title">{data.department}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{data.name}</h6>
          <p className="card-text">
            <span className="badge text-bg-primary m-1">{data.skills[0]}</span>
            <span className="badge text-bg-secondary m-1">{data.skills[1]}</span>
            <span className="badge text-bg-success m-1">{data.skills[2]}</span>
            <span className="badge text-bg-warning m-1">{data.skills[3]}</span>
            <span className="badge text-bg-danger m-1">{data.skills[4]}</span>
          </p>
          <a href="#" className="card-link">
            {data.github}
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default ProffInfo;
