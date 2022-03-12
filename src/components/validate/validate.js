import "./validate.css";
import React, { useState } from "react";
function Validate() {
  const [inputdata, setinputdata] = useState({
    username: "",
    email: "",
    phoneno: "",
    age: "",
    dob: "",
    address: "",
  });
  console.log(inputdata);
  const [userdata, setuserdata] = useState([]);

  function username() {
    if (inputdata.username.length > 4) {
      document.querySelector("#name_req").classList.remove("namereq_warning");
    }
    if (inputdata.username.length < 1) {
      document.querySelector("#name_req").classList.add("namereq_warning");
    }
    if (inputdata.username.length > 0) {
      document.querySelector("#name_req").classList.remove("namereq_warning");
    }
    if (inputdata.username.length < 4) {
      document.querySelector("#name_long").classList.add("namelong_warning");
    }
    if (inputdata.username.length < 1) {
      document.querySelector("#name_long").classList.remove("namelong_warning");
    }
    if (inputdata.username.length > 4) {
      document.querySelector("#name_long").classList.remove("namelong_warning");
    }
    if (inputdata.username.length > 3) {
      document.getElementById("input_warning").style.borderColor = "#e52213";
    }
    if (inputdata.username.length > 5) {
      document.getElementById("input_warning").style.borderColor = "#198754";
    }
  }

  function Email() {
    if (inputdata.email === "") {
      document.querySelector("#email_req").classList.add("emailreq_warning");
    }
    // if(inputdata.email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    //   document.querySelector("#email_invalid").classList.remove("email_warning");
    // }
  }

  function Phone() {
    if (inputdata.phoneno === "") {
      document.querySelector("#no_req").classList.add("noreq_warning");
    }
    if (inputdata.phoneno.length > 5) {
      document.getElementById("phoneinput_warning").style.borderColor =
        "#e52213";
    }
    if (inputdata.phoneno.length === 10) {
      document.getElementById("phoneinput_warning").style.borderColor =
        "#198754";
    }
    if (inputdata.phoneno.length > 10) {
      document.querySelector("#no_limit").classList.add("nolimit_warning");
    }
    if (inputdata.phoneno.length < 1) {
      document.querySelector("#no_limit").classList.remove("nolimit_warning");
    }
    if (inputdata.phoneno.length > 1) {
      document.querySelector("#no_req").classList.remove("noreq_warning");
    }
  }

  function Age() {
    if (inputdata.age.length === "") {
      document.querySelector("#age_req").classList.add("agereq_warning");
    }
  }

  function submit() {
    if (inputdata.username.length > 4 && inputdata.phoneno.length === 10) {
      let array = userdata;
      array.push({ ...inputdata });
      console.log(array);
      setuserdata([...array]);

      setinputdata({
        username: "",
        email: "",
        phoneno: "",
        age: "",
        dob: "",
        address: "",
      });
      document.getElementById("input_warning").style.borderColor = "black";
      document.getElementById("emailinput_warning").style.borderColor = "black";
      document.getElementById("phoneinput_warning").style.borderColor = "black";
    }
    if (inputdata.username === "") {
      document.querySelector("#name_req").classList.add("namereq_warning");
    }
    if (inputdata.username === "") {
      document.getElementById("input_warning").style.borderColor = "red";
    }


    
    if (inputdata.email === "") {
      document.querySelector("#email_req").classList.add("emailreq_warning");
    }
    if (inputdata.email === "") {
      document
        .querySelector("#Emailinput_warning")
        .classList.add("emailinput_warning");
    }

    //   if(inputdata.email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    //     document.querySelector("#email_invalid").classList.remove("email_warning");
    //   }
    //  else{
    //   document.querySelector("#email_invalid").classList.remove("email_warning");

    //  }


    if (inputdata.phoneno === "") {
      document.querySelector("#no_req").classList.add("noreq_warning");
    }
    if (inputdata.phoneno === "") {
      document.getElementById("phoneinput_warning").style.borderColor = "red";
    }
 



    if (inputdata.age === "") {
      document.querySelector("#age_req").classList.add("agereq_warning");
    }
    if (inputdata.age === "") {
      document.getElementById("ageinput_warning").style.borderColor = "red";
    }
    if (inputdata.age < 19) {
      document.querySelector("#age_limit").classList.add("agelimit_warning");
    }
    if (inputdata.age > 19) {
      document.querySelector("#age_limit").classList.remove("agelimit_warning");
    }
    if (inputdata.age < 19) {
      document.querySelector("#age_req").classList.remove("agereq_warning");
    }



    if (inputdata.dob === "") {
      document.querySelector("#dob_req").classList.add("dobreq_warning");
    }
    if (inputdata.dob > 2002) {
      document.querySelector("#dob_limit").classList.add("doblimit_warning");
    }
    if (inputdata.dob === "") {
      document.getElementById("dobinput_warning").style.borderColor = "red";
    }




    if (inputdata.address === "") {
      document.getElementById("addressinput_warning").style.borderColor = "red";
    }
    if (inputdata.address === "") {
      document
        .querySelector("#address_req")
        .classList.add("addressreq_warning");
    }

    if (inputdata.address === "") {
      document.getElementById("dobinput_warning").style.borderColor = "red";
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
                  className="form-label name"
                >
                  Name
                </label>
                <input
                  id="input_warning"
                  value={inputdata.username}
                  onKeyUp={username}
                  onChange={(e) =>
                    setinputdata({ ...inputdata, username: e.target.value })
                  }
                  type="name"
                  className="form-control name_input"
                ></input>
              </div>
              <p className="name_req" id="name_req">
                Username is Required
              </p>
              <p className="name_long" id="name_long">
                Username is must be longer than 4 characters
              </p>
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
                  type="email"
                  className="form-control email_input"
                  value={inputdata.email}
                  onKeyUp={Email}
                  onChange={(e) =>
                    setinputdata({ ...inputdata, email: e.target.value })
                  }
                ></input>
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
                <label for="exampleFormControlInput1" className="form-label ">
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
                <p className="no_req" id="no_req">
                  Phone no is required
                </p>
                <p className="no_limit" id="no_limit">
                  phone no shuld be 10 digits
                </p>
                <p className="no_only" id="no_only">
                  Only digits
                </p>
              </div>
            </div>
            <div className="col-1">
              <div className="mb-3 ">
                <label for="quantity">Age</label>

                <input
                  onKeyUp={Age}
                  type="number"
                  className="form-control age_input"
                  id="ageinput_warning"
                  name="quantity"
                  min="20"
                  max="60"
                ></input>
                <p className="age_req" id="age_req">
                  Age is required
                </p>
                <p className="age_limit" id="age_limit">
                  You must be over 20 to register
                </p>
              </div>
            </div>
            <div className="col-2">
              <div className="mb-3 ">
                <label for="exampleFormControlInput1" className="form-label">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="form-control dob_input "
                  id="dobinput_warning"
                ></input>
                <p className="dob_req" id="dob_req">
                  Data of birth required
                </p>
              </div>

              <p className="dob_limit" id="dob_limit">
                You must me be over 20 to register
              </p>
            </div>
            <div className="col-3">
              <div className="mb-3 ">
                <label for="exampleFormControlInput1" className="form-label">
                  Address
                </label>
                <input
                  placeholder="Flat NO/Street/Area/District"
                  type="text"
                  className="form-control address_input"
                  id="addressinput_warning"
                ></input>
                <p className="address_req" id="address_req">
                  Address is required
                </p>
              </div>
            </div>
          </div>

          <div className="col-4">
            <button
              onClick={submit}
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
                    <th scope="row">{value.username}</th>
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
        </div>
      </div>
    </>
  );
}

export default Validate;
