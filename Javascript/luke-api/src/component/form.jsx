import {Link,Routes,Route,useParams,useNavigate} from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Form = (props) => {
    const [fetchData, setData] = useState({});
    console.log(fetchData);
    const [idValue, setId] = useState();
    const arr = [];
    const navigate = useNavigate();
    
    
   
    useEffect(()=>{
      axios.get('https://swapi.dev/api/')
      .then(response=>{setData(response.data); })
    .catch((error) => console.log(error))}, [idValue]
    );
    
    Object.keys(fetchData).forEach(function(key){
            
      arr.push(key);
    })
    const [searchValue, setSelect] = useState();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate("/"+searchValue+"/"+idValue)
    }
    
    
      return (
        <div>       
          <form onSubmit={handleSubmit}>
          <label>Search For: </label>
          <select value={searchValue}  onChange={(e) => setSelect(e.target.value)} >
          <option value="none">Please pick one</option>
            {arr.map((info, index)=>{
              return(<option value={info} key={index}>{info}</option>)
            })}
          </select>
  
          <label>      ID: </label>
          <input onChange={(e) => setId(e.target.value)}/>
  
          <button type='submit'>Search</button>
          </form>
  
          
        { (props.type1 === 'people' && !isNaN(props.id1))&&  
             (
              <div>
                <h1>{props.data.name}</h1>
                <h2>Height: {props.data.height} cm</h2>
                <h2>Mass: {props.data.mass} kg</h2>
                <h2>Hair Color: {props.data.hair_color}</h2>
                <h2>Skin Color: {props.data.skin_color}</h2>
              </div>
            )        
        }

        { (props.type1 === 'planets' && !isNaN(props.id1)) &&  
             (
              <div>
                <h1>{props.data.name}</h1>
                <h2>Climate: {props.data.climate} </h2>
                <h2>Terrain: {props.data.terrain} </h2>
                <h2>Population: {props.data.population}</h2>
                <h2>Diameter: {props.data.diameter}</h2>
              </div>
            )        
        }

        { (props.type1 === 'films'&& !isNaN(props.id1)) &&  
             (
              <div>
                <h1>{props.data.title}</h1>
                <h2>Director: {props.data.director} </h2>
                <h2>Producer: {props.data.producer} </h2>
                <h2>Episode: {props.data.episode_id}</h2>
                <h2>Release Date: {props.data.release_date}</h2>
              </div>
            )        
        }

        { (props.type1 === 'species' && !isNaN(props.id1)) &&  
             (
              <div>
                <h1>{props.data.name}</h1>
                <h2>Classification: {props.data.classification} </h2>
                <h2>Designation: {props.data.designation} </h2>
                <h2>Average Height: {props.data.average_height} cm</h2>
                <h2>Average Lifespan: {props.data.average_lifespan} years</h2>
              </div>
            )        
        }
         
        { (props.type1 === 'vehicles' && !isNaN(props.id1)) &&  props.data.results &&
             (
              <div>
                
                <h1>{props.data.results[props.id1].name}</h1>
                <h2>Model: {props.data.results[props.id1].model} </h2>
                <h2>Manufacturer: {props.data.results[props.id1].manufacturer} </h2>
                <h2>Cost: {props.data.results[props.id1].cost_in_credits} credits</h2>
                <h2>Crew: {props.data.results[props.id1].crew}</h2>
              </div>
            )        
        }

    { (props.type1 === 'starships' && !isNaN(props.id1)) &&  props.data.results &&
             (
              <div>
                
                <h1>{props.data.results[props.id1].name}</h1>
                <h2>Model: {props.data.results[props.id1].model} </h2>
                <h2>Manufacturer: {props.data.results[props.id1].manufacturer} </h2>
                <h2>Cost: {props.data.results[props.id1].cost_in_credits} credits</h2>
                <h2>Crew: {props.data.results[props.id1].crew}</h2>
              </div>
            )        
        }   
        </div>


      )
   }

   export default Form;