import "./validate.css";
import React, { useState } from "react";
import moment from "moment";
import { validation_name } from "./validate_functions";
function Validate() {


  const [success, setsuccess] = useState(false);

  const [inputdata, setinputdata] = useState({
    username: "not_selected",
    email: "",
    phoneno: "",
    age: "",
    dob: "",
    address: "",
  });

  console.log(inputdata);


  const [userdata, setuserdata] = useState([]);









  function submit() {

    if(validation_name(inputdata.username).class=='pass'){
        setsuccess(true);

        setTimeout(() => {
            setsuccess(false );
        }, 2000);
    }
    else{
        setinputdata({...inputdata,username:''})
    }
    
    
  }



  return (
    <>
      <div className="validate d-flex flex-column">
        <div className="form mt-5">
          <div className="row justify-content-start">
            <div className="col-2">
              <div className="mb-3">
                <label
                  for="exampleFormControlInput1"
                  className="form-label name_txt"
                >
                  Name
                </label>
                <input
                  id="input_warning"
                  value={inputdata.username != 'not_selected' ? inputdata.username : ''}
                  onKeyUp={username}
                  onChange={(e) =>
                    setinputdata({ ...inputdata, username: e.target.value })
                  }
                  onBlur={(e) => setinputdata({ ...inputdata, username: e.target.value })}
                  type="name"
                  className={validation_name(inputdata.username)}
                ></input>
              </div>
              {validation_name(inputdata.username).msg}
              <p className="space" id="space">
                Please Check Your Fields For Spaces
              </p>
              <p className="letters" id="letters">
                Only letters
                
              </p>
              <p className="name_req" id="name_req">
                Username is Required
              </p>
              <p className="name_long" id="name_long">
                Username is must be longer than 4 characters
              </p>
              <p className="name_limit" id="name_limit">
                Username is must be less than 10 characters
              </p>
            </div>
            {/* <div className="col-2">
              <div className="mb-3 ">
                <label
                  for="exampleFormControlInput1"
                  className="form-label email_txt"
                >
                  Email
                </label>
                <input
                  id="Emailinput_warning"
                  type="email"
                  className="form-control email_input"
                  value={inputdata.email}
                  onKeyUp={Email}
                  onChange={(e) =>
                    setinputdata({ ...inputdata, email: e.target.value })
                  }
                ></input>
                <p className="email_space" id="email_space">
                  Please Check Your Fields For Spaces
                </p>
                <p className="email_req" id="email_req">
                  Email is required
                </p>
                <p className="email_invalid" id="email_invalid">
                  Email Invalid
                </p>
              </div>
            </div>

            <div className="col-2">
              <div className="mb-3 ">
                <label
                  for="exampleFormControlInput1"
                  className="form-label phone_txt "
                >
                  Phone No
                </label>
                <input
                  type="text"
                  value={inputdata.phoneno}
                  id="phoneinput_warning"
                  onKeyUp={Phone}
                  onChange={(e) =>
                    setinputdata({ ...inputdata, phoneno: e.target.value })
                  }
                  className="form-control phoneno_input"
                ></input>
                <p className="digits" id="digits">
                  Digits only
                </p>

                <p className="no_req" id="no_req">
                  Phone no is required
                </p>
                <p className="no_limit" id="no_limit">
                  phone no should be 10 digits
                </p>
              </div>
            </div>
            <div className="col-1">
              <div className="mb-3 ">
                <label for="quantity" className="age_txt">
                  Age
                </label>

                <input
                  value={inputdata.age}
                  onKeyUp={Age}
                  type="number"
                  className="form-control age_input"
                  id="ageinput_warning"
                  name="quantity"
                  min="20"
                  max="75"
                  onChange={(e) =>
                    setinputdata({ ...inputdata, age: e.target.value })
                  }
                ></input>
                <p className="age_req" id="age_req">
                  Age is required
                </p>
                <p className="age_limit" id="age_limit">
                  Your age is not eligible
                </p>
              </div>
            </div>
            <div className="col-2">
              <div className="mb-3 ">
                <label
                  for="exampleFormControlInput1"
                  className="form-label dob_txt"
                >
                  Date of Birth
                </label>
                <input
                  onKeyUp={dob}
                  value={inputdata.dob}
                  type="date"
                  onChange={(e) =>
                    setinputdata({ ...inputdata, dob: e.target.value })
                  }
                  className="form-control dob_input "
                  id="dobinput_warning"
                ></input>
                <p className="dob_req" id="dob_req">
                  Data of birth is Required
                </p>
              </div>

              <p className="dob_limit" id="dob_limit">
                Data of birth is Invalid
              </p>
            </div>
            <div className="col-3">
              <div className="mb-3 ">
                <label
                  for="exampleFormControlInput1"
                  className="form-label address_txt"
                >
                  Address
                </label>
                <input
                  value={inputdata.address}
                  onKeyUp={address}
                  placeholder="Flat NO/Street/Area/District"
                  type="text"
                  onChange={(e) =>
                    setinputdata({ ...inputdata, address: e.target.value })
                  }
                  className="form-control address_input"
                  id="addressinput_warning"
                ></input>
                <p className="address_space" id="address_space">
                  Please Check Your Fields For Spaces
                </p>
                <p className="address_req" id="address_req">
                  Address is required
                </p>
                <p className="address_limit" id="address_limit">
                  Address should be more than 252 characters
                </p>
              </div>
            </div> */}
          </div>

          <div className="col-4 m-3">
            <button
              onClick={() => {
                
                submit();
              }}
              type="button"
              className=" submit btn btn-success"
            >
              Submit
            </button>
          </div>
        </div>

        <div className="col-12 tbl  mt-5">
          <table class="table table-striped text-center">
            <thead>
              <tr className="heading">
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Phone No</th>
                <th scope="col">Age</th>
                <th scope="col">Date of Birth</th>
                <th scope="col">Address</th>
              </tr>
            </thead>

            <tbody className="tbdy">
              {userdata.map((value) => {
                return (
                  <tr>
                    <td>{value.username}</td>
                    <td>{value.email}</td>
                    <td>{value.phoneno} </td>
                    <td>{value.age}</td>
                    <td>{value.dob}</td>
                    <td>{value.address}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {success && ( 
            <>
              <div className="col-6">
                <div className="overlay text-center" id="card">
                  <i
                    onClick={() => setsuccess(false)}
                    class=" mt-4 successfully fa fa-check-circle"
                    aria-hidden="true"
                  ></i>
                  <h5 className="mt-4">Data Entered Successfully</h5>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Validate;
