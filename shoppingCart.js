const incrementBtns = document.querySelectorAll(".product-increment");
const decrementBtns = document.querySelectorAll(".product-decrement");


function totalShop () {
    const products= document.querySelectorAll(".items")
    let total =0
for (let product of products) {
    let quantity= product.querySelector('.product-quantity')
    let price = product.querySelector('.price-unity')
    total+=quantity.innerHTML*price.innerHTML;
}
document.querySelector('.shopping-cart-total').innerHTML=total;
}


    for (let btn of incrementBtns) {
        btn.onclick = function (event) { 
            if (event.target.parentElement.classList.contains("quantity")){
                let quantityProduct= event.target.parentElement.querySelector(".product-quantity");
                quantityProduct.innerHTML++;
            }
            else {
                let quantityProduct= event.target.parentElement.parentElement.querySelector(".product-quantity");
                quantityProduct.innerHTML++;
            }
            totalShop ();
        }
    };

    for (let btn of decrementBtns) {
        btn.onclick = function (event) {  
            if (event.target.parentElement.classList.contains("quantity")){
                let quantityProduct= event.target.parentElement.querySelector(".product-quantity");
                if (quantityProduct.innerHTML <=0) {
                    return
                }
                quantityProduct.innerHTML--;}

                else {
                    let quantityProduct= event.target.parentElement.parentElement.querySelector(".product-quantity");
                        if (quantityProduct.innerHTML <=0) {
                            return
                        }
                    quantityProduct.innerHTML--;
                }
            totalShop ();
        }
    };

    const removeBtns = document.querySelectorAll(".button-delete");
for (let btn of removeBtns) {
       btn.onclick = function(event) {
           let itemSection=event.target.parentElement.parentElement
           if ( itemSection.className==="items") {
           event.target.parentElement.parentElement.remove();}
           else {
               itemSection.parentElement.remove();
           }
           totalShop ();
       }
   };
    