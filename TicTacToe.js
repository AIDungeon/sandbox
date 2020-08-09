import React, { useState } from 'react'
import { View } from 'react-native'
import { Container } from 'react-grid-system'

import { initializeGrid } from './Grid'

import Grid from './Grid'
import { GridContext } from './App'

const TicTacToe = () => {
  const [isPlayerXTurn, setIsPlayerXTurn] = useState(true)
  const height = 3
  const width = 3
  const [gridState, setGridState] = useState(initializeGrid({ height, width }))

  function handleTurn({ row, col }) {
    return setGridState(previousState => ({
      ...previousState,
      [row]: { ...previousState[row], [col]: playTurn() }
    }))
  }

  function playTurn() {
    const previsPlayerXTurn = isPlayerXTurn
    setIsPlayerXTurn(!isPlayerXTurn)

    return previsPlayerXTurn ? 'X' : 'O'
  }

  return (
    <View>
      <Container>
        <GridContext.Provider value={gridState}>
          <Grid handleTurn={handleTurn} height={height} width={width} />
        </GridContext.Provider>
      </Container>
    </View>
  )
}

export default TicTacToe
