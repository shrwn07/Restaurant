import React from 'react';
import { Link } from 'react-scroll';

const ScrollToElementButton = ({ id }) => {
  return (
    <Link
      activeClass="active"
      to={id}
      spy={true}
      smooth={true}
      offset={-70} // Adjust the offset as needed to position the element in view
      duration={500}
    >
      <button className="md:hidden fixed top-1/2 right-0 bg-[#0ab47f] px-5 py-3 font-semibold text-white rounded-l-xl">Go to Cart</button>
    </Link>
  );
};

export default ScrollToElementButton;