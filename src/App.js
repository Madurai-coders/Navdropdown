//  import Navbar from './components/navbar/navbar';
import './App.css';
import Respons_nav from './components/respons_nav/respons_nav';
 import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import User from './components/user/user';

function App() {
  return (
    <>
 <div className='d-flex flex-row'>
   <BrowserRouter>
            
                 
     <Respons_nav></Respons_nav> 
            

                <div className="flex-grow-1">
<Switch>

 
 <Route path='/user' excat component={User}></Route> 

</Switch>
     </div>
    
     </BrowserRouter>
     </div>
    
    </>
  );
}

export default App;
