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
  const [isPlayerXTurn, setIsPlayerXTurn] = useState(true)

  const cellStyle = {
    backgroundColor: '#275DAD',
    width: 100,
    height: 100
  }

  const handleTurn = ({row, col }) => setColumnState(previousState => {
    const state = {
      ...previousState,
      [row]: { ...previousState.One, [col]:  isPlayerXTurn ? 'X' : '0' }
    }

    setIsPlayerXTurn(!isPlayerXTurn)

    return state
  })

    return (
      <View>
        <Container>
        <Row>
          <Col>
            <TouchableOpacity style={cellStyle} onPress={() => handleTurn({ row: 'One', col: 'col1' })}>
              <Text>{columnState['One'].col1}</Text>
            </TouchableOpacity>
          </Col>
          <Col>
            <TouchableOpacity style={cellStyle} onPress={() => handleTurn({ row: 'One', col: 'col2' })}>
              <Text>{columnState['One'].col2}</Text>
            </TouchableOpacity>
          </Col>
          <Col>
            <TouchableOpacity style={cellStyle} onPress={() => handleTurn({ row: 'One', col: 'col3' })}>
              <Text>{columnState['One'].col3}</Text>
            </TouchableOpacity>
          </Col>
        </Row>
        <Row>
          <Col>
          {columnState['Two'].col1}
          </Col>
          <Col>
          {columnState['Two'].col2}
          </Col>
          <Col>
          {columnState['Two'].col3}
          </Col>
        </Row>
        <Row>
          <Col>
          {columnState['Three'].col1}
          </Col>
          <Col>
          {columnState['Three'].col2}
          </Col>
          <Col>
          {columnState['Three'].col3}
          </Col>
        </Row>
        </Container>
      </View>
    )
}

export default TicTacToe

