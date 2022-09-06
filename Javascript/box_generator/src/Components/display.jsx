import react, { useState } from 'react';
    
    
const Display = (props) => {
    return (
        <>
            <h1>Current Color</h1>
            {props.color}
        </>
    );
};
    
export default Display;

