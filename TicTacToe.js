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
  const xPlayer = 'X'
  const oPlayer = 'O'

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

    return isPlayerXTurn ? xPlayer : oPlayer
  }

  useEffect(() => {
    const winningPlayer = checkForThreeInARow(gridState)
    if (!winningPlayer) return

    setWinningPlayer(winningPlayer)
  })

  function checkForThreeInARow(grid) {
    let xThreeInARow = false
    let oThreeInARow = false

    forEach(grid, row => {
      const xColumnWin = every(row, _ => _ === xPlayer)
      const oColumnWin = every(row, _ => _ === oPlayer)
      if (xColumnWin) xThreeInARow = true
      if (oColumnWin) oThreeInARow = true
    })

    if (xThreeInARow) return xPlayer
    if (oThreeInARow) return oPlayer
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
