import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    const URL = process.env.REACT_APP_EVENT_URL+'eventsData';
    console.log(URL)
    axios.get(URL)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
        

          <ul>
        {
          this.state.persons.entries.name
            
        }
      </ul>
        
      
    )
  }
}