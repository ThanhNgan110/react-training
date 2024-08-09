// Components
import FooterNavList from '../../components/FooterNavList';
import ListGroup from '../../components/ListGroup';
import Text from '../../components/Text';

// Constants
import { FOOTER_LIST_INFORMATION, LIST_ICON } from '../../constants';

// Css
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
          {LIST_ICON.map((item, index) => (
            <ListGroup.Item key={`${index}`}>
              <span className={`icon icon-sm ${item}`}></span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </footer>
  );
};

export default Footer;
