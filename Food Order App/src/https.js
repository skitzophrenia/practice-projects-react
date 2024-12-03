export async function fetchAvailableMeals() {
  const response = await fetch("http://localhost:3000/meals");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }

  return resData;
}

export async function submitOrder(order) {
  console.log(order);
 /*const response = await fetch("http://localhost:3000/orders", {
    method: "POST",
    body: JSON.stringify({ order: order }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "Access-Control-Request-Method": "*",
    },
  });


  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to update places");
  }

  return resData.message;*/
}
