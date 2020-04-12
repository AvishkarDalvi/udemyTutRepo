import React ,{useEffect} from 'react';
import classes from './Cockpit.css'
const cockpit = props => {
    useEffect(()=>{
        console.log('[Cockpit.js] useEffect');
        setTimeout(()=>alert('Saved data to the cloud!'),1000);
    },[props.persons]);
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