
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

fetchData();

async function fetchData() {

  try{
    const response = await fetch("https://eodhd.com/api/fundamentals/AAPL.US?api_token=demo&fmt=json");

    if(!response.ok){
      throw new Error("Could not fecth resource");

    }
    const data = await response.json();
    console.log(data);

    const code = data.General.Code;
    const name = data.General.Name;
    const exchange = data.General.Exchange;
    const wallStreetTarget = data.Highlights.WallStreetTargetPrice;

    console.log("Code:", code);
    console.log("Name:", name);
    console.log("Exchange:", exchange);
    console.log("Wall Street Target Price:", wallStreetTarget);

    const drop = document.getElementById("drop");
    drop.innerHTML = `
      <a href="#">Code: ${code}</a>
      <a href="#">Name: ${name}</a>
      <a href="#">Exchange: ${exchange}</a>
      <a href="#">Target Price: $${wallStreetTarget}</a>
    `;

  }

  catch(error){
    console.error(error);

  }
  
}

