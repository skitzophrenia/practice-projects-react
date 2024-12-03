import { createContext, useReducer } from "react";
import { useFetch } from "../hooks/useFetch.js";
import { fetchAvailableMeals } from "../https.js";

export const CartContext = createContext({
  items: [],
  order: {},
  addItemToCart: () => {},
  updateItemQuantity: () => {},
  addOrder: () => {},
});

function shoppingCartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload.selectedMeal.id
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = action.payload.initialCartItems.find(
        (product) => product.id === action.payload.selectedMeal.id
      );
      updatedItems.push({
        id: action.payload.selectedMeal.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );

  const [orderState, setOrderState] = useState({});

  const { fetchedData: initialMeals } = useFetch(fetchAvailableMeals, []);

  function handleAddItemToCart(selectedMeal) {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: { selectedMeal: selectedMeal, initialCartItems: initialMeals },
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: { productId, amount },
    });
  }

  function handleOrder(event, items) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    setOrderState((prevOrder) => ({ ...prevOrder, items: items, customer: data }));
  }

  const ctxValue = {
    items: shoppingCartState.items,
    order: orderState,
    addOrder: handleOrder,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
