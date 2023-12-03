import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import Message from './Message';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';
import '../assets/styles/ProductCarousel.css';

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? null : error ? (
    <Message variant='danger'>{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel pause='hover' className='custom-carousel'>
      {products.map((product) => (
        <Carousel.Item key={product._id} className='carousel-item'>
          <Link to={`/product/${product._id}`} className='carousel-link'>
            <div className='carousel-image-container'>
              <Image src={product.image} alt={product.name} fluid className='carousel-image' />
              <div className='carousel-caption'>
                <h2 className='text-white'>
                  {product.name} (${product.price})
                </h2>
              </div>
            </div>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;