import "./validate.css";
import React, { useState } from "react";
import { validation_name } from "./validate_functions";
import { validation_Email } from "./validate_functions";
import { validation_phoneno } from "./validate_functions";
import { validation_age } from "./validate_functions";
import { validation_date } from "./validate_functions";
import { validation_address } from "./validate_functions";

function Validate() {
  const [success, setsuccess] = useState(false);

  const [inputdata, setinputdata] = useState({
    username: "not_selected",
    email: "not_selected",
    phoneno: "not_selected",
    age: "not_selected",
    dob: "not_selected",
    address: "not_selected",
  });

  console.log(inputdata);

  const [userdata, setuserdata] = useState([
    {username:"priya",email:"nilapriya23@gmail.com",phoneno:"9578375007",age:"23",dob:"12-03-1996",address:"12-rajamroad"},
    {username:"riya",email:"riya67@gmail.com",phoneno:"9578375008",age:"28",dob:"12-03-1993",address:"22-rajamroad"}

  ]);

  function submit() {
    if (
      validation_name(inputdata.username).class === "pass" &&
      validation_Email(inputdata.email).class === "pass" &&
      validation_phoneno(inputdata.phoneno).class === "pass" &&
      validation_age(inputdata.age).class === "pass" &&
      validation_date(inputdata.dob).class === "pass" &&
      validation_address(inputdata.address).class === "pass"
    ) {
      let array = userdata;
      array.push({ ...inputdata});
      console.log(array);
      setuserdata([...array]);
    

      setinputdata({
        username: "not_selected",
        email: "not_selected",
        phoneno: "not_selected",
        age: "not_selected",
        dob: "not_selected",
        address: "not_selected",
      });

      setsuccess(true);

      setTimeout(() => {
        setsuccess(false);
      }, 3000);
    } 
   else  if (inputdata.username == "not_selected") {
      setinputdata({
        ...inputdata,
        username: "",
      });
    }
    if (inputdata.email == "not_selected") {
      setinputdata({
        ...inputdata,
        email: "",
      });
    }
    if (inputdata.phoneno == "not_selected") {
      setinputdata({
        ...inputdata,
        phoneno: "",
      });
    }
    if (inputdata.age == "not_selected") {
      setinputdata({
        ...inputdata,
        age: "",
      });
    }
    if (inputdata.dob == "not_selected") {
      setinputdata({
        ...inputdata,
        dob: "",
      });
    }
    if (inputdata.address == "not_selected") {
      setinputdata({
        ...inputdata,
        address: "",
      });
    }

    if (
      inputdata.username == "not_selected" &&
      inputdata.email == "not_selected" &&
      inputdata.phoneno == "not_selected" &&
      inputdata.age == "not_selected" &&
      inputdata.dob == "not_selected" &&
      inputdata.address == "not_selected"
    ) {
      setinputdata({
        username: "",
        email: "",
        phoneno: "",
        age: "",
        dob: "",
        address: "",
      });
    }
  }




  function Edit (value){

   console.log(value)

   setinputdata({
    username: value.username,
    email: value.email,
    phoneno: value.phoneno,
    age: value.age,
    dob:value.dob,
    address: value.address,
  });


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
                  value={
                    inputdata.username != "not_selected"
                      ? inputdata.username
                      : ""
                  }
                  onKeyUp={validation_name}
                  onChange={(e) =>
                    setinputdata({ ...inputdata, username: e.target.value })
                  }
                  onBlur={(e) =>
                    setinputdata({ ...inputdata, username: e.target.value })
                  }
                  type="name"
                  className="username"
                ></input>
              </div>

              {validation_name(inputdata.username).msg}
            </div>
            <div className="col-2">
              <div className="mb-3 ">
                <label
                  for="exampleFormControlInput1"
                  className="form-label email_txt"
                >
                  Email
                </label>
                <input
                  id="Emailinput_warning"
                  type="name"
                  className="email"
                  value={
                    inputdata.email != "not_selected" ? inputdata.email : ""
                  }
                  onKeyUp={validation_Email}
                  onChange={(e) =>
                    setinputdata({ ...inputdata, email: e.target.value })
                  }
                  onBlur={(e) =>
                    setinputdata({ ...inputdata, email: e.target.value })
                  }
                ></input>
              </div>
              {validation_Email(inputdata.email).msg}
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
                  id="phoneinput_warning"
                  value={
                    inputdata.phoneno != "not_selected" ? inputdata.phoneno : ""
                  }
                  onKeyUp={validation_phoneno}
                  onChange={(e) =>
                    setinputdata({ ...inputdata, phoneno: e.target.value })
                  }
                  onBlur={(e) =>
                    setinputdata({ ...inputdata, phoneno: e.target.value })
                  }
                  className="phoneno"
                ></input>
                {validation_phoneno(inputdata.phoneno).msg}
              </div>
            </div>
            <div className="col-1">
              <div className="mb-3 ">
                <label for="quantity" className="age_txt">
                  Age
                </label>

                <input
                  value={inputdata.age != "not_selected" ? inputdata.age : ""}
                  type="number"
                  className="age_input"
                  id="ageinput_warning"
                  name="quantity"
                  min="20"
                  max="75"
                  onKeyUp={validation_age}
                  onChange={(e) =>
                    setinputdata({ ...inputdata, age: e.target.value })
                  }
                  onBlur={(e) =>
                    setinputdata({ ...inputdata, age: e.target.value })
                  }
                ></input>
                {validation_age(inputdata.age).msg}
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
                  value={inputdata.dob != "not_selected" ? inputdata.dob : ""}
                  type="date"
                  onKeyUp={validation_date}
                  onChange={(e) =>
                    setinputdata({ ...inputdata, dob: e.target.value })
                  }
                  onBlur={(e) =>
                    setinputdata({ ...inputdata, dob: e.target.value })
                  }
                  className=" dob_input "
                  id="dobinput_warning"
                ></input>
                {validation_date(inputdata.dob).msg}
              </div>
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
                  value={
                    inputdata.address != "not_selected" ? inputdata.address : ""
                  }
                  placeholder="Flat no/Street/Area/District"
                  type="text"
                  onKeyUp={validation_address}
                  onChange={(e) =>
                    setinputdata({ ...inputdata, address: e.target.value })
                  }
                  onBlur={(e) =>
                    setinputdata({ ...inputdata, address: e.target.value })
                  }
                  className=" address_input"
                  id="addressinput_warning"
                ></input>
                {validation_address(inputdata.address).msg}
              </div>
            </div>
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
                <th scope="col">Control</th>

                
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
                    <td><i class="fa fa-pencil-square-o" onClick={()=>Edit(value)} aria-hidden="true"></i>
</td>
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
