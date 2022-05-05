import React from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

function PendingVoterId() {
  return (
    <div className="justify-content-center align-items-center">
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Pending</td>
            <td>
              <Button className='mt-2' variant='outline-success' type='submit'>
                Approve
              </Button>
              <Button className='mt-2' variant='outline-danger' type='submit'>
                Reject
              </Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ram</td>
            <td>Pending</td>
            <td>
              <Button className='mt-2' variant='outline-success' type='submit'>
                Approve
              </Button>
              <Button className='mt-2' variant='outline-danger' type='submit'>
                Reject
              </Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Raju</td>
            <td>Pending</td>
            <td>
              <Button className='mt-2' variant='outline-success' type='submit'>
                Approve
              </Button>
              <Button className='mt-2' variant='outline-danger' type='submit'>
                Reject
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default PendingVoterId