import React, {useState, useEffect} from 'react'

import ProductContainer from '../containers/ProductContainer'

import {Row} from 'reactstrap'

export default function ListProducts() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('http://localhost:3456/products')
    .then(res=> res.json())
    .then(result=> setProducts(result))
    .catch(err=>console.log(err))
  }, []);
  return (
    <div>
      <h3 className="text-primary text-center">List products</h3>
      <Row>
        {
          products.map((product)=><ProductContainer product={product} key={product.id}/>)
        }
      </Row>
    </div>
  )  
}