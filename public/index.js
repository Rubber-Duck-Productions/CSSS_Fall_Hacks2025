
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

fetchData(symbol);

async function fetchData(symbol) {

  try{
    const response = await fetch("https://eodhd.com/api/fundamentals/${symbol}?api_token=demo&fmt=json");


    if(!response.ok){
      throw new Error("Could not fetch resource");

    }
    const data = await response.json();

    console.log(data);

    const code1 = data.General.Code;
    const name1 = data.General.Name;
    const exchange1 = data.General.Exchange;
    const wallStreetTarget1 = data.Highlights.WallStreetTargetPrice;



    console.log("Code:", code1);
    console.log("Name:", name1);
    console.log("Exchange:", exchange1);
    console.log("Wall Street Target Price:", wallStreetTarget1);

    const drop = document.getElementById('drop');
    drop.innerHTML = `
      <a href="#"> Name: ${name1} Code: ${code1}   Exchange: ${exchange1}   Price: $${wallStreetTarget1}</a>
    
    `;

  }

  catch(error){
    console.error(error);

  }
  
}

window.onload=()=> {
    fetchData('HPQ')
}

