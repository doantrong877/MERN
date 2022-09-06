import React, {useState} from "react";



const PersonCard = props => {
    const[state, setState] = useState(props.age);

    const increase = () => {
        setState(state + 1);
     };

    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {state}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={increase}>Birthday Button for {props.firstName} {props.lastName}</button>
             </div>
    )
}

export default PersonCard;