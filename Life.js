import React, { useState } from 'react'
import { View, Button } from 'react-native'

import Grid, { initializeGrid } from './Grid'
import { GridContext } from './App'

const Life = () => {
  const height = 10
  const width = 10

  const [gridState, setGridState] = useState(initializeGrid({ height, width }))

  function handleTurn({ row, col }) {
    return setGridState(previousState => ({
      ...previousState,
      [row]: { ...previousState[row], [col]: '🧬' }
    }))
  }

  function clearBoard() {
    setGridState(initializeGrid({ height, width }))
  }

  return (
    <View>
      <GridContext.Provider value={gridState}>
        <Grid handleTurn={handleTurn} height={height} width={width} />
        <Button onPress={clearBoard} title="Start over" />
      </GridContext.Provider>
    </View>
  )
}

export default Life
