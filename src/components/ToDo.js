// ./src/components/ToDo.js

import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

const ToDo = ({ title }) => <ListGroup.Item>{title}</ListGroup.Item>;

ToDo.propTypes = {
  title: PropTypes.string.isRequired
};

export default ToDo;
