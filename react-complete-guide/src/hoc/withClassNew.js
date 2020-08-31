import React from 'react';
const withClassNew=(Wrapper,className)=>{
return props=>(
    <div className={className}>
    <Wrapper {...props}/>
    </div>
);
};
export default withClassNew;