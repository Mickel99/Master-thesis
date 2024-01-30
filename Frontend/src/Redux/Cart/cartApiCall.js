export function addToCartAPI(newItem) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Simulated API call: Added to cart", newItem);
        resolve();
      }, 1000);
    });
  }
  
  export function removeFromCartAPI(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Simulated API call: Removed from cart", id);
        resolve();
      }, 1000);
    });
  }
  