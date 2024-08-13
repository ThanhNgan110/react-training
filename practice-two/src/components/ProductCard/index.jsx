import { useNavigate } from 'react-router-dom';

// Common
import { formatPrice } from '../../utils/common';

// Components
import Text from '../Text';
import Image from '../Image';
import CardHeader from '../CardHeader';
import Button from '../Button';

// Css
import './index.css';

const ProductCard = ({ product, onSubmit }) => {
  const navigate = useNavigate();
  const { id, name, images, averageRating, reviewsCount, price, description } =
    product;

  const handleClick = e => {
    e.preventDefault();
    e.stopImmediatePropagation();
    navigate(`/products/${id}`);
  };

  return (
    <Button
      type="button"
      onClick={handleClick}
    >
      <article className="d-flex divider">
        <div className="box-image">
          <Image
            src={images[0] ?? ''}
            alt={`product ${name}`}
          />

          <span className="badge"></span>
        </div>
        <div className="d-flex flex-column product-content">
          <CardHeader
            id={id}
            name={name}
            averageRating={averageRating}
            reviewsCount={reviewsCount}
            onSubmit={onSubmit}
          />

          <div className="d-flex align-items-center gap-10">
            <Text
              as="p"
              className="fs-3 text-info fw-bold"
            >
              {price ? formatPrice(price) : ''}
            </Text>
            <div className="d-flex group">
              <Text
                as="p"
                className="fs-5 fw-normal text-decoration-line-through text-line-through"
              >
                $534,33
              </Text>
              <Text
                as="p"
                className="fs-5 fw-bold text-pink"
              >
                24% Off
              </Text>
            </div>
          </div>
          <Text
            className="line-height-sm "
            as="p"
            variant="secondary"
            ellipsis
          >
            {description}
          </Text>
        </div>
      </article>
    </Button>
  );
};

export default ProductCard;
