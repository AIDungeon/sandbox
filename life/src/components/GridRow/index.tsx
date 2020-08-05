import React from "react";
import "./styles.css";
import Cell from "../Cell";

interface IProps {
  row: boolean[];
}

function GridRow({ row }: IProps) {
  const displayCells = () => {
    return row.map((cell, i) => <Cell key={i} cellState={cell} />);
  };
  return <>{displayCells()}</>;
}

export default GridRow;
