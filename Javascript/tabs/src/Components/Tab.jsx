import React, {useState} from "react";

const Tab = (props) => {
const [currentTab, setCurrentTab] = useState(0);
const [tabContent, setTabContent] = useState([]);
const [display, setDisplay] = useState("");
const handleChange =(e) => {
    e.preventDefault();
    const arr = [...tabContent];
    arr[currentTab] = e.target.value;
    setTabContent(arr);
    
}

    return (
        <>
        <button value={"Tab 1 content"}>Tab1</button>
        <textarea name="content"  cols="30" rows="10" onChange={handleChange}>{display}</textarea>
        </>
    )
}
export default Tab;