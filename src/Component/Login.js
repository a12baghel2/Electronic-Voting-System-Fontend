import React, { useState, useEffect, useContext, useRef } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthProvider";
import axios from "../Api/axios";

const LOGIN_URL = "/authenticate";

function parseJwt(token) {
  // Split the token and taken the second
  const base64Url = token.split(".")[1];
  return JSON.parse(window.atob(base64Url));
}




export default function Login(props) {
  const userRef = useRef();
  const errRef = useRef();
  const { setAuth } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(username, password);
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.token;
      const data = parseJwt(accessToken);
      console.log(data.isUser);
      //setAuth({ username, password, roles, accessToken });
      setUsername("");
      setPassword("");
      if(data.isUser){
        navigate('/user')
      }else{
        navigate("/admin");
      }
      
    } catch (err) {
      console.log(err);
    }
  };

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
