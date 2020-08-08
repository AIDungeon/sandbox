import React, { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Row, Col } from 'react-grid-system'
import { times } from 'lodash'

const cellStyle = {
  backgroundColor: '#275DAD',
  width: 100,
  height: 100,
  border: '1px solid black',
  marginBottom: 16
}

const cellValueStyle = {
  fontSize: 64,
  fontFamily: 'cursive',
  alignSelf: 'center'
}

const Grid = ({ height, width, setCellValue }) => {
  const initialGridState = Array(height)
    .fill()
    .reduce(
      (prev, _, rowIndex) => ({
        ...prev,
        [rowIndex + 1]: Array(width)
          .fill()
          .reduce(
            (prev, _, colIndex) => ({
              ...prev,
              [`col${colIndex + 1}`]: null
            }),
            {}
          )
      }),
      {}
    )

  const [gridState, setGridState] = useState(initialGridState)

  const handleTurn = ({ row, col }) =>
    setGridState(previousState => {
      return {
        ...previousState,
        [row]: { ...previousState[row], [col]: setCellValue() }
      }
    })

  return (
    <>
      {times(height, rowIndex => (
        <Row key={rowIndex}>
          {times(width, colIndex => (
            <Col>
              <TouchableOpacity
                style={cellStyle}
                onPress={() => handleTurn({ row: rowIndex + 1, col: `col${colIndex + 1}` })}>
                <Text style={cellValueStyle}>{gridState[rowIndex + 1][`col${colIndex + 1}`]}</Text>
              </TouchableOpacity>
            </Col>
          ))}
        </Row>
      ))}
    </>
  )
}

export default Grid
