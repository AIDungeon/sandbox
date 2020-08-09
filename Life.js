import React, { useState } from 'react'
import { View } from 'react-native'
import { Container } from 'react-grid-system'

import Grid, { initializeGrid } from './Grid'
import { GridContext } from './App'

const Life = () => {
  const height = 8
  const width = 8

  const [gridState, setGridState] = useState(initializeGrid({ height, width }))

  return (
    <View>
      <Container>
        <GridContext.Provider value={gridState}>
          <Grid handleTurn={() => {}} height={height} width={width} />
        </GridContext.Provider>
      </Container>
    </View>
  )
}

export default Life
