import React from 'react';
import './UserOutput.css';

const userOutput=props=>{
    return(
        <div className='UserOutput'>
        <p>{props.username}</p>
        <p>lets get this done</p>
        </div>
    )
}

export default userOutput;