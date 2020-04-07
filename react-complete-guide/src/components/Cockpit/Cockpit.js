import React from 'react';
import classes from './Cockpit.css'
const cockpit = props => {
    const assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length < 2) {
        assignedClasses.push(classes.bold);
    }
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }
   
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working.</p>
            {/* one way of binding argument to a method call */}
            <button className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};


export default cockpit;