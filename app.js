const sizes = document.querySelectorAll('#sizes button');
const addToCart = document.getElementById('addToCart');
const cartButton = document.getElementById('cartButton');
const cartDrawer = document.getElementById('cartDrawer');
const closeCart = document.getElementById('closeCart');
const scrim = document.getElementById('scrim');
const cartCount = document.getElementById('cartCount');
const cartContent = document.getElementById('cartContent');
const sizeGuideButton = document.getElementById('sizeGuideButton');

let selectedSize = null;
let cartQty = 0;

sizes.forEach((button) => {
  button.addEventListener('click', () => {
    sizes.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    selectedSize = button.dataset.size;
    addToCart.textContent = `Add size ${selectedSize} to cart`;
  });
});

function openCart() {
  cartDrawer.classList.add('open');
  cartDrawer.setAttribute('aria-hidden', 'false');
  scrim.hidden = false;
}

function hideCart() {
  cartDrawer.classList.remove('open');
  cartDrawer.setAttribute('aria-hidden', 'true');
  scrim.hidden = true;
}

addToCart.addEventListener('click', () => {
  if (!selectedSize) {
    addToCart.textContent = 'Select a size first';
    setTimeout(() => (addToCart.textContent = 'Choose a size'), 1300);
    return;
  }

  cartQty += 1;
  cartCount.textContent = cartQty;
  cartContent.innerHTML = `
    <div class="cart-line">
      <img src="assets/real-madrid-away.svg" alt="Real Madrid 26/27 Away Jersey">
      <div>
        <strong>Real Madrid 26/27 Away Jersey</strong>
        <span>Size ${selectedSize} · Qty ${cartQty}</span>
        <p><strong>₹1,999</strong> <span>demo price</span></p>
      </div>
    </div>
  `;
  openCart();
});

cartButton.addEventListener('click', openCart);
closeCart.addEventListener('click', hideCart);
scrim.addEventListener('click', hideCart);

sizeGuideButton.addEventListener('click', () => {
  alert('Size guide placeholder: connect this to your final supplier measurements before launch.');
});
