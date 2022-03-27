

export function validation_name(value) {
    var format = /[!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?0-9]+/;
    if (value == "" || value != "not_selected") {
      // console.log(value);
      if (value) {
        if (!value.startsWith(" ")) {
          if (value.length >= 1) {
            if (!format.test(value)) {
              if (value.length <= 50) {
                if (!value.endsWith(" ")) {
                  return {
                    class: "pass",
                  };
                } else
                  return {
                    class: "warn",
                    msg: (
                      <>
                        <small class="text-danger">
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
                      <small class="text-danger">Max letter 50</small>
                    </>
                  ),
                };
            } else
              return {
                class: "warn",
                msg: (
                  <>
                    <small class="text-danger">
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
                  <small class="text-danger">Min 1 tetter.</small>
                </>
              ),
            };
        } else
          return {
            class: "warn",
            msg: (
              <>
                <small class="text-danger">Cannot start with empty space</small>
              </>
            ),
          };
      } else
        return {
          class: "warn",
          msg: (
            <>
              <small class="text-danger">This field is a required.</small>
            </>
          ),
        };
    }
    if (value == "not_selected") return "";
  }