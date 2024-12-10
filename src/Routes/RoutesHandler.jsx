import { Routes, Route } from "react-router-dom";
import { BestSellerBooks } from "../Pages/BestSellerBooks";
import WishlistPage from "../Pages/WishlistPage";

export const RoutesHandler = () => {
  return (
    <Routes>
      <Route path="/" element={<BestSellerBooks />} />
      <Route path="/wishlist" element={<WishlistPage />} />
    </Routes>
  );
};
