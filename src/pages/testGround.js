import React from "react";
import Alert from 'react-bootstrap/Alert';
import PersonList from '../components/PersonList.js';
//import CallKV from '../functions/eventsData.js';

export default class TestGround extends React.Component {
    render() {
        const environment = process.env.REACT_APP_ENV;
      return (
        <React.Fragment>
        <Alert key='primary' variant='primary'>
        This is {environment}
        </Alert>

        <PersonList/>
        
        </React.Fragment> 
  );
      }
      
}