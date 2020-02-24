import React from 'react';

const validationComponent = (props) => {
    let message=null;
    if (props.length < 5){
        message='Text too short.';
    }else{
        message='Text long enough.';
    }
        return (
            <div>
                <p>{message}</p>
            </div>
        )
}

export default validationComponent;