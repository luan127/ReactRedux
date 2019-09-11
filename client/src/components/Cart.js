import React from 'react'
import {Table} from 'reactstrap'
export default function Cart({cart}) {
  return (
    <div>
      <h1>List Products In The Cart</h1>
      <Table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>ID</th>
            <th>Prices</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((product, index)=><tr key={index}>
              <td>{index}</td>
              <td>{product.name}</td>
              <td>{product.id}</td>
              <td>{product.price}</td>
            </tr>)
          }
        </tbody>
      </Table>
    </div>
  )
}