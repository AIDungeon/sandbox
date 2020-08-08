import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Container, Row, Col } from 'react-grid-system';
import { times } from 'lodash'

const TicTacToe = () => {
  const gridHeight = 3
  const gridWith = 3
  const initialGrid = {
    1: { col1: null, col2: null, col3: null },
    2: { col1: null, col2: null, col3: null },
    3: { col1: null, col2: null, col3: null }
  }
  const [columnState, setColumnState] = useState(initialGrid)
  const [isPlayerXTurn, setIsPlayerXTurn] = useState(true)

  const cellStyle = {
    backgroundColor: '#275DAD',
    width: 100,
    height: 100,
    border: '1px solid black',
    marginBottom: 16
  }

  const handleTurn = ({row, col }) => setColumnState(previousState => {
    const state = {
      ...previousState,
      [row]: { ...previousState[row], [col]:  isPlayerXTurn ? 'X' : '0' }
    }

    setIsPlayerXTurn(!isPlayerXTurn)

    return state
  })

  return (
    <View>
      <Container>
        {times(gridHeight, (rowIndex) =>
          <Row key={rowIndex}>
            {times(gridWith, (colIndex) =>
              <Col>
                <TouchableOpacity style={cellStyle} onPress={() => handleTurn({ row: rowIndex + 1, col: `col${colIndex + 1}` })}>
                  <Text>{columnState[rowIndex + 1][`col${colIndex + 1}`]}</Text>
                </TouchableOpacity>
              </Col>
            )}
          </Row>
        )}
      </Container>
    </View>
  )
}

export default TicTacToe
