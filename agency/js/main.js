const header=document.getElementById("header");

window.addEventListener("scroll",function(){
    const scroll_position=window.pageYOffset;
    if(scroll_position>80){
header.classList.add("small");
    }else{
        header.classList.remove("small");
    }
})

