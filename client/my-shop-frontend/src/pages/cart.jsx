import { CartItemGrid } from "../components/CartItemsGrid/CartItemsGrid";
import { CartSummarySection } from "../components/CartSummarySection/CartSummarySection";
import { Navbar } from "../components/Navbar/Navbar/Navbar";

export const Cart = () => {
  return (
    <>
      <Navbar />
      <CartItemGrid />
      <CartSummarySection />
    </>
  );
};
