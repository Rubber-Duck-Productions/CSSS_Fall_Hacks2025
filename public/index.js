
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


function toggleDropdown(id){
    document.getElementById(id).classList.toggle("show");
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





async function loadTeams() {
    try {
        const response = await fetch('sponsors.json');
        if (!response.ok) throw new Error("Could not fetch JSON file");

        const data = await response.json();
        const teamNames = Object.keys(data);

        teamNames.forEach((teamName, index) => {
            const dropId = `drop${index + 1}`;
            const drop = document.getElementById(dropId);

            if (drop) {
                if (data[teamName].length > 0) {
                    drop.innerHTML = data[teamName].map(sponsor => `
                        <a href="#" class="fontbody">
                            ${sponsor.Sponsor} | Code: ${sponsor.Code} | Price: $${sponsor.Price}
                        </a>
                    `).join('');
                } else {
                    drop.innerHTML = `<a href="#" class="fontbody">No sponsors available</a>`;
                }
            }
        });
    } catch (error) {
        console.error(error);
    }
}

// Load JSON on page load
window.onload = loadTeams;