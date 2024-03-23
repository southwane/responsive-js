
const menuToggle = document.getElementById("menu-toggle")

menuToggle.addEventListener('click', toogleMenu)


function toogleMenu () {
const menu = document.getElementById("menu");
console.log('open')
  if (menu.style.display === "flex") {
menu.style.display="none"
}else {
menu.style.display="flex"
}
}





  //   menu.style.display = "flex";
  // alert("menu toggle function");
  // console.log("menu button toggled");