import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Container } from 'react-grid-system'
import { forEach, every } from 'lodash'

import Grid, { initializeGrid } from './Grid'
import { GridContext } from './App'

const TicTacToe = () => {
  const [isPlayerXTurn, setIsPlayerXTurn] = useState(true)
  const height = 3
  const width = 3
  const playerX = 'X'
  const playerO = 'O'

  const [gridState, setGridState] = useState(initializeGrid({ height, width }))
  const [winningPlayer, setWinningPlayer] = useState(null)

  function handleTurn({ row, col }) {
    return setGridState(previousState => ({
      ...previousState,
      [row]: { ...previousState[row], [col]: playTurn() }
    }))
  }

  function playTurn() {
    setIsPlayerXTurn(!isPlayerXTurn)

    return isPlayerXTurn ? playerX : playerO
  }

  useEffect(() => {
    const winningPlayer = checkForThreeInARow(gridState)
    if (!winningPlayer) return

    setWinningPlayer(winningPlayer)
  })

  function checkForThreeInARow(grid) {
    let xThreeInARow = false

    forEach(grid, row => {
      const XColumnWin = every(row, _ => _ === playerX)
      if (XColumnWin) xThreeInARow = true
    })

    if (xThreeInARow) return playerX
  }

  return (
    <View>
      <Container>
        <GridContext.Provider value={gridState}>
          {winningPlayer ? (
            `${winningPlayer} has won the game!`
          ) : (
            <Grid handleTurn={handleTurn} height={height} width={width} />
          )}
        </GridContext.Provider>
      </Container>
    </View>
  )
}

export default TicTacToe
