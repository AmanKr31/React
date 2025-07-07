import React, { useState } from "react";

const ControlledComponent = () => {
    
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  return (
    <>
      <div className="card mt-3">
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {email}
          <br />
          {password}
        </div>
      </div>
    </>
  );
};

export default ControlledComponent;
