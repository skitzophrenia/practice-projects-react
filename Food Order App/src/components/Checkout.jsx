import { useContext } from "react";
import Input from "./ui/Input.jsx";
import { CartContext } from "../store/shopping-cart-context.jsx";

export default function Checkout({ onClose, onOrder }) {
  const { items, addOrder } = useContext(CartContext);

  function handleAddOrder(event) {
    addOrder(event, items);
    onOrder();
  }

  return (
    <div className="cart">
      <h2>Checkout</h2>
      <form onSubmit={handleAddOrder}>
        <Input label="Full Name" type="text" name="name" required />
        <Input label="E-Mail Address" type="email" name="email" required />
        <Input label="Street" type="text" name="street" required />
        <div className="control-row">
          <Input label="Postal Code" type="text" name="postal-code" required />
          <Input label="City" type="text" name="city" required />
        </div>
        <p className="modal-actions">
          <button onClick={onClose} className="text-button">
            close
          </button>
          <button type="submit" className="button">
            Submit Order
          </button>
        </p>
      </form>
    </div>
  );
}
