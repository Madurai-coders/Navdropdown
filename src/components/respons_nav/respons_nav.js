import "./respons_nav.css";
import { Link } from "react-router-dom";

function Respons_nav() {
  const addclass = () => {
    document.querySelector("#btn").classList.toggle("inactive");
    document.querySelector("#sidebar").classList.toggle("close");
    document.querySelector("#logo").classList.toggle("hidden");
    document.querySelector("#logo_1").classList.toggle("hidden");
    document.querySelector("#logout").classList.toggle("change");

    const hide = document.querySelectorAll("#hide");
    for (let i = 0; i < hide.length; i++) {
      hide[i].classList.toggle("profilecnt_none");
    }
  };

  const addfnt = () => {
    document.querySelector("#logo").classList.remove("hidden");
    document.querySelector("#logo_1").classList.remove("hidden");
    document.querySelector("#btn").classList.remove("inactive");
    document.querySelector("#sidebar.close").classList.toggle("close");
    document.querySelector("#logout").classList.toggle("change");

    const show = document.querySelectorAll("#hide");
    for (let i = 0; i < show.length; i++) {
      show[i].classList.remove("profilecnt_none");
    }
  };

  return (
    <>
      <div className="sidebar" id="sidebar">
        <div className="logo_cnt">
          <div className="logo">
            <i class="lg fa fa-code" id="logo"></i>
            <span className="logo_name" id="logo_1">
              CodingLab
            </span>
          </div>
          <i onClick={addclass} id="btn" className="btn fa fa-bars"></i>
        </div>

        <ul className="nav_list">
          <li>
            <a href="#">
              <i onClick={addfnt} id="bar" class=" search fa fa-search"></i>
              <input type="text" placeholder="Search..."></input>
            </a>
            <span id="tooltips" className=" tooltips">
              Search
            </span>
          </li>
          <Link to="/user"style={{textDecoration:'none'}}>
            <li>
              <a href="#">
                <i class="fa fa-user"></i>
                <span className="link_name" id="link_name_close">
                  User
                </span>
              </a>

              <span id="tooltips" className="tooltips ">
                User
              </span>
            </li>
          </Link>
          <Link to="/message"style={{textDecoration:'none'}}>
          <li>
            <a href="#">
              <i class="fa fa-comments"></i>
              <span className="link_name" id="link_name_close">
                Message
              </span>
            </a>
            <span id="tooltips" className="tooltips">
              Message
            </span>
          </li>
          </Link>
          <Link to="/analytics"style={{textDecoration:'none'}}>
          <li>
            <a href="#">
              <i class="fa fa-calendar"></i>
              <span className="link_name">Analytics</span>
            </a>
            <span className="tooltips">Analytics</span>
          </li>
</Link>
<Link to="/order"style={{textDecoration:'none'}}>
          <li>
            <a href="#">
              <i class="fa fa-shopping-cart"></i>
              <span className="link_name">Order</span>
            </a>
            <span className="tooltips">Order</span>
          </li>
          </Link>
          <Link to="/saved"style={{textDecoration:'none'}}>
          <li>
            <a href="#">
              <i class="fa fa-heart"></i>
              <span className="link_name">Saved</span>
            </a>
            <span className="tooltips">Saved</span>
          </li>
          </Link>
          <Link to="/settings"style={{textDecoration:'none'}}>
          <li>
            <a href="#">
              <i class="fa fa-cog"></i>
              <span className="link_name">Settings</span>
            </a>
            <span className="tooltips">Settings</span>
          </li>
          </Link>
          </ul>
          <div className="profile_cnt">
            <div className="profile" id="profile">
              <div className="profile_details">
                <img
                  id="hide"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSoQFvYAr4KD4S-iecBnmLmPf7zuyFyHkd8w&usqp=CAU"
                  className="pfl"
                  alt=""
                ></img>
                <div className="name_job">
                  <div id="hide" className="profile_name">
                    PriyaDharshini
                  </div>
                  <div id="hide" className="job">
                    Web designer
                  </div>
                </div>

                <i id="logout" class=" logout fa fa-arrow-left"></i>
              </div>
            </div>
          </div>
        
      </div>
    </>
  );
}
export default Respons_nav;
