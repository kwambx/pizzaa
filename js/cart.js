const cartIcon = document.querySelector(".icon");
const cartContainer = document.querySelector(".count");
const cartButton = document.querySelectorAll(".btn");
const cartCards =document.querySelectorAll('.card')
// console.log(cartIcon)
// console.log(cartContainer)
// console.log(cartButton)

cartIcon.addEventListener("click", function () {
  cartContainer.classList.toggle("show-cart");
});

for (let button of cartButton) {

  button.addEventListener("click", (e) => {

// -------  gets the name//
    const pizzaName=e.target.parentElement.children[0].textContent
console.log(pizzaName)
    // ------it transverses upward .card parent----//
  const  pizzaImage=e.target.closest(".card").querySelector('img')
console.log(pizzaImage)
//--getting the price as a string slicing out ksh and making price as a number//
    const pizzaPrice=e.target.parentElement.children[2].textContent
const newPriceStr=pizzaPrice.slice("4")
 const newPrice=parseInt(newPriceStr)
console.log(newPrice)



    if(button.textContent.toLowerCase()==="add to cart"){
        button.textContent="remove from cart"
        button.style.backgroundColor="red"

    }
    else{
        button.textContent="Add to cart"
          button.style.backgroundColor="black"
    }




  });
}
