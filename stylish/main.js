const nav_btn=document.getElementById("nav");
nav_btn.addEventListener("click",show);

function show(){
  document.getElementById("sidebar").classList.toggle("active");
  var sidebar = document.getElementById("sidebar");
  
 if(sidebar.classList.contains("active")){
    nav.innerHTML="<i class='fa-solid fa-x'></i>";

    console.log("aktivdir");
 }else{
    nav.innerHTML="<i class='fa-solid fa-bars'></i>";
   console.log("aktiv deyildir");
 }

}

nav_btn.addEventListener("click",show);

