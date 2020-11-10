import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' className='font-weight-bold'>
            {product.name}
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating value={product.rating} reviews={product.numReviews} />
          <Card.Text as='h5'>${product.price}</Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
