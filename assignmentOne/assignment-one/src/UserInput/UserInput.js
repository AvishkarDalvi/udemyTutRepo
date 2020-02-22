import React from 'react';

const userInput=(props)=>{
    const style={
        backgroundColor:'white',
        border:'2px solid red',
        padding: '8px'
      };

    return(
        <input style={style} type='text' onChange={props.change} value={props.username}/>
    )
}

export default userInput;