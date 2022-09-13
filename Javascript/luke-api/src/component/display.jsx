import {Link,Routes,Route,useParams,useNavigate} from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Form from './form';
const Display = (props) =>{
    const {type, id} = useParams();
    const [fetchData2, setData2] = useState({});
    //console.log(fetchData2);
    let url = "";
   if(type === 'vehicles' || type === "starships"){
    url = "https://swapi.dev/api/"+type+"/";
   } else{
    url = "https://swapi.dev/api/"+type+"/"+id.toString()+"/";
   }
  
  
    useEffect(()=>{
      axios.get(url)
      .then(response=>{setData2(response.data); console.log(response.data); })
      .catch((error) => console.log(error))
    },[url]
    );
  
  
 
    return (
      <div>
        <Form data ={fetchData2} type1 = {type} id1 = {id}/>
      </div>
      
    )
  }

  export default Display;