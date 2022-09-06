import React, {useState} from "react";

const FormData = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");
    const [error, setError] = useState({});
    
    
    const errorAlert = (e) => {
        if(e.target.name === "firstName"){
            setFirstName(e.target.value);
            if(firstName.length < 2){
                error.firstName =  " First Name must be at least 2 characters";
                
            } else{
                error.firstName = "";
                
            }
        }  if(e.target.name === "lastName"){
            setLastName(e.target.value);
            if(lastName.length < 2){
                error.lastName =  " Last Name must be at least 2 characters";
                
            } else{
                error.lastName = "";
                
            }
        }  if(e.target.name === "email"){
            setEmail(e.target.value);
            if(email.length < 2){
                error.email = " Email must be at least 2 characters";
                
            } else{
                error.email="";
                
            }
        } if(e.target.name === "password"){
            setPassword(e.target.value)
            if(password.length < 8){
                error.password =  " Password must be at least 8 characters";
                
            } else{
                error.password = "";
                
            }
        } if (e.target.name === "conPassword"){
            setConPassword(e.target.value)
            if(conPassword.length < 8){
               
                if(e.target.value !== password){
                    error.conPassword = " Confirm password must be at least 8 characters" + "\n" + " Confirm password must match";
                
                }else{
                    error.conPassword = " Confirm password must be at least 8 characters";
                }
            } 
            else if(e.target.value !== password){
                error.conPassword =  " Confirm password must match";
                
            } else {
                error.conPassword = "";
                
            }

            setError(error);
        } 
}
return(
    <div>  <form onSubmit={ (e) => e.preventDefault()}>
        <div>
        <label>First Name </label>
        <input type="text" name="firstName" onChange={errorAlert}/>
        {
            error.firstName ?
            <p style={{color:'red'}}>{error.firstName}</p> : ""
        }
        </div>

        <div>
        <label>Last Name </label>
        <input type="text" name="lastName" onChange={errorAlert}/>
        {
            error.lastName ?
            <p style={{color:'red'}}>{error.lastName}</p> : ""
        }
        </div>

        <div>
        <label>Email </label>
        <input type="email" name="email" onChange={errorAlert}/>
        {
            error.email ?
            <p style={{color:'red'}}>{error.email}</p> : ""
        }
        </div>

        <div>
        <label>Password </label>
        <input type="password" name="password" onChange={errorAlert}/>
        {
            error.password ?
            <p style={{color:'red'}}>{error.password}</p> : ""
        }
        </div>

        <div>
        <label>Confirm Password </label>
        <input type="password" name="conPassword" onChange={errorAlert}/>
        {
            error.conPassword ?
            <p style={{color:'red'}}>{error.conPassword}</p> : ""
        }
        </div>
    
</form>

</div>
)
}
export default FormData;