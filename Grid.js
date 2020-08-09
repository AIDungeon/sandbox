import React, { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Row, Col } from 'react-grid-system'
import { times } from 'lodash'

import { GridContext } from './App'

const cellStyle = {
  backgroundColor: '#275DAD',
  width: 88,
  height: 88,
  border: '1px solid black',
  marginBottom: 16
}

const cellValueStyle = {
  fontSize: 64,
  fontFamily: 'cursive',
  alignSelf: 'center'
}

const Grid = ({ height, width, handleTurn }) => {
  const onGridCellPress = ({ row, col }) => handleTurn({ row, col })

  return (
    <>
      <GridContext.Consumer>
        {gridState =>
          times(height, rowIndex => (
            <Row key={rowIndex}>
              {times(width, colIndex => (
                <Col>
                  <TouchableOpacity
                    style={cellStyle}
                    onPress={() =>
                      onGridCellPress({ row: rowIndex + 1, col: `col${colIndex + 1}` })
                    }>
                    <Text style={cellValueStyle}>
                      {gridState[rowIndex + 1][`col${colIndex + 1}`]}
                    </Text>
                  </TouchableOpacity>
                </Col>
              ))}
            </Row>
          ))
        }
      </GridContext.Consumer>
    </>
  )
}

export function initializeGrid({ height, width }) {
  return Array(height)
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
}

export default Grid
