import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context.jsx";
export default function Cart({ onClose, onOpenCheckout }) {
  const { items, updateItemQuantity } = useContext(CartContext);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {items.map((cartItem) => (
          <li key={cartItem.id} className="cart-item">
            <p>
              {cartItem.name} - {cartItem.quantity} x ${cartItem.price}
            </p>
            <p className="cart-item-actions">
              <button type="button" onClick={() => updateItemQuantity(cartItem.id, -1)}>
                -
              </button>
              <span>{cartItem.quantity}</span>
              <button type="button" onClick={() => updateItemQuantity(cartItem.id, 1)}>
                +
              </button>
            </p>
          </li>
        ))}
      </ul>
      <p className="cart-total">{formattedTotalPrice}</p>
      <p className="modal-actions">
        <button type="button"  onClick={onClose} className="text-button">
          close
        </button>
        <button type="button" className="button" onClick={onOpenCheckout}>
          Go to Checkout
        </button>
      </p>
    </div>
  );
}
