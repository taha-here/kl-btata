const template = document.createElement('template');
template.innerHTML = `

<link rel="stylesheet" href="../../Assets/Css/style.css" />
<link rel="stylesheet" href="Assets/Css/style.css" />

<div class="container-fluid mt-5">
<div class="row pt-2 bg-back">
  <div class="col-lg-4">
    <img src="Img/logo.png" title="StockMart" width=465" alt="StockMart" />
    <div class="card bg-transparent border-0">
      <div class="card-body">
        <h2 class="text-center text-white">Manage By:</h2>
        <ul class="list-unstyled text-back text-center font-weight-bold text-gray text-size">
          <li title="2012B1 Student">Taha Rafi</li>
          <li title="2012B1 Student">M.Salman Siddiqui</li>
          <li title="2012B1 Student">Muhammad Kaif</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="col-lg-4 pt-3 mt-3">
    <div class="card bg-transparent border-0">
      <div class="card-body">
        <h2 class="text-white text-center">Quick Links:</h2>
        <ul class="list-unstyled text-center font-weight-bold text-gray text-size mt-2">
          <li><a class="text-reset" href="Index.html">Home</a></li>
          <li><a class="text-reset" href="Categories.html">Categories</a></li>
          <li><a class="text-reset" href="Contact.html">Contact</a></li>
          <li><a class="text-reset" href="About.html">About</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="col-lg-4 pt-4">
    <div class="card bg-transparent border-0">
      <div class="card-body">
        <h3 class="text-white text-center">
          Subscribe Our Newsletter
        </h3>
        <h6 class="text-gray text-center text-size-sm">
          Get the latest offers and promotions!
        </h6>

        <div class="input-group">
          <input type="text" class="form-control" placeholder="Enter Your Email..."
            aria-label="Recipient's username" aria-describedby="basic-addon2">
          <div class="input-group-append">
            <button class="btn btn-subscribe" type="button">Subscribe</button>
          </div>
          </form>
        </div>
        <div class="text-center text-white mt-3">
          <h3>Connect With Us:</h3>

          <a class="text-reset text-size-lg" href="https://www.facebook.com/" target="_blank"><i
              class="fa fa-facebook-square" aria-hidden="true"></i></a>
          <a class="text-reset text-size-lg" href="https://www.instagram.com/" target="_blank"><i
              class="fa fa-instagram" aria-hidden="true"></i></a>
          <a class="text-reset text-size-lg" href="https://twitter.com/" target="_blank"><i
              class="fa fa-twitter-square" aria-hidden="true"></i></a>
          <a class="text-reset text-size-lg" href="https://www.linkedin.com/" target="_blank"><i
              class="fa fa-linkedin-square" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="row bg-yelow">
  <div class="col-lg-12">
    <h4 class="text-center p-2 font-weight-bold">
      Powered by Aptech Students | All Right Reserved <i class="fa fa-copyright" aria-hidden="true"></i>
    </h4>
  </div>
</div>
</div>
`
class CustomFooter extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
}

window.customElements.define('custom-footer', CustomFooter)