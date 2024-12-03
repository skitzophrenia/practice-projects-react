import { useContext, useEffect, useState } from "react";
import { CartContext } from "../store/shopping-cart-context.jsx";
import { submitOrder } from "../https.js";
export default function OrderSuccess({onClose}) {
  const { order, clearState } = useContext(CartContext);
  useEffect(() => {
    async function sendOrder() {
      try {
        const message = await submitOrder({ ...order });
        setOrderMessage(message);
      } catch (error) {}
    }
    sendOrder();
  }, [order]);

  function handleCloseSuccess(){
    clearState();
    onClose();
  }

  return (
    <div className="cart">
      <h2>Success</h2>
      <p>Your order was submitted successfully</p>
      <p>We will get back to you with more details via email within the next few minutes</p>
      <p className="modal-actions">
          <button onClick={handleCloseSuccess} className="button">
            Okay
          </button>
        </p>
    </div>
  );
}
