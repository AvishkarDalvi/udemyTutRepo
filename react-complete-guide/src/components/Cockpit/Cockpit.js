import React ,{useEffect,useRef,useContext} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context'; 
const cockpit = props => {
    const toggleBtnRef=useRef(null);
    const authContext=useContext(AuthContext);
    console.log(authContext.authenticated);
    useEffect(()=>{
        console.log('[Cockpit.js] useEffect');
        toggleBtnRef.current.click();
        // setTimeout(()=>alert('Saved data to the cloud!'),1000);
        return ()=>{
            console.log('[Cockpit.js] cleanup work in useEffect')
        }
    },[]);
    useEffect(()=>{
        console.log('[Cockpit.js] 2nd useEffect');
        return ()=>{
            console.log('[Cockpit.js] cleanup work in 2nd useEffect')
        }
    })
    const assignedClasses = [];
    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength < 2) {
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
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>Toggle Persons</button>
                {/* <AuthContext.Consumer>
                {context=> <button onClick={context.login}>Log in</button>}
                </AuthContext.Consumer> */}
                { <button onClick={authContext.login}>Log in</button>}
        </div>
    );
};


export default React.memo(cockpit);