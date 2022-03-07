//  import Navbar from './components/navbar/navbar';
import "./App.css";
import Respons_nav from "./components/respons_nav/respons_nav";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import User from "./components/user/user";
import Msg from "./components/message/msg";
import Alts from "./components/analytics/alts";
import Order from "./components/order/order";
import Save from "./components/saved/save";
import Setting from "./components/settings/setting";
import Btm_nav from "./components/btm_nav/btm_nav";
 import Form from './components/form/form';
function App() {

  return (
    <>
      <div className="d-flex flex-row">
        <BrowserRouter>
          <Respons_nav></Respons_nav>

          <div className="flex-grow-1 " style={{ marginTop: "48px" }}>
            <Switch>
              <Route path="/user" excat component={User}></Route>
              <Route path="/message" excat component={Msg}></Route>
              <Route path="/analytics" excat component={Alts}></Route>
              <Route path="/order" excat component={Order}></Route>
              <Route path="/saved" excat component={Save}></Route>
              <Route path="/settings" excat component={Setting}></Route>
               <Route path='/form' excat component={Form}></Route>  

            </Switch>

            
            <Btm_nav></Btm_nav>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
