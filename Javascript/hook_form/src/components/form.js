import React, {useState} from "react";

const FormData = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");
return(
    <div>  <form>
        <div>
        <label>First Name </label>
        <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
        </div>

        <div>
        <label>Last Name </label>
        <input type="text" onChange={(e) => setLastName(e.target.value)}/>
        </div>

        <div>
        <label>Email </label>
        <input type="email" onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div>
        <label>Password </label>
        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div>
        <label>Confirm Password </label>
        <input type="password" onChange={(e) => setConPassword(e.target.value)}/>
        </div>
    
</form>

<p>Your Form Data</p>
<p>First Name {firstName}</p>
<p>Last Name {lastName}</p>
<p>Email {email}</p>
<p>Password {password}</p>
<p>Confirm Password {conPassword}</p>


</div>
  
);
};

export default FormData;