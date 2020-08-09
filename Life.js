import React, { useState } from 'react'
import { View } from 'react-native'

import Grid, { initializeGrid } from './Grid'
import { GridContext } from './App'

const Life = () => {
  const height = 10
  const width = 10

  const [gridState, setGridState] = useState(initializeGrid({ height, width }))

  return (
    <View>
      <GridContext.Provider value={gridState}>
        <Grid handleTurn={() => {}} height={height} width={width} />
      </GridContext.Provider>
    </View>
  )
}

export default Life
