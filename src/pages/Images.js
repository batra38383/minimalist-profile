import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Saheb2 from "./saheb2.jpeg";
import Saheb3 from "./saheb3.jpeg";
import Saheb4 from "./saheb4.jpeg";
import Alert from 'react-bootstrap/Alert';





export default class Images extends React.Component {
    render() {
      return (
        <React.Fragment>
        <Alert key='primary' variant='primary'>
        Checkout some of my portraits!!
        </Alert>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Saheb4}
          alt="I have an attitude"
        />
        <Carousel.Caption>
          <h3>I dont smile</h3>
          <p>Don't I look handsome?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Saheb2}
          alt="I am naughty"
        />

        <Carousel.Caption>
          <h3>I am naughty too</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Saheb3}
          alt="Well I can pose"
        />

        <Carousel.Caption>
          <h3>I can pose</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </React.Fragment>
  );
      }
}