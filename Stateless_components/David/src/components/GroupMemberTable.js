import React from 'react'
import Table from "react-bootstrap/Table";

const GroupMemberTable = ()=>{


    return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>mark.otto@random.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>jacob.thornton@random.com</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Arthur</td>
              <td>Dolittle</td>
              <td>artie.dolittle@random.com</td>
            </tr>
          </tbody>
        </Table>
      );
}

export default GroupMemberTable