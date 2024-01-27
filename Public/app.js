
const dateMap = {
    feb9: "Febuary 9th @ 8PM",
    feb10: "Febuary 10th @ 8PM",
};
function updateCartDisplay() {
    const cartDisplay = document.getElementById('cart-display');
    const cartInnerHTML = cartItems.map((item) => `${item.quantity} ticket(s) for ${dateMap[item.id]}`);
    console.log(cartInnerHTML);
    cartDisplay.innerHTML = cartInnerHTML;
};

