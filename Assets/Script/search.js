
const searchclass = document.getElementsByClassName("searchproduct");
  searchclass[0]?.addEventListener("keyup", (e) => {
    if (13 == e.keyCode) {
       let searchText1 = e.target.value;
      console.log(searchText1);
      sessionStorage.setItem("searchtext",searchText1);
      window.location="search.html"


    }
      })||searchclass[1]?.addEventListener("keyup", (e) => {
        if (13 == e.keyCode) {
           let searchText2 = e.target.value;
          console.log(searchText2);
          sessionStorage.setItem("searchtext",searchText2);
         window.location="search.html";
        }
      });

