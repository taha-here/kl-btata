import { ahmed } from "./search.js";
console.log(ahmed);


const searchview = document.getElementById("search-display");
const displayCharacters = (characters) => {
  const htmlString = characters
    ?.map((character) => {
      return `
              <li class="character">
                  <h2>${character.name}</h2>
                  <p>House: ${character.house}</p>
                  <img src="${character.image}"></img>
              </li>
              `;
    })
    .join("") || 'no results to display';
    searchview.innerHTML = htmlString;
};


const searchBar = document.getElementById("searchBar");
      //const searchtext = JSON.parse(sessionStorage.getItem("searchtext"));
      let strsearch = sessionStorage.getItem("search");
      let stsearch = JSON.parse(strsearch);
      console.log(stsearch);

        searchBar.addEventListener("keyup", (e) => {
            const searchString = e.target.value.toLowerCase();

            const filteredCharacters = ahmed.filter((character) => {
              return (
                character.name.toLowerCase().includes(searchString) ||
                character.house.toLowerCase().includes(searchString)
              );
            });
            sessionStorage.setItem(
              "filteredCharacters",
              JSON.stringify(filteredCharacters)
            );
            console.log(filteredCharacters)
            displayCharacters(filteredCharacters);
          }
        );
        searchBar.value = stsearch;
        const strchr = sessionStorage.getItem("filteredCharacters");
        console.log(strchr);

        const filtereditem = JSON.parse(strchr);
        displayCharacters(filtereditem);
        /**
        const htmlString = filtereditem.map((item) => {
            return `
                        <li class="character">
                            <h2>${item.name}</h2>
                            <p>House: ${item.house}</p>
                            <img src="${item.image}"></img>
                        </li>
                    `;
          })
          .join("");
        charactersList.innerHTML = htmlString;    
        **/
        sessionStorage.clear();   
        
        