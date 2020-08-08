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
      cellWidth: 240
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
        <div className="lifeGrid" style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
          { 
             this.state.grid.map((rows, colIdx) => 
                
                  <div key={colIdx} className="lifeGridColumn " style={{width: this.state.cellWidth + "px", flex: 1, flexDirection: 'row'}}>
                      {
                        rows.map( (rowVal, rowIdx) => 
                          
                            <div  key={rowIdx} className="lifeGridRow" style={{width: this.state.cellWidth + "px", flex: 1}}>
                            <Button
                              onPress={() => {this.selectCell(colIdx, rowIdx)}}
                              title={"Cell: (" + colIdx + ", " + rowIdx + ")"}
                              color="#AAAAAA"
                              style={{width: this.state.cellWidth + "px", height: this.state.cellWidth + "px"}}
                            />
                            </div>
                          

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
