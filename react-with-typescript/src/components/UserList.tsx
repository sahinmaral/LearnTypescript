import React from "react";
import { Table } from "react-bootstrap";
import User from "../models/User";

// Props - Method 1 for less variables
//function UserList({ users }: { users: User[] }) {

interface IContainer {
  users: User[];
  header: string;
}

const UserList: React.FC<IContainer> = function ({ users, header }) {
  return (
    <Table striped bordered hover style={{width:"50%"}}>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          return (
            <tr key={index}>
              <td>{user.getFirstName}</td>
              <td>{user.getLastName}</td>
              <td>{user.getAge}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default UserList;
