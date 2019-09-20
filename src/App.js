// ./src/App.js

import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { Routes } from './routes'

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>To Do List</h1>
            {/* Move all the routes into a switch*/}
            <Routes/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
