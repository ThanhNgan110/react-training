import FooterNavList from '../../components/FooterNavList';
import ListGroup from '../../components/ListGroup';
import Text from '../../components/Text';

import { FOOTER_LIST_INFORMATION } from '../../constants/category';

import './index.css';

const Footer = () => {
  return (
    <footer className="d-flex flex-column footer">
      <div className="d-flex flex-row justify-content-between">
        <FooterNavList
          title="Information"
          items={FOOTER_LIST_INFORMATION}
        />
        <FooterNavList
          title="Service"
          items={FOOTER_LIST_INFORMATION}
        />
        <FooterNavList
          title="My Account"
          items={FOOTER_LIST_INFORMATION}
        />
        <FooterNavList
          title="Our Offers"
          items={FOOTER_LIST_INFORMATION}
        />
      </div>
      <div className="d-flex flex-row justify-content-between">
        <Text
          className="fs-5 fw-normal text-gray "
          as="p"
        >
          © 2018 Ecommerce theme by www.bisenbaev.com
        </Text>
        <ListGroup className="gap-30">
          <ListGroup.Item>
            <span className="icon icon-sm icon-card-master"></span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="icon icon-sm icon-card-paypal"></span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="icon icon-sm icon-card-shape "></span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="icon  icon-sm icon-card-union "></span>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </footer>
  );
};

export default Footer;
