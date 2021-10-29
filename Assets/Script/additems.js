import { product_items as items} from "./items.js";

/***For Cards display***/

const displayItem = document.getElementById("item-display");
const cardview = (item) => {
  const cardData = item
    ?.map((item) => {
      return `
      <div class="col-lg-4 pt-5">
      <div class="card card-item" id="${item.catId}">
        <img class="card-img-top" src="${item.img}" alt="">
        <div class="card-body text-center">
          <h1 class="card-title">${item.name}</h1>
          <p class="card-text">Price: ${item.price} ${item.unit}</p>
          <p class="card-text">Item: <input class="card-qty" type="number" value=1 max=10 min=1 ></p>
          <p><button class="btn btn-lg btn-block addtocart" onclick="add_to_cart(${item.pId},'${item.name}',${item.price},1,'${item.img}')" >Add to <span class="cartbtn">Cart</span></button></p>
        </div>
      </div>
</div>
              `;
    })
    .join("") || '<h1>Sorry!! No results to Found</h1>';
    displayItem.innerHTML = cardData;
};

const category =displayItem.getAttribute('data-category');
const min =displayItem.getAttribute('data-min');
const max =displayItem.getAttribute('data-max');
const filterItems = items.filter((e) => {
        return (
          e.catId.toLowerCase().includes(category)
        );
      });
const itemLength=filterItems.slice(min, max);
    cardview(itemLength);

