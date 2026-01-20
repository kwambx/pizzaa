const selectorTabs= document.querySelectorAll(".tab")
// console.log(selectorTabs)
const pizzaCategories=document.querySelectorAll(".pizza-category")
console.log(pizzaCategories)


//checks over a variable makes it active and output the menu for the variable//
for( let tab of selectorTabs){
    console.log(tab.textContent)
    if(tab.textContent.toLowerCase()==="chicken pizza"){
        tab.classList.add("active")
    }
}

for( let category of pizzaCategories){
    if(category.classList.contains("Chicken")){
        category.style.display="flex"
    }
    else{
        category.style.display="none"
    }
}

//=====checks if a tab is active removes then when a tab is clicked now it becomes active//
for(let tab of selectorTabs){
    tab.addEventListener("click",()=>{
for(let tab of selectorTabs){
    if(tab.classList.contains("active")){
    tab.classList.remove('active')
    }
}
 if(tab.textContent.toLowerCase()==="hawaiian")

for( let category of pizzaCategories){
    if(category.classList.contains("hawaiian")){
        category.style.display="flex"
    }
    else{
        category.style.display="none"
    }
}

else if(tab.textContent.toLowerCase()==="chicken pizza")
    for(let category of pizzaCategories){
if(category.classList.contains("Chicken")){
    category.style.display="flex"
}
else{
    category.style.display="none"
}


}

else if(tab.textContent.toLowerCase()==="margherita")
    for(let category of pizzaCategories){
if(category.classList.contains("Margherita")){
    category.style.display="flex"
}
else{
    category.style.display="none"
}


}

else if(tab.textContent.toLowerCase()==="pepperoni")
    for(let category of pizzaCategories){
if(category.classList.contains("pepperoni")){
    category.style.display="flex"
}
else{
    category.style.display="none"
}


}

else if(tab.textContent.toLowerCase()==="meat lover's pizza")
    for(let category of pizzaCategories){
if(category.classList.contains("meatpizza")){
    category.style.display="flex"
}
else{
    category.style.display="none"
}


}








        tab.classList.add("active")

    })
}