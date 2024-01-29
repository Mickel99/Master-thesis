// cartApiCall.js
export function addToCartAPI(newItem) {
    // Simulera ett API-anrop, ersätt med riktigt anrop här
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Simulated API call: Added to cart", newItem);
        resolve();
      }, 1000);
    });
  }
  
  export function removeFromCartAPI(id) {
    // Simulera ett API-anrop, ersätt med riktigt anrop här
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Simulated API call: Removed from cart", id);
        resolve();
      }, 1000);
    });
  }
  