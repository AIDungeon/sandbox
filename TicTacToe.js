import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Container, Row, Col } from 'react-grid-system';

import Grid from './Grid'

const TicTacToe = () => {
  const [isPlayerXTurn, setIsPlayerXTurn] = useState(true)

  const handleTurn = () => {
    const previsPlayerXTurn = isPlayerXTurn
    setIsPlayerXTurn(!isPlayerXTurn)

    return previsPlayerXTurn ? 'X' : 'O'
  }

  return (
    <View>
      <Container>
        <Grid setCellValue={handleTurn} height={3} width={3} />
      </Container>
    </View>
  )
}

export default TicTacToe
