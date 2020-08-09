import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { chunk, every, reduce, includes } from 'lodash'

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
    const flattenedBoardState = reduce(
      grid,
      (prev, row) => [...prev, ...reduce(row, (prev, column) => [...prev, column], [])],
      []
    )
    const rows = chunk(flattenedBoardState, width)

    for (const row of rows) {
      if (every(row, _ => _ === row[0]) && !includes(row, null)) return row[0]
    }
  }

  return (
    <View>
      <GridContext.Provider value={gridState}>
        {winningPlayer ? (
          `${winningPlayer} has won the game!`
        ) : (
          <Grid handleTurn={handleTurn} height={height} width={width} />
        )}
      </GridContext.Provider>
    </View>
  )
}

export default TicTacToe
