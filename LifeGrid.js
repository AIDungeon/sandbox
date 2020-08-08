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
      grid: []
    }
  }


    
    
  selectCell(lifeGridColumn, lifeGridRow){

      console.log("Selected (x:"+lifeGridColumn+",y:"+lifeGridRow+")");

      // this.grid[colIdx][rowIdx] = gameState.getActivePlayer();
      // this.gameState.setNextPlayerAsActive();  
     
    }

    componentDidMount() {
  
      let testLabel = "(x:"+this.props.columns+",y:"+this.props.rows+")";
      console.log("Component mounted with Selected " + testLabel);
      let replacementGrid = [this.props.columns];

  
      for (let colIdx = 0; colIdx < this.props.columns; colIdx++) {
          replacementGrid[colIdx] = [this.props.rows.length];
          for (let rowIdx = 0; rowIdx < this.props.rows; rowIdx++) {
            replacementGrid[colIdx][rowIdx] = testLabel;
  
          }
      }   
      this.setState({grid: replacementGrid})
    }

    render () {
        return (
        <div className="lifeGrid">
          TEST {this.state.grid[0]}
          { 
          
             this.state.grid.map((rows, colIdx) => {
                (
                  <div class="lifeGridColumn">
                      {rows}
                      {
                        rows.map( (rowVal, rowIdx) => {
                          (
                            <div className="lifeGridRow">
                              TEST
                            <Button
                              onPress={() => {this.selectCell(colIdx, rowIdx)}}
                              title={"Cell: (" + colIdx + ", " + rowIdx + ")"}
                              color="#AAAAAA"
                            />
                            </div>
                          )

                        })
                      } 
                  </div> 
                )
                
            })
          }

        </div>
      )
    }
}

export default LifeGrid
