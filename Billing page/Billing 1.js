// JavaScript source code


  function displayCart() {
    let cartItems = localStorage.getItem('shoppingCart');
    cartItems = JSON.parse(cartItems);
    let productsContainer = document.querySelector
    (".products");
    let cartCost = localStorage.getitem("totalCost"); 

  if (cartItems && productsContainer) {
    productsContainer.innerHTML = "";
    Object.values(cartItems).map(item => {
        productsContainer.innerHTML += 
        <div class="product">
            <img>
            <span>${item.name}</span>
        </div>
        <div class= "price"> ${item.price}</div>
        <div class "quantity" > 
            <span> ${item.inCart} </span>
        </div>
        <div class = "total">
            $${item.inCart * item.price},00
        </div>
        ; 
	});
    productsContainer.innerHTML += 
        <div class = "totalCostContainer">
            <h4 class = "totalTitle">
                Total cost
            </h4>
            <h4 class "totalCost">
                $${cartCost},00
            </h4>
            ;
    }
  }

  displayCart();