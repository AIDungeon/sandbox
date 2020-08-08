import React from 'react';
import { Text, View } from 'react-native';


const Player = function(id, color) {

}

const players = [

];


const LifeGrid = (gameState) => {

 

    let grid = [];
    
    
    let selectCell = (lifeGridColumn, lifeGridRow) => {

      console.log("Selected (x:"+lifeGridColumn+",y:"+lifeGridRow+")");

      grid[colIdx][rowIdx] = gameState.getActivePlayer();
      gameState.setNextPlayerAsActive();  
     
    }

    let componentDidMount = () => {
      grid = [props.columns];

  
      for (let colIdx = 0; colIdx < props.columns; colIdx++) {
          grid[colIdx] = [props.rows];
          for (let rowIdx = 0; rowIdx < props.rows; rowIdx++) {
            grid[colIdx][rowIdx] = null;
  
          }
      }   
    }

    return (
        <div class="lifeGrid">
          {
          grid.map(colIdx => {
              (
                <div class="lifeGridColumn">
                    {
                      grid[colIdx].map( rowIdx => {
                        (
                          <div class="lifeGridRow">
                          <Button
                            onPress={this.selectCell(lifeGridColumn, lifeGridRow)}
                            title={"Cell: (" + lifeGridColumn + ", " + lifeGridRow + ")"}
                            color="#AAAAAA"
                          />
                          </div>
                        )

                      })
                    }
                 </div> 
              )
              
          })}
        </div>
    )
}

export default LifeGrid
