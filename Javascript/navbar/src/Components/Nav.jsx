import { useContext } from "react";
import Wrapper from "../Wrapper";
import { useState } from "react";


const Nav = (props) => {
    const {name} = useContext(Wrapper);
    return <>
    <div>Hi {name}!</div>
    </>
}

export default Nav;