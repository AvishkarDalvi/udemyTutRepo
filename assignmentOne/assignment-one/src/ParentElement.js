import React, { Component } from 'react';
import ChildElement from './ChildElement';
const parentElement=props=>props.names.map(name =>  <ChildElement name={name}/>);
  
 
    


export default parentElement;

