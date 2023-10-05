var allproducts = document.querySelectorAll(".ch-item")
var div = document.querySelector("#contant")
var btn = document.querySelector("#btn")
var price = document.querySelector("#price")
var totalprice = 0



allproducts.forEach(function(item){
    item.onclick = function(){
        div.innerHTML += item.textContent + " ,"

        if (div.innerHTML != ""){
            btn.style.display = "block"
        }

        totalprice += +(item.getAttribute("price"))
    }   
})

btn.onclick = function (){
    price.innerHTML = totalprice
}
