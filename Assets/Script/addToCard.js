function add_to_cart(pid, pname, pprice, pquan, pimg) {
  let cart = localStorage.getItem("cart");
  if (cart == null) {
    //no cart yet
    let products = [];
    let product = {
      productId: pid,
      productName: pname,
      productImg: pimg,
      productQuantity: pquan,
      productPrice: pprice,
    };
    products.push(product);
    localStorage.setItem("cart", JSON.stringify(products));
    console.log("Product is added for the first time");
  } else {
    //cart is already present
    let pcart = JSON.parse(cart);

    let oldProduct = pcart.find((item) => item.productId == pid);
    if (oldProduct) {
      //we have to increase the quantity
      oldProduct.productQuantity = pquan + oldProduct.productQuantity;
      pcart.map((item) => {
        if (item.productId == oldProduct.productId) {
          item.productQuantity = oldProduct.productQuantity;
        }
      });
      localStorage.setItem("cart", JSON.stringify(pcart));
      console.log("Product quantity increases");
    } else {
      //we have to increase the product
      let product = {
        productId: pid,
        productName: pname,
        productImg: pimg,
        productQuantity: pquan,
        productPrice: pprice,
      };
      pcart.push(product);
      localStorage.setItem("cart", JSON.stringify(pcart));
      console.log("New Product is added");
    }
  }
  updateCart();
}

$(".cart-here").click(function (event) {
  event.preventDefault();
  let id = 1;
  let name = "Red Apple";
  let price = 300;
  let quantity = 2;
  let img =
    "https://static5.depositphotos.com/1020804/405/i/950/depositphotos_4058882-stock-photo-ripe-red-apple-with-a.jpg";
  add_to_cart(id, name, price, quantity, img);
});
$(".cart-there").click(function (event) {
  event.preventDefault();
  let id = 2;
  let name = "green Apple";
  let price = 200;
  let quantity = 5;
  let img =
    "https://static5.depositphotos.com/1020804/405/i/950/depositphotos_4058882-stock-photo-ripe-red-apple-with-a.jpg";
  add_to_cart(id, name, price, quantity, img);
});

//update cart:
function updateCart() {
  let cartString = localStorage.getItem("cart");
  let cart = JSON.parse(cartString);
  if (cart == null || cart.length == 0) {
    console.log("Cart is Empty!!");
    $(".cart-alert").css({ visibility: "hidden" });
    $(".cart-body").html(
      "<img src='https://www.dudduwa.com/pub/static/frontend/MageBig/martfury_layout02/en_US/images/empty-cart.svg' class='empty-cart'>"
    );
    $(".checkout-btn").attr("disabled", true);
  } else {
    //there is something
    console.log(cart);
    $(".cart-alert").css({ visibility: "visible" });
    let table = `
				<table class="table">
				<thead>
					<tr>
						<th class="text-center"> </th>
						<th class="text-center">Product</th>
						<th class="text-center">Price<span class="cart-sm-text">(Per Item)</span></th>
						<th class="text-center">Quantity</th>
						<th class="text-center">Total Price</th>
						<th class="text-center">Action</th>
					</tr>
				</thead>`;

    let totalPrice = 0;

    cart.map((item) => {
      table += `
					<tr data-id="${item.productId}">
						<td class="table-data"><img class="cart-img" src="${item.productImg}"></td>
						<td class="table-data">${item.productName}</td>
						<td class="table-data">Rs. ${item.productPrice}</td>
						<td class="table-data qty">
							<div class='input-group'>
							<input type='number' min=1 class='val-num form-control display-inline'  onchange="qauntityChange(this.value,${
                item.productId
              })" value='${item.productQuantity}'>
							</div>
						</td>
						<td class="table-data">Rs. ${item.productQuantity * item.productPrice}</td>
						<td class="table-data">
							<button onclick="deleteItemFromCart(${
                item.productId
              })" class="btn btn-rd text-size btn-lg">
								<i class="fa fa-trash" aria-hidden="true"></i>
							</button>
						</td>
					</tr>`;

      totalPrice += item.productPrice * item.productQuantity;
    });
    table =
      table +
      `
						</table>
            <div class="d-flex justify-content-end">
            <table class="table w-auto">
                  <tr>
                      <td scope="row">Total Item(s) :</td>
                      <td><span class="price text-yelow">${cart.length}</span></td>
                    </tr>
                    <tr>
                      <td scope="row">Total Price :</td>
                      <td><span class="price text-yelow">Rs. ${totalPrice}</span></td>
                    </tr>
              </table>
          					<h5> </h5>
        				</div>
`;

    $(".cart-body").html(table);
    $(".checkout-btn").attr("disabled", false);
  }
}

function deleteItemFromCart(pid) {
  const elem = document.querySelector(`tr[data-id="${pid}"]`);
  elem.classList.add('deleting');
  setTimeout(() => {
    elem.parentElement.removeChild(elem);
    let cart = JSON.parse(localStorage.getItem("cart"));
    let newcart = cart.filter((item) => item.productId != pid);
    localStorage.setItem("cart", JSON.stringify(newcart));
    updateCart()
  }, 1500)

}

$(document).ready(function () {
  updateCart();
});

function goToCheckout() {
  window.location = "checkout.html";
}

function qauntityChange(pquan, pid) {
  let cart = JSON.parse(localStorage.getItem("cart"));

  let newcart = cart.map((item) => {
    if (item.productId == pid) {
      return { ...item, productQuantity: pquan };
    } else {
      return item;
    }
  });
  localStorage.setItem("cart", JSON.stringify(newcart));
  updateCart();

  console.log(newcart);
}
function clearCart() {
  localStorage.clear();
  updateCart();
}
