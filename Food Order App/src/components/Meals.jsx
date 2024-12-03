import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context.jsx";
import { useFetch } from "../hooks/useFetch.js";
import { fetchAvailableMeals } from "../https.js";
export default function Meals() {
  const { addItemToCart } = useContext(CartContext);
  const { fetchedData: initialMeals, isFetching } = useFetch(fetchAvailableMeals, []);
  return (
    <div id="meals">
      {isFetching && "Loading Meals"}
      {initialMeals.map((meal) => (
        <div className="meal-item" key={meal.id}>
          <img src={`http://localhost:3000/${meal.image}`} />
          <h3>{meal.name}</h3>
          <p className="meal-item-price">${meal.price}</p>
          <p className="meal-item-description">{meal.description}</p>
          <button
            onClick={() => addItemToCart(meal)}
            className="button meal-item-actions"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
