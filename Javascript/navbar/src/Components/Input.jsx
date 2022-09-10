import React, {useState} from "react";
import Wrapper from "../Wrapper";
import { useContext } from "react";
const Form = (props) => {
    
const {updateName} = useContext(Wrapper);
    return (<> 
    <form>
        <label htmlFor="input">Your Name:</label>
        <input onChange={(e) => updateName(e.target.value)}/>
    </form>
    </>);
}

export default Form;