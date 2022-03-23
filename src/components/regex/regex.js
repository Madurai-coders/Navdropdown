
import './regex.css';



function Regex() {
 
function reg (){
       //  var str = "\n my name is Priya\n \my age is 22";
       //  var pattern = /my/m;
       //  var result = str.match(pattern);
       // 
       let pattern = /Ts/i;
let result = pattern.global;
document.getElementById('demo').innerHTML = result
}

  return(
  <>
        <div className=" d-flex flex-column">

  <h4>My name is priya</h4>
  <button type="button" onClick={reg} className="succ btn btn-success">Submit</button>
  <p id="demo"></p>
  </div>
  
  
  
  
  </>
  );
}

export default Regex;
