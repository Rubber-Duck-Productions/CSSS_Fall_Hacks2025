
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
                        <a href="#" class="fontbody" onclick="fetchData('${sponsor.Code}', '${dropId}')">
                            ${sponsor.Sponsor} | Code: ${sponsor.Code} | Price: $${sponsor.Price}
                        </a>
                    `).join('');
                } else {
                    drop.innerHTML = `<a href="#" class="fontbody">No sponsors available</a>`;
                }
            }
        });
    } catch (error) {
        console.error('Error loading teams:', error);
    }
}

// Fetch stock data for a sponsor
async function fetchData(symbol, dropId) {
    if (!symbol) return; // Skip if no stock symbol
    
    const drop = document.getElementById(dropId);
    if (!drop) return;
    
    // Show loading state
    drop.innerHTML = '<div class="stock-info">Loading...</div>';
    
    try {
        const response = await fetch(`https://eodhd.com/api/real-time/${symbol}?api_token=Ar4HLWBos-zpGsZDTLGW`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data && data.close) {
            drop.innerHTML = `
                <div class="stock-info">
                    <strong>${symbol}</strong><br>
                    Current Price: $${data.close}<br>
                    ${data.change ? `Change: ${data.change > 0 ? '+' : ''}${data.change}` : ''}
                    ${data.change_percent ? ` (${data.change_percent > 0 ? '+' : ''}${data.change_percent}%)` : ''}
                </div>
            `;
        } else {
            throw new Error('Invalid data received from API');
        }
    } catch (error) {
        console.error('Error fetching stock data:', error);
        drop.innerHTML = `
            <div class="stock-info">
                <strong>${symbol}</strong><br>
                Error loading data<br>
                <small>Please try again later</small>
            </div>
        `;
    }
}

// Load JSON on page load
window.onload = loadTeams;