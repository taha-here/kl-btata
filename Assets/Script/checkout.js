function whtspme() {
    let checkoutCart = localStorage.getItem("cart");
    let cart = JSON.parse(checkoutCart);
    let link = `https://wa.me/923170802260?text=`;
    let totalPrice = 0;
    cart.map((item) => {
      link += `
      ${item.productQuantity}%20${item.productName}%20Rs:%20 ${item.productQuantity * item.productPrice}%0D%0A`;
      totalPrice += item.productPrice * item.productQuantity;
    });
    link =
      link +
      `
Total Items:%20${cart.length}%0D%0ATotal Price:%20${totalPrice}%0D%0A
`; window.open(link);
}

