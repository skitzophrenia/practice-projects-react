import { useState } from "react";
import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import Modal from "./components/ui/Modal.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import OrderSucess from "./components/OrderSucess.jsx";
import { CartContextProvider } from "./store/shopping-cart-context.jsx";
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isCheckoutOpen, setIssCheckoutOpen] = useState(false);
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);

  function handleUpdateCart() {
    setModalIsOpen(true);
  }

  function handleCartClose() {
    setModalIsOpen(false);
  }

  function handleOpenCheckout() {
    setIssCheckoutOpen(true);
  }

  function handleOpenOrderSuccess() {
    setIsOrderSuccess(true);
  }

  return (
    <CartContextProvider>
      <Modal open={modalIsOpen} onClose={handleCartClose}>
        {!isCheckoutOpen && <Cart onClose={handleCartClose} onOpenCheckout={handleOpenCheckout} />}
        {isCheckoutOpen && <Checkout onClose={handleCartClose} />}
        {isOrderSuccess && <OrderSucess onClose={handleCartClose} />}
      </Modal>
      <Header onOpenCart={handleUpdateCart} />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
