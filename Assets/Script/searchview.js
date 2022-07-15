import { product_items } from "./items.js";
var searchText = sessionStorage.getItem("searchtext");
var textdisplay= document.getElementById('textview');
textdisplay.innerHTML=`" ${searchText} "`;
var textnothing=`<div class="col-lg-12">
                  <h1>
                  <span class='font-weight-bold'>NOTHING</span> FOUND
                  </h1>
                  <p>Sorry, but nothing matched with your search. Please try again with some different keywords.</p>
                  </div>`;

const displayItem = document.getElementById("item-display");
const cardview = (item) => {
  const cardData =
    item
      ?.map((item) => {
        return `
        <div class="col-lg-4 pt-5">
        <div class="card card-item" id="${item.catId}" data-id="${item.pId}">
          <img class="card-img-top" src="${item.img}" alt="">
          <div class="card-body text-center">
            <h1 class="card-title">${item.name}</h1>
            <p class="card-text">Price: <span>${item.price}</span> ${item.unit}</p>
            <p class="card-text">Item: <input class="card-qty" type="number" value=1 max=10 min=1 ></p>
            <p><button class="btn btn-lg btn-block addtocart">Add to <span class="cartbtn">Cart</span></button></p>
          </div>
        </div>
  </div>
              `;
      })
      .join("") || textnothing;
  displayItem.innerHTML = cardData;
};

const searchBar = document.getElementById("searchBar");
searchBar?.addEventListener("keyup", (e) => {
  if (13 == e.keyCode) {
    const searchval= e.target.value;
    const searchString = searchval.toLowerCase();
    textdisplay.innerHTML=`" ${searchval} "`;
    const filteredCharacters = product_items.filter((item) => {
      return (item.name.toLowerCase().includes(searchString)||
              item.catId.toLowerCase().includes(searchString)
    );
  });
    cardview(filteredCharacters);
  }
}) || searchimport();
function searchimport() {
  searchBar.value = searchText;
  const searchString = searchText.toLowerCase();
  const filteredCharacters = product_items.filter((item) => {
    return (item.name.toLowerCase().includes(searchString)||
    item.catId.toLowerCase().includes(searchString)
);
  });
  cardview(filteredCharacters);
}

document.querySelectorAll('.card').forEach(card => {
  card.querySelector('.addtocart').addEventListener('click', () => {
    console.log(123)
    const prodId = Number(card.dataset.id);
    const prodName = card.querySelector('.card-title').textContent;
    const prodPrice = Number(card.querySelector('.card-text span').textContent);
    const prodQty = Number(card.querySelector('.card-qty').value);
    const prodImage = card.querySelector('.card-img-top').src;
    add_to_cart(prodId, prodName, prodPrice, prodQty, prodImage)
  })
})