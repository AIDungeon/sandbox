import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Container, Row, Col } from 'react-grid-system';

function takeTurn() {
  return 'X'
}

const TicTacToe = () => {
  const initialGrid = {
    One: { col1: null, col2: null, col3: null },
    Two: { col1: null, col2: null, col3: null },
    Three: { col1: null, col2: null, col3: null }
  }
  const [columnState, setColumnState] = useState(initialGrid)

    return (
      <View>
        <Container>
        <Row>
          <Col sm={4} onClick={takeTurn}>
            {columnState['One'].col1}
          </Col>
          <Col sm={4}>
          {columnState['One'].col2}
          </Col>
          <Col sm={4}>
          {columnState['One'].col3}
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
          {columnState['Two'].col1}
          </Col>
          <Col sm={4}>
          {columnState['Two'].col2}
          </Col>
          <Col sm={4}>
          {columnState['Two'].col3}
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
          {columnState['Three'].col1}
          </Col>
          <Col sm={4}>
          {columnState['Three'].col2}
          </Col>
          <Col sm={4}>
          {columnState['Three'].col3}
          </Col>
        </Row>
        </Container>
      </View>
    )
}

export default TicTacToe

