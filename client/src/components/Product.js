import React from 'react'
import {
  Card, CardImg, CardText, CardBody, CardTitle, Button
} from 'reactstrap'



export default function Product({product, addToCart}) {

  return(
    <Card className='col-md-4 col-sm-6 mb-2' style={{height:"auto"}}>
        <CardImg
        top
        width="300px"
        height="300px"
        src={product.image}
        alt="Photo"></CardImg>
        <CardBody>
          <CardTitle>{product.name}</CardTitle>
          <CardText>Price: {product.price} $</CardText>
          <Button color="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>
        </CardBody>
      </Card>
  )
  
}