import Breadcrumb from '../Breadcrumb';

import './index.css';

const TabBar = ({ items }) => {
  return (
    <section className="tab-bar">
      <Breadcrumb items={items} />
    </section>
  );
};

export default TabBar;
