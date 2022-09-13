import React, {useState, useEffect} from "react";
import axios from 'axios'
const Pokemon = (props) => {
    const [pokemons, setPokemons] = useState([]);
    var isFetch = false;

   const fetchData = async () => {
        try {
            const response = await axios('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0');
            setPokemons = response.results;
        } catch (error){
            console.log(error.response);
        }
    }
    useEffect(() => {
        // axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        // //.then(response => response.json())
        // .then(response =>{
        //     console.log(response.results);
        //      setPokemons(response.results) })
       fetchData();
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
            {pokemons[0].name}
            <button onClick={handleClick}>Fetch Pokemon</button>
         {pokemons.length > 0 && pokemons.map((pokemon, index)=>{
                return(<div key={index}>{pokemon.name}</div>)
            })}
        </div>

      
    )
}
export default Pokemon;