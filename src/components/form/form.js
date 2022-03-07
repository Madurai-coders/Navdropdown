import "./form.css";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

function Form() {
  const [close, setclose] = useState(true);
  const [formvalue, setformvalue] = useState({
    username: "",
    password: "",
  });
  console.log(formvalue);
  const [inputdata, setinputdata] = useState([]);

  function submit() {
    if (formvalue.username === "") {
      document.querySelector("#u_req").classList.add("req_warning");
    } else if (formvalue.username.length < 3) {
      document.querySelector("#u_error").classList.add("longer_warning");
    } else {
      document.querySelector("#u_req").classList.remove("req_warning");
      document.querySelector("#u_error").classList.remove("longer_warning");
    }

    if (formvalue.password.length < 10) {
      document.querySelector("#p_error").classList.add("long_warning");
    } else {
      document.querySelector("#p_error").classList.remove("long_warning");
    }
  }

  function login() {
    if (formvalue.username.length > 3 & formvalue.password.length > 5) {

      let array = inputdata;
      array.push({ ...formvalue });

      console.log(array);
      setinputdata([...array]);
      document.querySelector("#success").classList.add("successful");

      setformvalue({
        username: "",
        password: "",
      });
    } else {
      document.querySelector("#not_saved").classList.add("cancel");
    }
  }
  return (
    <>
      {close && (
        <>
          <div className="d-flex justify-content-center">
            <div className="col-auto">
              <div className="card mt-5 text-center bg-white  shadow">
                <div onClick={() => setclose(false)}>
                  <i class=" close_1 fa fa-times" aria-hidden="true"></i>
                </div>

                <h2 className="title1">Login</h2>

                <div className="d-flex flex-column">
                  <div>
                    <TextField
                      type="text"
                      required
                      className="username"
                      id="standard-secondary"
                      label="Username"
                      value={formvalue.username}
                      onKeyUp={submit}
                      onChange={(e) =>
                        setformvalue({ ...formvalue, username: e.target.value })
                      }
                      color="secondary"
                    />
                  </div>
                  <p id="u_req" className="u_req">
                    Username is required
                  </p>
                  <p id="u_error" className="u_longer">
                    Username is must be longer
                  </p>
                  <br></br>

                  <div>
                    <TextField
                      type="password"
                      className="password"
                      id="standard-secondary"
                      onKeyUp={submit}
                      onChange={(e) =>
                        setformvalue({ ...formvalue, password: e.target.value })
                      }
                      value={formvalue.password}
                      label="Password"
                      color="secondary"
                    />
                  </div>
                  <p id="p_req" className="pass_req">
                    Password is required
                  </p>
                  <p id="p_error" className="pass_long">
                    Password should be at <br></br>least 10 characters long
                  </p>

                  <button type="button" onClick={login} class=" login  btn btn">
                    Login
                  </button>
                  <p id="not_saved" className="saved">
                    Save cancelled!
                  </p>
                  <p id="success" className="success">
                    Data saved successfully
                  </p>
                </div>
              </div>
            </div>
          </div>
        
      

      <div className="row justify-content-center">
        <div className="col-3 mt-5">
          <table class="table table-hover ">
            <thead>
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Password</th>
              </tr>
            </thead>
            <tbody>
              {inputdata.map((dataval) => {
                return (
                  <>
                    <tr>
                      <td>{dataval.username}</td>
                      <td>{dataval.password}</td>

                     
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      </>
      )}
    </>
  );
}

export default Form;
