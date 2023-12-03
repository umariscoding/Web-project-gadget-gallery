import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import '../assets/styles/rating.css';

const Rating = ({ value, text, color }) => {
  const starColor = color ? color : '#000'; // Default to black if no color is provided

  return (
    <div className='rating'>
      {[1, 2, 3, 4, 5].map((index) => (
        <span key={index}>
          {value >= index ? (
            <FaStar style={{ color: starColor }} />
          ) : value >= index - 0.5 ? (
            <FaStarHalfAlt style={{ color: starColor }} />
          ) : (
            <FaRegStar style={{ color: starColor }} />
          )}
        </span>
      ))}
      <span className='rating-text'>{text}</span>
    </div>
  );
};

export default Rating;
