import Text from '../Text';
import Image from '../Image';
import StarRating from '../StarRating';
import Button from '../Button';

const ProductCard = ({ product }) => {
  return (
      product?.map(item => (
        <article
          className="d-flex"
          key={item.id}
        >
          <Image
            src={item.image[1]}
            alt="product"
          />
          <div>
            <Text
              as="h3"
              variant="primary"
            >
              {item.name}
            </Text>
            <StarRating starFull={item.reviews} />
            <Button variant="link">Submit a review</Button>
            <Text as="p">{item.price}</Text>
            <Text as="p">{item.description}</Text>
          </div>
        </article>
      ))
  );
};

export default ProductCard;
