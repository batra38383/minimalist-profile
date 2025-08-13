import React from "react";
import Alert from 'react-bootstrap/Alert';


export default class Events extends React.Component {
    render() {
      return (
        <React.Fragment>
        <Alert key='primary' variant='primary'>
        This will have all the current and past events like birthday, my fun outings etc
        </Alert>
        </React.Fragment> 
  );
      }
}