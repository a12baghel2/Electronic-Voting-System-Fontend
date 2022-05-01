import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

function Admin() {
  return (
      <Container>
        <Row>
          <Button className='mt-2 md' variant='outline-success' type='submit'>
            Add Party Details
          </Button>
        </Row>
        <Row>
          <Button className='mt-2' variant='outline-info' type='submit'>
            Add Candidate Details
          </Button>
        </Row>
        <Row>
          <Button className='mt-2' variant='outline-primary' type='submit'>
            View/Approve Voter Ids
          </Button>
        </Row>
        <Row>
          <Button className='mt-2' variant='outline-danger' type='submit'>
            View/Declare Result
          </Button>
        </Row>
      </Container>
  );
}

export default Admin;
