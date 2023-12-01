import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Card } from 'reactstrap'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Card>
        <Table hover border='1px'>
          <thead>
            <th>
              Name
            </th>
            <th>
              Description
            </th>
            <th>
              Link
            </th>
          </thead>
          <tbody>
            <tr>
              <td>
                ChangeDateFormate
              </td>
              <td>
                Check different dates format changed in other formats
              </td>
              <td>
                <Link to='/ChangeDateFormat'>Link</Link>
              </td>
            </tr>
            <tr>
              <td>
                CRUD IN Mongo DB Nest JS
              </td>
              <td>
                Create, Delete, Update, and Post Using Nest And MongoDB
              </td>
              <td>
                <Link to='/Crudinmongo'>Link</Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>


    </div>
  )
}
