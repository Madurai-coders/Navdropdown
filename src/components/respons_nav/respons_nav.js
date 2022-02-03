import "./respons_nav.css";

function Respons_nav() {
  return (
    <>
      <div className="sidebar">
        <div className="logo_cnt">
          <div className="logo">
            <i class="lg fa fa-code"></i>
            <span className="logo_name">CodingLab</span>
          </div>
          <i class=" btn fa fa-bars"></i>
        </div>
        <ul className="nav_list">
          <li>
            <a href="#">
              <i class=" search fa fa-search"></i>
              <input type="text" placeholder="Search..."></input>
            </a>
            <span className="tooltips">Search</span>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-user"></i>
              <span className="link_name">User</span>
            </a>
            <span className="tooltips">User</span>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-comments"></i>
              <span className="link_name">Message</span>
            </a>
            <span className="tooltips">Message</span>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-calendar"></i>
              <span className="link_name">Analytics</span>
            </a>
            <span className="tooltips">Analytics</span>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-folder"></i>
              <span className="link_name">File Manager</span>
            
            </a>
            <span className="tooltips">File Manager</span>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-shopping-cart"></i>
              <span className="link_name">Order</span>
            </a>
            <span className="tooltips">Order</span>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-heart"></i>
              <span className="link_name">Saved</span>
            </a>
            <span className="tooltips">Saved</span>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-cog"></i>
              <span className="link_name">Settings</span>
            </a>
            <span className="tooltips">Settings</span>
          </li>
        </ul>
        <div className="profile_cnt">
          <div className="profile">
            <div className="profile_details">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSoQFvYAr4KD4S-iecBnmLmPf7zuyFyHkd8w&usqp=CAU"
                className="pfl"
                alt=""
              ></img>
             <div className="name_job">
              <div className="profile_name">PriyaDharshini</div>
              <div className="job">Web designer</div>
              </div>

            <i class=" logout fa fa-arrow-left"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Respons_nav;
