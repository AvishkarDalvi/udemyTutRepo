import React,{Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClassNew from '../../../hoc/withClassNew';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context'; 
class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef=React.createRef();
    }
    static contextType=AuthContext;
    componentDidMount(){
// this.inputElement.focus();

this.inputElementRef.current.focus(); 
console.log(this.context.authenticated);
    }
    render(){
        console.log('[Person.js] rendering...');
        return (
            
            <Aux className={classes.Person} >
            {/* <AuthContext.Consumer>
                {(context)=>context.authenticated?<p>Authenticated</p>:<p>Please log in.</p>}
                </AuthContext.Consumer> */}
                {this.context.authenticated?<p>Authenticated</p>:<p>Please log in.</p>}
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type='text' 
                // ref={(inputEl)=>{this.inputElement=inputEl}} 
                ref={this.inputElementRef}
                onChange={this.props.changed} 
                value={this.props.name}/>
    
    
            </Aux>
            
        )
    }
   
};
Person.propTypes = {
    click:PropTypes.func,
    name : PropTypes.string,
    age:PropTypes.number,
    changed:PropTypes.func
};

export default withClassNew(Person,classes.Person);