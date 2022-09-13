import React from "react";
import {
  Link,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Location = (props) => {
 
  const navigate = useNavigate();
  const {city} = useParams();
  const sendSurvey = (e) => {
    e.preventDefault();
    navigate(-1);
  }
  return (
    <div> <h1>Location {city.toUpperCase()}</h1>
    <button onClick={sendSurvey}>to Seattle</button></div>
   
  );
}


    
function App() {
  return (
    <div>
      <p>
        <Link to="/location/seattle">Seattle</Link>
         | 
        <Link to="/location/chicago">Chicago</Link>
         | 
        <Link to="/location/burbank">Burbank</Link>
      </p>
      
      <Routes>
        <Route path="/location/:city" element={<Location />}/>
      </Routes>
    </div>
  );
}
    
export default App;