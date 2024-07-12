let toggleI=document.querySelector(".toggleT")
let toggleI1=document.querySelector(".toggleT img")
let toggleI2=document.querySelector(".toggleT #add")
let toggleI3=document.querySelector(".toggleT #wrong")
let search_barI=document.querySelector(".search_bar")

toggleI1.onclick = function() {
    let a=search_barI.classList.toggle('open')
    if(a==1){
        toggleI2.style.opacity = "0";
        toggleI3.style.opacity = "1";
    }
    else{
        toggleI3.style.opacity = "0";
        toggleI2.style.opacity = "1";
    }
}
