
let cartCount = 0;

function addToCart() {
  cartCount++;

  document.getElementById("cart-count").innerText =
    cartCount.toLocaleString("fa-IR");

  alert("محصول با موفقیت به سبد خرید اضافه شد!");
}

