import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import CustomerTestimonials from '../components/CustomerTestimonials';
import ImageWithText from '../components/ImageWithText';
// import GoogleMap from '../components/GoogleMap';
import MapComponent from '../components/GoogleMap';




const testimonialsData = [
  {
    message: "I absolutely love these products! They have completely changed my shopping experience.",
    author: "Jane Doe"
  },
  {
    message: "Fantastic customer service and incredibly fast delivery. Highly recommend!",
    author: "John Smith"
  },
  {
    message: "The quality of the products exceeded my expectations. I'll definitely be back for more!",
    author: "Emily Johnson"
  }
];

const imageWithTextData = {
  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  text: "Seasonal Sale - Up to 50% Off!"
};


const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  
  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='mb-4'>
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          <h1>Latest Products</h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />

        </>
      )}
        <CustomerTestimonials testimonials={testimonialsData} />
        {/* <LimitedTimeOffers products={limitedTimeOffersData} /> */}
        <ImageWithText image={imageWithTextData.image} text={imageWithTextData.text} />
        <MapComponent/>
    </>
  );
};

export default HomeScreen;
