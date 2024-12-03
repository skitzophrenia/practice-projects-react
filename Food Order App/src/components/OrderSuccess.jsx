import { useContext, useEffect } from "react";
import { CartContext } from "../store/shopping-cart-context.jsx";
export default function OrderSuccess({ order }) {
  const { order } = useContext(CartContext);

  useEffect(() => {
    async function sendOrder() {
      try {
        await submitOrder({ ...order });
      } catch (error) {}
    }
    sendOrder();
  }, [order]);

  return (
    <div className="cart">
      <h2>Order Success</h2>
    </div>
  );
}
