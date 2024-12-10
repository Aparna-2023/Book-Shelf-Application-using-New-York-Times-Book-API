import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const wishlist = useSelector((state) => state.wishlist);

  return (
    <header>
      <nav>
        {/* Other navigation items */}
        <Link to="/wishlist" className="btn btn-primary">
          Wishlist ({wishlist.length})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
