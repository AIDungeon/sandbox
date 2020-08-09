import React from 'react';
import { Text, View, Button } from 'react-native';


const Player = function(id, color) {

}

const players = [

];


class LifeGrid  extends React.Component {

  constructor(props) {
    super(props)

    

    this.state = {
      grid: [],
      cellWidth: 6
    }
  }


    
    
  selectCell(lifeGridColumn, lifeGridRow){

      console.log("Selected (x:"+lifeGridColumn+",y:"+lifeGridRow+")");

      // this.grid[colIdx][rowIdx] = gameState.getActivePlayer();
      // this.gameState.setNextPlayerAsActive();  
     
    }

    componentDidMount() {

      let columns = this.props.gridSize;
      let rows = this.props.gridSize;
  

    
      let replacementGrid = [columns];

  
      for (let colIdx = 0; colIdx < columns; colIdx++) {
          replacementGrid[colIdx] = [rows];
          for (let rowIdx = 0; rowIdx < rows; rowIdx++) {
            let isAlive =  Math.random() < 0.5 ? 1 : 0;//1 is alive, 0 is dead.
            replacementGrid[colIdx][rowIdx] = isAlive;
            
          }
      }   
      this.setState({grid: replacementGrid})

      setInterval(() => this.evolve(), this.props.evolveIntervalInMilliseconds);//TODO: probably need to validate this to some min...
    }

    evolve() {
      let replacementGrid = [this.state.grid.length];
      for (let colIdx = 0; colIdx < this.state.grid.length; colIdx++) {
          replacementGrid[colIdx] = [this.state.grid[colIdx].length];//making no assumptions here as to whether or not its a square
          for (let rowIdx = 0; rowIdx < this.state.grid[colIdx].length; rowIdx++) {
            let isAliveCurrently =  this.state.grid[colIdx][rowIdx];

            let orthogonalLeft  = colIdx == 0 ? 0:this.state.grid[colIdx-1][rowIdx];
            let orthogonalRight = colIdx == this.state.grid.length - 1 ? 0: this.state.grid[colIdx+1][rowIdx];
            let orthogonalAbove  = rowIdx == 0 ? 0:this.state.grid[colIdx][rowIdx-1];
            let orthogonalBelow = colIdx == this.state.grid[colIdx].length - 1 ? 0:this.state.grid[colIdx][rowIdx+1];


            let livingNeighborsCount = orthogonalLeft + orthogonalRight + orthogonalAbove + orthogonalBelow;
            

            if(isAliveCurrently) {
              // Live Criteria
              // Any live cell with two or three live neighbours lives on to the next generation. 

              // Any live cell with fewer than two live neighbours dies, as if by underpopulation.
              // Any live cell with more than three live neighbours dies, as if by overpopulation.
              replacementGrid[colIdx][rowIdx] = livingNeighborsCount == 2 || livingNeighborsCount == 3 ? 1 : 0;  
            } else {
              //Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
              replacementGrid[colIdx][rowIdx] = livingNeighborsCount == 3? 1 : 0;
            }
            
            
            
          }
      }   
      this.setState({grid: replacementGrid})

    }

    render () {
        return (
        <div className="lifeGrid" style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
          { 
             this.state.grid.map((rows, colIdx) => 
                
                  <div key={colIdx} className="lifeGridColumn " style={{width: this.state.cellWidth + "px", flex: 1, flexDirection: 'row'}}>
                      {
                        rows.map( (rowVal, rowIdx) => 
                          
                            <View  key={rowIdx} style={{width: this.state.cellWidth + "px",height: this.state.cellWidth + "px"}}>
                            <Button
                              onPress={() => {this.selectCell(colIdx, rowIdx)}}
                              color={this.state.grid[colIdx][rowIdx]?"#aec6cf":"#ff6961"}
                              width={this.state.cellWidth}
                              hegiht={this.state.cellWidth}
                              style={{width: this.state.cellWidth + "px", height: this.state.cellWidth + "px", flex: 1}}
                            />
                            </View>
                          

                        )
                      } 
                  </div> 
                
                
            )
          }

        </div>
      )
    }
}

export default LifeGrid
