import React from 'react'

const Button= (props) =>{
    return (
        <button 
        className="btn btn-secondary mb-2 mt-2 ml-2"
        onClick={props.onClick}
        >
        {props.text}</button>
    );
    
}

export default Button;