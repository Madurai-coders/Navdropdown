import "./respons_nav.css";
import { Link } from "react-router-dom";

function Respons_nav() {
  const addclass = () => {
    document.querySelector("#btn").classList.toggle("inactive");
    document.querySelector("#sidebar").classList.toggle("close_1");
    document.querySelector("#logout").classList.toggle("change");
    document.querySelector("#submenu").classList.remove("menuopen");
    document.querySelector("#arrow").classList.remove("down"); 
    document.querySelector("#submenu_1").classList.remove("menuopen_1");
    document.querySelector("#arrow_1").classList.remove("down_1"); 
  };

  const addfnt = () => {
    document.querySelector("#sidebar").classList.add("close_1");
    document.querySelector("#btn").classList.toggle("inactive");
    document.querySelector("#logout").classList.add("change");
  };

  const closefnt = () => {
    document.querySelector("#btn").classList.toggle("inactive");
    document.querySelector("#logout").classList.toggle("change");
    document.querySelector("#sidebar").classList.toggle("close_1");
  };

  const dropdown = () => {
    document.querySelector("#submenu").classList.toggle("menuopen");
    document.querySelector("#arrow").classList.toggle("down");
    document.querySelector("#submenu_1").classList.remove("menuopen_1");
    document.querySelector("#arrow_1").classList.remove("down_1");  
  };

  const dropdown_1 = () => {
    document.querySelector("#submenu_1").classList.toggle("menuopen_1");
    document.querySelector("#arrow_1").classList.toggle("down_1");
    document.querySelector("#submenu").classList.remove("menuopen");
    document.querySelector("#arrow").classList.remove("down");
  };

  return (
    <>
    <div className="d-flex">
      <div className="sidebar" id="sidebar">
        <div className="logo_cnt">
          <nav class="navbar navbar-dark bg-black">
            <div class="container-fluid">
              <a class="navbar-brand">
                <i class="lg fa fa-code" id="logo"></i>
                <span className="logo_name" id="logo_1">
                  CodingLab
                </span>
              </a>
              <form class="d-flex">
                 <Link to="/validate" style={{ textDecoration: "none" }}>
                  <button class="btn btn-primary">Sign In</button>{" "}
                </Link> 
               

              
              </form>
            </div>
          </nav>
          <i onClick={addclass} id="btn" className="bar fa fa-bars"></i>
        </div>

        <ul className="nav_list">
          <li className="sh">
            <a href="#">
              <i onClick={addfnt} id="bar" class=" search fa fa-search"></i>
              <input type="text" placeholder="Search..."></input>
            </a>
            
          </li>
          <Link to="/user" style={{ textDecoration: "none" }}>
            <li className="dropdown">
              <a href="#">
                <i class="fa fa-user"></i>
                <span className="link_name" id="link_name_close">
                  User
                </span>
                <i
                  id="arrow"
                  onClick={dropdown}
                  className="chevron_down fa fa-sort-down"
                ></i>
              </a>
            </li>
            <div className="menulist" id="submenu">
              <h6 className="sub">My Account</h6>
              <h6 className="sub">My Rewards</h6>
              <h6 className="sub"> My Wish List</h6>
            </div>
          </Link>

          <Link to="/message" style={{ textDecoration: "none" }}>
            <li>
              <a href="#">
                <i class="fa fa-comments"></i>
                <span className="link_name" id="link_name_close">
                  Message
                </span>
              </a>
              
            </li>
          </Link>
          <Link to="/analytics" style={{ textDecoration: "none" }}>
            <li>
              <a href="#">
                <i class="fa fa-calendar"></i>
                <span className="link_name">Analytics</span>
              </a>
             
            </li>
          </Link>
          <Link to="/order" style={{ textDecoration: "none" }}>
            <li>
              <a href="#">
                <i class="fa fa-shopping-cart"></i>
                <span className="link_name">Order</span>
                <i
                  id="arrow_1"
                  onClick={dropdown_1}
                  className="chevron_down_1 fa fa-sort-down"
                ></i>
              </a>
            </li>
            <div className="menulist_1" id="submenu_1">
              <h6 className="sub_1">My Order</h6>
              <h6 className="sub_1">Cart List</h6>
              <h6 className="sub_1">Favorite</h6>
            </div>
          </Link>
          <Link to="/saved" style={{ textDecoration: "none" }}>
            <li>
              <a href="#">
                <i class="fa fa-heart"></i>
                <span className="link_name">Saved</span>
              </a>
         
            </li>
          </Link>

          <Link to="/settings" style={{ textDecoration: "none" }}>
            <li>
              <a href="#">
                <i class="fa fa-cog"></i>
                <span className="link_name">Settings</span>
              </a>
            
            </li>
          </Link>

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
              </div>
              <i
                onClick={closefnt}
                id="logout"
                class=" logout fa fa-arrow-left"
              ></i>
            </div>
          </div>
        </ul>
      </div>
    </div>
    </>
  );
}
export default Respons_nav;
