import React, { useReducer, useState } from 'react';
 
const initialState = {
      firstName: {
          value: '',
          error: null
      },
      lastName: {
          value: '',
          error: null
      },
      email: {
          value: '',
          error: null
      }
  };
  
function reducer(state, action) {
    switch (action.type){
  case "firstName": 
          if(action.type.value < 2){
            return {
              ...state,
              [action.type.error] : "First Name have to be at least 2 charcters"
            }
            
          };
  case "lastName":
          if(action.type.value < 2){
            return {
              ...state,
              [action.type.error] : "Last Name have to be at least 2 charcters"
            }
           
          };
  case "email":
    if(action.type.value.length < 2){
      return {
        ...state,
        [action.type.error] :"email have to be at least 2 charcters"
      }
    };

}
}
 
export default function useReduceFunc() {
    const [state, dispatch] = useReducer(reducer, initialState);
    // const[firstName, setFirstName] = useState('');
    // const[lastName, setLastName] = useState('');
    // const[email, setEmail] = useState('');

    
    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }
 
    return (
        <div>
            
          <form >
            <label>First Name</label>
            <input name="firstName" onChange={handleChange}/>

            <label>Last Name</label>
            <input name="lastName" />

            <label>Email</label>
            <input name="email" />
            <button type='submit'>submit</button>
            
          </form>
           
     
        <p>{state.firstName.error}</p>
      
        </div>
    );
}