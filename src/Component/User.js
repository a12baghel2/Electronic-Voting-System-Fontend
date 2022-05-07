import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function User() {
  const user = {
    name: "Abhimanyu",
    gender: "male",
    dob: "22/06/2001",
    address: "Faridabad",
    phone: "9650140730",
    usernme: "a12baghel2@gmail.com",
  };

  const handleClick = () => {
    console.log(user);
  };

  return (
    <Container>
      <Row style={{ padding: "20px" }}>
        <Button variant='outline-primary' type='submit' onClick={handleClick}>
          View Profile
        </Button>
      </Row>
      <Row style={{ padding: "20px" }}>
        <Button variant='outline-primary'>View Result</Button>
      </Row>
      <Row style={{ padding: "20px" }}>
        <Button variant='outline-primary'>View/Request Voter ID</Button>
      </Row>
      <Row style={{ padding: "20px" }}>
        <Button variant='outline-primary'>Cast Vote</Button>
      </Row>
      <Row style={{ padding: "20px" }}>
        <Button variant='outline-primary'>Change Password</Button>
      </Row>
    </Container>
  );
}

export default User;
