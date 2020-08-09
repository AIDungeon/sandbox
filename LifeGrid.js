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
            let isAlive =  Math.random() < 0.5;//1 is alive, 0 is dead.
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
            // let livingNeighborsCount = ;
            // let deadNeighborsCount = ; // todo: actual rules
            replacementGrid[colIdx][rowIdx] = !isAliveCurrently;
            
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
                          
                            <View  key={rowIdx} className="lifeGridRow" style={{width: this.state.cellWidth + "px",height: this.state.cellWidth + "px"}}>
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
