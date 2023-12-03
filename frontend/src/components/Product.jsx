import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import '../assets/styles/Product.css'; // Import a separate CSS file for styling

const Product = ({ product }) => {
  return (
    <div className="product-card-container">
      <Card className='product-card my-3 rounded'>
        <Link to={`/product/${product._id}`}>
          <div className="product-image-container">
            <Card.Img src={product.image} variant='top' className='product-image' />
          </div>
        </Link>

        <Card.Body>
          <Link to={`/product/${product._id}`} className='product-link'>
            <Card.Title as='div' className='product-title'>
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <div className='product-info'>
            <div className='product-rating'>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </div>

            <Card.Text as='h3' className='product-price'>${product.price}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;