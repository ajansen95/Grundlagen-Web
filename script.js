/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("nav_mobile");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

window.addEventListener('click', function(e){
    if (!document.getElementById('nav_mobile').contains(e.target) && (!document.getElementById('burger_icon').contains(e.target))){
        //alert("Clicked outside nav_mobile and burger_icon");
        document.getElementById('nav_mobile').style.display="none";
    }
})