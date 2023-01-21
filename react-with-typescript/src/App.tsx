import "./App.css";
import User from "./models/User";
import UserList from "./components/UserList";
import ColorList from "./components/ColorList";
import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

const users = [
  new User("Sahin", "MARAL", 22),
  new User("Ali", "MARAL", 22),
  new User("Hasan", "MARAL", 22),
];

function App() {
  const [color, setColor] = useState<string>("");
  const [colors, setColors] = useState<string[]>([
    "blue",
    "green",
    "red",
    "black",
  ]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setColor(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent
  ) => {
    event.preventDefault();
    setColors([...colors, color]);
    setColor("");
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <UserList users={users} header={"User List"} />
          <ColorList colors={colors} />
          <Form.Label>Color : {color}</Form.Label>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              onChange={handleChange}
              value={color}
              style={{width:"50%"}}
            />
            <br />
            <Button
              variant="primary"
              type="submit"
              style={{width:"50%", height: "50px" }}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
