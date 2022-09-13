import React, {useState, useEffect} from "react";
import axios from 'axios'
const Pokemon = (props) => {
    const [pokemons, setPokemons] = useState([]);
    var isFetch = false;


    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(response =>{
            console.log(response.results);
             setPokemons(response.data.results) })
      
    },[]);
    const handleClick = () => {
       if(isFetch === true){
        isFetch = false;
       } else {
        isFetch = true;
       }
    }
   
   
    return (
       
        <div>
            
            <button onClick={handleClick}>Fetch Pokemon</button>
         {pokemons.length > 0 && pokemons.map((pokemon, index)=>{
                return(<div key={index}>{pokemon.name}</div>)
            })}
        </div>

      
    )
}
export default Pokemon;

