import React, {useState} from "react";

const RenderForm = (props) => {
    const [currentColor, setCurrentColor] = useState("");
    const [arrColor, setArrColor] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("something");
        var newArr = [...arrColor, currentColor];
        setArrColor(newArr);
        props.updateColor(arrColor);
        

    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Color</label>
            <input type="text" onChange={(e) => setCurrentColor(e.target.value)} />
            <button type="submit">Add</button>
        </form>

       {arrColor.map(a => <div style={{backgroundColor: a,height:100, width:100}}>{a}</div>)}
        </div>
      
    )
}

export default RenderForm;