import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
// import { Redirect } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props.obj);
    console.log(username, password);
    if (username === props.obj.username && password === props.obj.password) {
      navigate("/admin");
    }
  };

  // const style = {
  //   width: "100%",
  //   paddingLeft: 100,
  //   paddingRight: 200,
  //   paddingTop: 30,
  //   paddingBottom: 30,
  // };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Button variant='outline-success' type='submit'>
          Login
        </Button>
        <p> </p>
        <Link to='/signup'>
          <Button variant='outline-primary' type='submit'>
            SignUp
          </Button>
        </Link>
      </Form>
    </Container>
  );
}
