import React, { useState } from 'react';
import { Text, View } from 'react-native';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

const TicTacToe = () => {
  const classes = useStyles();  
  return (
      <View>
        <Text>Click "Player X" or "Player O" to choose your letter, then click a grid cell to play tic-tac-toe! For more info about how to play, check out the bottom of this page.</Text>
    //TODO: Add a div with two buttons for players labeled "Player X" and "Player O"
    //TODO: Create a player variable and a method to set it based on clicking "Player X" or "Player O" buttons
    <div className={classes.root}>
      <Grid container spacing={0}>//TODO: Make each grid cell a button with a label of the value variable (whitespace, X, or O) and hooks to a "place letter" method
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=3</Paper>//TODO: replace this and all other grid cell values with variables A1-C3
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
      <Text>Tic tac toe is a fun, simple puzzle game played by two players. 
        The game is played on an empty 3x3 grid. 
        Each player takes turns to place their marker (either an X or an O) in an empty cell on the board. 
        The first player to get three of their markers in a straight line in any direction wins. 
        If all cells on the grid are filled and no player has a straight line of three markers then the game is a draw. 
        For more information on the game you can <Link to="https://en.wikipedia.org/wiki/Tic-tac-toe"> read more on Wikipedia.</Link> </Text>
    </div>
   //TODO: Add another div with a button labeled "Start New Game" and set the hooks to the method for clearing the board
   //TODO: Javascript method that iterates over the grid and replaces all values with a whitespace character
   //TODO: Place letter method that takes the current cell label variable and sets the value of the variable to the current playerID variable when called
   //TODO: Add a check to the end of the place letter method for a draw: if A1-C3 are all equal to X or O, it's a draw 
    //(NB: Not checking for blanks because equivalency on whitespace characters in JS can cause problems) 
  //TODO: Add a check to the end of the place letter method for horizontal win conditions (if (A1=A2 && A2=A3) || (B1=B2 && B2=B3) etc)
  //TODO: Add a check to the end of the place letter method for vertical win conditions (if (A1=B1 && B1=C1)|| etc)
  //TODO: Make a single "check for win conditions" method that calls both the horizontal and vertical checks
  //TODO: Add a diagonal win condition check to the "check for win conditions" method (if (A1=B2 && B2=C3) OR (C1=B2 && B2=A3))
 //TODO: Add a state check after the "check draw" and "check win" methods to see if the game is over, and show a message if it is
      </View>)
}

export default TicTacToe