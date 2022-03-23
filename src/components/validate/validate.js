import "./validate.css";
import React, { useState } from "react";
import { FavoriteBorderOutlined } from "@material-ui/icons";

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
    if (inputdata.username.length < 1) {
      document.querySelector("#name_req").classList.add("namereq_warning");
      document.querySelector("#name_long").classList.remove("namelong_warning");
    } else {
      document.querySelector("#name_req").classList.remove("namereq_warning");
    }
    if (inputdata.username.length > 2) {
      document.querySelector("#name_long").classList.add("namelong_warning");
      document.getElementById("input_warning").style.borderColor = "#e52213";
    }

    if (inputdata.username.length > 3) {
      document.querySelector("#name_long").classList.remove("namelong_warning");
      document.getElementById("input_warning").style.borderColor = "#198754";
    }

    var nonwhite_space = /\S/g;
    if (inputdata.username.match(nonwhite_space)) {
      document.querySelector("#space").classList.remove("space_warning");
    }
  }

  function Email() {
    var regex = /\S+@\S+\.\S+/;
    if (regex.test(inputdata.email)) {
      document
        .querySelector("#email_invalid")
        .classList.remove("email_warning");
      document.getElementById("Emailinput_warning").style.borderColor =
        "#198754";
    } else {
      document.querySelector("#email_invalid").classList.add("email_warning");
      document.getElementById("Emailinput_warning").style.borderColor =
        "#e52213";
    }
    if (inputdata.email.length > 0) {
      document.querySelector("#email_req").classList.remove("emailreq_warning");
    }
    if (inputdata.email.length < 1) {
      document.querySelector("#email_req").classList.add("emailreq_warning");
      document
        .querySelector("#email_invalid")
        .classList.remove("email_warning");
    }
    var email_space = /\s/g;
    if (inputdata.email.match(email_space)) {
      document
        .querySelector("#email_space")
        .classList.remove("emailspace_warning");
    }
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
      document.querySelector("#no_limit").classList.remove("nolimit_warning");
    }
    if (inputdata.phoneno.length > 10) {
      document.querySelector("#no_limit").classList.add("nolimit_warning");
    }
    if (inputdata.phoneno.length < 10) {
      document.querySelector("#no_limit").classList.add("nolimit_warning");
    }
    if (inputdata.phoneno.length < 1) {
      document.querySelector("#no_limit").classList.remove("nolimit_warning");
    }
    if (inputdata.phoneno.length > 0) {
      document.querySelector("#no_req").classList.remove("noreq_warning");
    }
    // var no_space = /\s/g;
    // if (inputdata.phoneno.match(no_space)) {
    //   document.querySelector("#no_space").classList.remove("nospace_warning");
    // }
  }

  function Age() {
    if (inputdata.age.length === "") {
      document.querySelector("#age_req").classList.add("agereq_warning");
    }
    if (inputdata.age > 20) {
      document.getElementById("ageinput_warning").style.borderColor = "#198754";
    } else {
      document.getElementById("ageinput_warning").style.borderColor = "#e52213";
    }
  }

  function address() {
    if (inputdata.address.length > 252) {
      document
        .querySelector("#address_limit")
        .classList.add("addresslimit_warning");
    } else {
      document
        .querySelector("#address_limit")
        .classList.remove("addresslimit_warning");
    }
    if (inputdata.address.length < 1) {
      document
        .querySelector("#address_req")
        .classList.add("addressreq_warning");
    } else {
      document
        .querySelector("#address_req")
        .classList.remove("addressreq_warning");
    }
    if (inputdata.address.length > 150) {
      document.getElementById("addressinput_warning").style.borderColor =
        "#198754";
    } else {
      document.getElementById("addressinput_warning").style.borderColor =
        "#e52213";
    }
    var address_space = /\s/g;
    if (inputdata.address.match(address_space)) {
      document
        .querySelector("#address_space")
        .classList.remove("addressspace_warning");
    }
  }

  function submit() {
    if (
      inputdata.username.length > 4 &&
      inputdata.phoneno.length === 10 &&
      inputdata.email &&
      inputdata.age &&
      inputdata.dob &&
      inputdata.address.length > 15
    ) {
      let array = userdata;
      array.push({ ...inputdata });
      console.log(array);
      setuserdata([...array]);

      setinputdata({
        username: "priya",
        email: "",
        phoneno: "",
        age: "",
        dob: "",
        address: "",
      });
      console.log(inputdata.age)

      document.getElementById("phoneinput_warning").style.borderColor = "black";
      document.getElementById("input_warning").style.borderColor = "black";
      document.getElementById("Emailinput_warning").style.borderColor = "black";
      document.getElementById("addressinput_warning").style.borderColor =
        "black";
      document.getElementById("ageinput_warning").style.borderColor = "black";
      document.getElementById("dobinput_warning").style.borderColor = "black";

      setTimeout(function () {

        document.querySelector("#card").classList.add("overlay_show");
      }, 1000);

      setTimeout(function() {
        document.getElementById('card').style.display = "none";
     }, 2000);
    }
    if (inputdata.username === "") {
      document.querySelector("#name_req").classList.add("namereq_warning");
      document.getElementById("input_warning").style.borderColor = "red";
    }

    var white_space = /\s/g;
    if (inputdata.username.match(white_space)) {
      document.querySelector("#space").classList.add("space_warning");
    }

    var email_space = /\s/g;
    if (inputdata.email.match(email_space)) {
      document
        .querySelector("#email_space")
        .classList.add("emailspace_warning");
    }

    //  var no_space = /\s/g;
    //  if (inputdata.phoneno.match(no_space)) {
    //    document.querySelector("#no_space").classList.add("nospace_warning");
    //   }

    var address_space = /\s/g;
    if (inputdata.address.match(address_space)) {
      document
        .querySelector("#address_space")
        .classList.add("addressspace_warning");
    }

    if (inputdata.email === "") {
      document.querySelector("#email_req").classList.add("emailreq_warning");
      document
        .querySelector("#Emailinput_warning")
        .classList.add("emailinput_warning");
    }

    if (inputdata.phoneno === "") {
      document.querySelector("#no_req").classList.add("noreq_warning");
      document.getElementById("phoneinput_warning").style.borderColor = "red";
    }

    if (inputdata.age === "") {
      document.querySelector("#age_req").classList.add("agereq_warning");
      document.getElementById("ageinput_warning").style.borderColor = "red";
    }

    var above = /^2[0-9]|7[0-5]$/;
    if (above.test(inputdata.age)) {
      document.querySelector("#age_limit").classList.remove("agelimit_warning");
    }
    var below = /^0[0-9]|1[0-9]$/;
    if (below.test(inputdata.age)) {
      document.querySelector("#age_limit").classList.add("agelimit_warning");
    }
    var over = /^7[0-6]|9[0-9]$/;
    if (over.test(inputdata.age)) {
      document.querySelector("#age_limit").classList.add("agelimit_warning");
    }

    if (inputdata.dob === "") {
      document.querySelector("#dob_req").classList.add("dobreq_warning");
      document.getElementById("dobinput_warning").style.borderColor = "red";
    }
    if (inputdata.address === "") {
      document.getElementById("addressinput_warning").style.borderColor = "red";
      document
        .querySelector("#address_req")
        .classList.add("addressreq_warning");
    }

    var date_regex = /^(19[5-9]\d|20[0-4]\d|2050)$/;
    if (date_regex.match(inputdata.dob)) {
      document.querySelector("#dob_req").classList.add("dobreq_warning");
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
                  value={inputdata.username}
                  onKeyUp={username}
                  onChange={(e) =>
                    setinputdata({ ...inputdata, username: e.target.value })
                  }
                  type="name"
                  className="form-control name_input"
                ></input>
              </div>
              <p className="space" id="space">
                Please Check Your Fields For Spaces
              </p>
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
                <p className="no_space" id="no_space">
                  Please Check Your Fields For Spaces
                </p>
                <p className="no_req" id="no_req">
                  Phone no is required
                </p>
                <p className="no_limit" id="no_limit">
                  phone no should be 10 digits
                </p>
                <p className="no_only" id="no_only">
                  Only digits
                </p>
              </div>
            </div>
            <div className="col-1">
              <div className="mb-3 ">
                <label for="quantity" className="age_txt">
                  Age
                </label>

                <input
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
            </div>
          </div>

          <div className="col-4 m-3">
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
          <div className="col-6"> 
          <div className="overlay text-center" id="card">
           
                <i
                  class=" mt-4 successfully fa fa-check-circle"
                  aria-hidden="true"
                ></i>
                <h5 className="mt-4">Data Entered Successfully</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Validate;
