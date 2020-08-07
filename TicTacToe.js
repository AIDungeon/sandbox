import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Container, Row, Col } from 'react-grid-system';

const TicTacToe = () => {
  const emptyCell = ' '
  const initialGrid = {
    One: { col1: emptyCell, col2: emptyCell, col3: emptyCell },
    Two: { col1: emptyCell, col2: emptyCell, col3: emptyCell },
    Three: { col1: emptyCell, col2: emptyCell, col3: emptyCell }
  }
  const [columnState, setColumnState] = useState(initialGrid)

  const cellStyle = { backgroundColor: 'blue', width: 100, height: 100 }

  const handleTurn = () => setColumnState(previousState => ({
    ...previousState,
    One: { ...previousState.One, col1:'X' }
  }))

    return (
      <View>
        <Container>
        <Row>
          <Col sm={4}>
              <TouchableOpacity style={cellStyle}
                onPress={handleTurn}>
                  <Text>{columnState['One'].col1}</Text>
              </TouchableOpacity>
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

