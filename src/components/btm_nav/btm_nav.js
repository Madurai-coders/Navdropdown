import './btm_nav.css'
import { useMediaQuery } from "react-responsive";



function Btm_nav(){
       const isTabletOrMobile = useMediaQuery({ query: "(max-width: 430px)" });

       return(
              <>
            {isTabletOrMobile && (
              <div className="bottom_nav">
                <a href="#" className="navlist mt-2">
                  <i class="home fa fa-home" aria-hidden="true"></i>
                  <span className="nav_txt">Home</span>
                </a>
                <a href="#" className="navlist mt-2">
                  <i class="cart fa fa-cart-plus" aria-hidden="true"></i>
                  <span className="nav_txt">Cart</span>
                </a>
                <a href="#" className="navlist mt-2">
                  <i class="act fa fa-user" aria-hidden="true"></i>
                  <span className="nav_txt">User</span>
                </a>
                <a href="#" className="navlist mt-2">
                  <i class=" community fa fa-users" aria-hidden="true"></i>
                  <span className="nav_txt">Community</span>
                </a>
              </div>
            )}  
              </>








       )


}
export default Btm_nav;