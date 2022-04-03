import moment from "moment";

export function validation_name(value) {
  var format = /[!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?0-9]+/;
  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
        if (value.length >= 1) {
          if (!format.test(value)) {
            if (value.length <= 8) {
              if (!value.endsWith(" ")) {
                return {
                  class: "pass",
                };
              } else
                return {
                  class: "warn",
                  msg: (
                    <>
                      <small class=" namespace_end">
                        Cannot end with a white space
                      </small>
                    </>
                  ),
                };
            } else
              return {
                class: "warn",
                msg: (
                  <>
                    <small class="namelimit_below">Max letter 8</small>
                  </>
                ),
              };
          } else
            return {
              class: "warn",
              msg: (
                <>
                  <small class="nameletters_only">
                    Cannot contain symbol or number.
                  </small>
                </>
              ),
            };
        } else
          return {
            class: "warn",
            msg: (
              <>
                <small class="namelimit_above">Min 1 tetter.</small>
              </>
            ),
          };
      } else
        return {
          class: "warn",
          msg: (
            <>
              <small class="namespace_start">
                Cannot start with empty space
              </small>
            </>
          ),
        };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="name_req">This field is a required.</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}

export function validation_Email(value) {
  var email_format = /\S+@\S+\.\S+/;
  if (value == "" || value != "not_selected") {
    if (value) {
      console.log(value);
      if (!value.startsWith(" ")) {
        if (email_format.test(value)) {
          if (!value.endsWith(" ")) {
            return {
              class: "pass",
            };
          } else
            return {
              class: "warn",
              msg: (
                <>
                  <small class="emailend_space">
                    Cannot end with empty space
                  </small>
                </>
              ),
            };
        } else
          return {
            class: "warn",
            msg: (
              <>
                <small class="invalid_email">Invalid Email</small>
              </>
            ),
          };
      } else
        return {
          class: "warn",
          msg: (
            <>
              <small className="emailstart_space">
                Cannot start with empty space
              </small>
            </>
          ),
        };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small className="email_req">This field is a required</small>
          </>
        ),
      };
  }

  if (value == "not_selected") return "";
}

export function validation_phoneno(value) {
  var phoneno_format = /[0-9]/g;
  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
        if (value.length >= 1) {
          if (phoneno_format.test(value)) {
            if (value.length === 10) {
              if (!value.endsWith(" ")) {
                return {
                  class: "pass",
                };
              } else
                return {
                  class: "warn",
                  msg: (
                    <>
                      <small class="nospace_end">
                        Cannot end with a white space
                      </small>
                    </>
                  ),
                };
            } else
              return {
                class: "warn",
                msg: (
                  <>
                    <small class="phoneno_limit">
                      Phone no should be 10 digits
                    </small>
                  </>
                ),
              };
          } else
            return {
              class: "warn",
              msg: (
                <>
                  <small class="digits_only">only digits</small>
                </>
              ),
            };
        } else
          return {
            class: "warn",
            msg: (
              <>
                <small class="no_minimum">minimum 1 letter</small>
              </>
            ),
          };
      } else
        return {
          class: "warn",
          msg: (
            <>
              <small class="nospace_start">Cannot start with empty space</small>
            </>
          ),
        };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="no_req">This field is a required.</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}

export function validation_age(value) {
  var age_format = /^2[0-9]|3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-5]$/;
  if (value == "" || value != "not_selected") {
    if (value) {
      if (age_format.test(value)) {
        return {
          class: "pass",
        };
      } else
        return {
          class: "warn",
          msg: (
            <>
              <small class="age_warning">your age is not eligible</small>
            </>
          ),
        };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="age_req">This field is a required.</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}

export function validation_date(value) {
  if (value == "" || value != "not_selected") {
    if (value) {
      if (moment(value).isBetween("1955-12-31", "1999-01-01", "year")) {
        return {
          class: "pass",
        };
      } else
        return {
          class: "warn",
          msg: (
            <>
              <small className="date_warning">Date of birth is Invalid</small>
            </>
          ),
        };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="date_req">This field is a required.</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}

export function validation_address(value) {
  var address_formate =/^[#.0-9a-zA-Z\s-/]+$/
  if (value == "" || value != "not_selected") {
    if (value) {
      if (!value.startsWith(" ")) {
        if (value.length >= 1) {
          if(address_formate.test(value)){
          if (value.length <= 152) {
            if (!value.endsWith(" ")) {
              return {
                class: "pass",
              };
            } else
              return {
                class: "warn",
                msg: (
                  <>
                    <small class=" addressspace_end">
                      Cannot end with a white space
                    </small>
                  </>
                ),
              };
          } else
            return {
              class: "warn",
              msg: (
                <>
                  <small class=" addresslimit_below">Max letter 152</small>
                </>
              ),
            };
        } 
        else
        return {
          class: "warn",
          msg: (
            <>
              <small class="address_warning">Enter the correct address formate</small>
            </>
          ),
        };
    }   else
          return {
            class: "warn",
            msg: (
              <>
                <small class="addresslimit_above">Min 1 tetter.</small>
              </>
            ),
          };
      } else
        return {
          class: "warn",
          msg: (
            <>
              <small class="addressspace_start">
                Cannot start with empty space
              </small>
            </>
          ),
        };
    } else
      return {
        class: "warn",
        msg: (
          <>
            <small class="address_req">This field is a required.</small>
          </>
        ),
      };
  }
  if (value == "not_selected") return "";
}
