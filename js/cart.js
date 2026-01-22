const cartIcon = document.querySelector(".icon");
const cartContainer = document.querySelector(".count");
const cartButton = document.querySelectorAll(".btn");
const cartCards =document.querySelectorAll('.card')
const cartItems=[]
const  cartCounter=document.querySelector('.cart-count')

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
  const  pizzaImage=e.target.closest(".card").querySelector('img').src
console.log(pizzaImage)
//--getting the price as a string slicing out ksh and making price as a number//
    const pizzaPrice=e.target.parentElement.children[2].textContent
    console.log(pizzaPrice)
const newPriceStr=pizzaPrice.slice(4)
 const newPrice=parseInt(newPriceStr)
console.log(newPrice)



    if(button.textContent.toLowerCase()==="add to cart"){
      const item={
        name:pizzaName,
        price:newPrice,
        image:pizzaImage
        
      }
      // console.log(item)
      cartItems.push(item)
      console.log(cartItems)
      cartCounter.textContent=cartItems.length
 updateCartContainer()
        button.textContent="remove from cart"
        button.style.backgroundColor="red"



    }
    else{
const indexToRemove=cartItems.findIndex((pizzaObj)=>{
  return pizzaObj.name===pizzaName
})
cartItems.splice(indexToRemove,1)
 cartCounter.textContent=cartItems.length
 updateCartContainer()
        button.textContent="Add to cart"
          button.style.backgroundColor="black"


    }



  });

}
  // const cartContainer=document.querySelector(".count")
 
function updateCartContainer(){
  cartContainer.innerHTML=""

   
  cartItems.map((cartItem)=>{

      
    
const cartItemRow =document.createElement('div')
      cartItemRow.classList.add('inner')
      cartItemRow.innerHTML =`
      
      <img src= ${cartItem.image} width=8%/>
<div>${cartItem.name}</div>
<div>ksh${cartItem.price}</div>
<div class="quantity">
  <p class="decrement">-</p>
  <p>1</p>
  <p class="increment">+</p>
</div>
<div class="sum">ksh${cartItem.price}</div>
    
     
  `
 
    cartContainer.appendChild(cartItemRow)
    
    
  })
  const totalContainer=document.createElement('div')
totalContainer.classList.add('total-container')
totalContainer.innerHTML=`<h3>Total:ksh <span class="total"> 3000</span></h3>`
cartContainer.appendChild(totalContainer)

updatePrice()
}



cartContainer.addEventListener("click",(e)=>{
  if(e.target.classList.contains("increment")){
    let itemQuatity=e.target.previousElementSibling
    itemQuatity.textContent++
  updatePrice()
  }

  else if(e.target.classList.contains("decrement")){
  let itemQuatity=e.target.nextElementSibling
    if(itemQuatity.textContent>1){
      itemQuatity.textContent--
    }
    updatePrice()

  }


})


function updatePrice(){
  const allCartItems=document.querySelectorAll('.inner')
    let grandTotal= 0;
  

    //replace ksh and having a total//
  for(let item of allCartItems){
    const itemPrice=parseInt(item.children[2].textContent.replace("ksh",""))
    const quantity=parseInt(item.children[3].children[1].textContent)
   const itemTotal=item.children[4]


    const subTotal=itemPrice*quantity
    itemTotal.textContent=`ksh. ${subTotal}`

grandTotal +=subTotal

  }
  //update grand total//
  const totalElement= document.querySelector('.total')
  if(totalElement){
    totalElement.textContent =grandTotal
 

  }
  
}


