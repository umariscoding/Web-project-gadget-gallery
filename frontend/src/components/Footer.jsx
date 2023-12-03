import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light">
      <Container>
        <Row>
          <Col md={4} className='py-4'>
            <h5>Address</h5>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Street, City, Country
            </p>
          </Col>
          <Col md={4} className='py-4'>
            <h5>Contact Us</h5>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> example@gmail.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> +1234567890
            </p>
          </Col>
          <Col md={4} className='text-center py-4'>
            <h5>Gadget Galaxy</h5>
            <p>&copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
