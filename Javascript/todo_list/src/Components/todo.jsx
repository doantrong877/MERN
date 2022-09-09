import React,{useState} from "react";

const TodoList = (props) =>{
const [list, setList] = useState([]);
const [currentInput, setCurrentInput] = useState("");
const [currentCheckedBox, setCurrentCheckedBox] = useState([]);

const handleSubmit = (e) =>{
    e.preventDefault(); 
    if(e.target.value !== ""){
        setList(prev => { return [...prev, currentInput]});
    }
   
};

const handleCheckBox = (e) => {
    if(e.target.checked){
        setCurrentCheckedBox(prev => {return [...prev, e.target.value]})
    } else if(!e.target.checked){
       setCurrentCheckedBox(currentCheckedBox.filter( item => item !== e.target.value));

    }
}

const handleDelete = (e) => {
    e.preventDefault();
    const arr = [];
    for(let i = 0; i < list.length; i++){
        if(!currentCheckedBox.includes(list[i])){
            arr.push(list[i]);
        }

        
    }
    setList(arr);
    setCurrentCheckedBox([]);
}
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setCurrentInput(e.target.value)} />
                <button type="submit">Add</button>
            </form>

            <form  onSubmit={handleDelete}>
                {list.map((item, id) => 
                <div key={id}>
                <label htmlFor={id}>{item}</label>
                <input type="checkbox" key={id} id={id} name={id} value={item} onChange={handleCheckBox}/>   
                <br/>

                </div>
                            
                )}
                <button type="submit">Delete</button>
            </form>
        </>
    )
}
export default TodoList;