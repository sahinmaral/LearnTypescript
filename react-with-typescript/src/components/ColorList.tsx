import React, { useState } from "react";
import { Table } from "react-bootstrap";

interface IContainer {
  colors: string[];
}

const ColorList: React.FC<IContainer> = function ({ colors }) {
  return (
    <Table striped bordered hover style={{ width: "50%" }}>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {colors.map((color, index) => {
          return (
            <tr key={index}>
              <td>{color}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ColorList;
