
    let prevScrollPos = window.pageYOffset;

    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      const navbar = document.getElementById("nav");

      if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = "-80px";
      }

      prevScrollPos = currentScrollPos;
    };


function toggleDropdown(){
    document.getElementById("Teams").classList.toggle("show");
}
window.onclick = function (event)
{
    if(!event.target.matches('.drip')){
        var drop= document.getElementsByClassName("content");
        for (var i =0 ; i < drop.length ; i++){
            let opndrop = drop[i];
            if (opndrop.classList.contains('show')){
                opndrop.classList.remove('show');
            }
        }
    }
}
