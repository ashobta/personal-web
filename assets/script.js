window.onscroll = function() {mySticky()};
let navbar = document.getElementById("myTopNav");
let colflex = document.getElementById("experiences");
let sticky = navbar.offsetTop;
function mySticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    colflex.classList.add("sticky2");
  } else {
    navbar.classList.remove("sticky");
    colflex.classList.remove("sticky2")
  }
}
