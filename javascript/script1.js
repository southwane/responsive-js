
const menuToggle = document.getElementById("menu-toggle")

menuToggle.addEventListener('click', toogleMenu)


function toogleMenu () {
const menu = document.getElementById("menu");
if (menu.style.display === "flex") {
  menu.style.display ==="none"
}else {
  menu.style.display="flex"
}
console.log('open')
}





