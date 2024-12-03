import { useContext } from "react";
import Logo from "../assets/Logo.jpg";
import { CartContext } from "../store/shopping-cart-context.jsx";
export default function Header({onOpenCart}) {
  const { items } = useContext(CartContext);
  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="Food app logo" />
        <h1>Reactfood</h1>
      </div>
      <button className="text-button" onClick={onOpenCart}>Cart ({items.length})</button>
    </header>
  );
}
