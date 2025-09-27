
    let prevScrollPos = window.pageYOffset;

    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      const navbar = document.getElementById("navbar");

      if (prevScrollPos > currentScrollPos) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = "-80px";
      }

      prevScrollPos = currentScrollPos;
    };


