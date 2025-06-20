const cart = [];

function addToCart(item, price) {
  cart.push({ item, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(({ item, price }) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.textContent = `${item} — $${price}`;
    cartItems.appendChild(div);
    total += price;
  });
  cartTotal.textContent = total;
}
checkoutBtn.addEventListener("click", () => {
  localStorage.setItem("bruiseCruiseCart", JSON.stringify(cartItems));
  window.location.href = "checkout.html";
});

