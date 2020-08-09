import React, { useState } from 'react'
import { View, Button } from 'react-native'

import Grid, { initializeGrid } from './Grid'
import { GridContext } from './App'

const Life = () => {
  const height = 10
  const width = 10

  const [gridState, setGridState] = useState(initializeGrid({ height, width }))
  const [gameHasStarted, setGameStarted] = useState(false)

  function seedBoard({ row, col }) {
    if (gameHasStarted) return

    return setGridState(previousState => ({
      ...previousState,
      [row]: { ...previousState[row], [col]: '🧬' }
    }))
  }

  function clearBoard() {
    setGridState(initializeGrid({ height, width }))
    setGameStarted(false)
  }

  function beginGame() {
    setGameStarted(true)
  }

  return (
    <View>
      <GridContext.Provider value={gridState}>
        <Grid handleTurn={seedBoard} height={height} width={width} />
        <Button onPress={clearBoard} title="Start over" />
        <Button onPress={beginGame} title="Begin game" />
      </GridContext.Provider>
    </View>
  )
}

export default Life
