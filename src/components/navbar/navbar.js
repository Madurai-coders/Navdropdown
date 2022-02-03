import "./navbar.css";

function Navbar() {
  return (
    <>
      <script src="https://unpkg.com/boxicons@2.1.1/dist/boxicons.js"></script>

      <div className="sidebar close">
        <div className="logo">
          <i class="lg fa fa-code"></i>
          <span className="logo_name">CodingLab</span>
        </div>

        <ul className="nav_links">
          <li>
            <div className="box">
              <a href="#">
                <i className="icon fa fa-qrcode"></i>
                <span className="link_name">Dashboard</span>
              </a>
            </div>
          </li>



          <li>
            <div className="icon_link">
              <div className="box">
              <li className="dropdown"><a href="#">
                  <i class="icon fa fa-folder-open"></i>
                <span className="link_name">Category</span>
                </a>
                <i className="chevron_down fa fa-sort-down"></i>
             <ul>
             <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Card Design</a>
              </li>
              <li>
                <a href="#">Login Form</a>
              </li>
             </ul>
           </li>
              </div>
            </div>
            </li>


           

          <li>
            <div className="icon_link">
              <div className="box">
              <li className="dropdown"><a href="#">
                  <i class="icon fa fa-folder-open"></i>
                <span className="link_name">Posts</span>
                </a>
                <i className="chevron_down_1 fa fa-sort-down"></i>
             <ul>
             <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Card Design</a>
              </li>
              <li>
                <a href="#">Login Form</a>
              </li>
             </ul>
           </li>
              </div>
            </div>
            </li>


            <li>
            <div className="icon_link">
              <div className="box">
              <li className="dropdown"><a href="#">
              <i class="fa fa-comments"></i>
                <span className="link_name">Message</span>
                </a>
                </li>
                </div>
                </div>
                </li>
                
            <li>
            <div className="icon_link">
              <div className="box">
              <li className="dropdown"><a href="#">
              <i class="fa fa-folder"></i>
                <span className="link_name">File Manager</span>
                </a>
                </li>
                </div>
                </div>
                </li>
                
            <li>
            <div className="icon_link">
              <div className="box">
              <li className="dropdown"><a href="#">
              <i class="fa fa-shopping-cart"></i>
                <span className="link_name">Order</span>
                </a>
                </li>
                </div>
                </div>
                </li>
                
            <li>
            <div className="icon_link">
              <div className="box">
              <li className="dropdown"><a href="#">
              <i class="fa fa-cog"></i>
                <span className="link_name">Settings</span>
                </a>
                </li>
                </div>
                </div>
                </li>



          
        </ul> 
       </div> 
    </>
  );
}
export default Navbar;
