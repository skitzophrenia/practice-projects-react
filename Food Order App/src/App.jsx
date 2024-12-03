import { useState, useContext } from "react";
import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import Modal from "./components/ui/Modal.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import OrderSucess from "./components/OrderSuccess.jsx";
import { CartContextProvider } from "./store/shopping-cart-context.jsx";
import { CartContext } from "./store/shopping-cart-context.jsx";
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isCheckoutOpen, setIssCheckoutOpen] = useState(false);
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);
 

  function handleUpdateCart() {
    setModalIsOpen(true);
    setIssCheckoutOpen(false);
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

  function handleCloseSuccessOrder() {
    setIsOrderSuccess(false);
    setIssCheckoutOpen(false);
    setModalIsOpen(false);
    
  }

  return (
    <CartContextProvider>
      <Modal open={modalIsOpen} onClose={handleCartClose}>
        {!isCheckoutOpen && !isOrderSuccess && (
          <Cart onClose={handleCartClose} onOpenCheckout={handleOpenCheckout} />
        )}
        {isCheckoutOpen && !isOrderSuccess && (
          <Checkout
            onClose={handleCartClose}
            onOrder={handleOpenOrderSuccess}
          />
        )}
        {isOrderSuccess && <OrderSucess onClose={handleCloseSuccessOrder} />}
      </Modal>
      <Header onOpenCart={handleUpdateCart} />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
