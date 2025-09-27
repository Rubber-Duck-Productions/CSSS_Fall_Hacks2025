
// F1 Teams and their sponsors data
const f1TeamsData = {
    "Red Bull": {
        sponsors: [
            "Armor All", "Athletic Propulsion Labs", "AvaTrade", "Blenders", "Built For Athletes", 
            "Castore", "EA Sports", "Hard Rock", "Heineken", "HP | Poly", "New Era", "PATRÓN Tequila", 
            "Pepe Jeans", "Pirelli", "Rauch", "Rokt", "Sui", "TAG Heuer", "Visa", "YETI", "Ansys", 
            "Arctic Wolf", "AT&T", "CDW", "DMG MORI", "Esso", "Hexagon", "Honda", "Mobil 1", "PWR", 
            "Siemens", "Sparco", "Zoom"
        ],
        stockSymbols: {
            "AT&T": "T",
            "Honda": "HMC",
            "Siemens": "SIEGY",
            "Visa": "V",
            "HP": "HPQ"
        }
    },
    "Williams": {
        sponsors: [
            "The Ingenuity", "Gulf Oil", "Reviva", "Zoox", "Life Fitness", "Pirelli", "Fan Capital", 
            "Stephens", "Betway", "Airia", "JackPot City", "Brillio", "SIA", "Atlassian", "Kraken", 
            "Santander", "Duracell"
        ],
        stockSymbols: {
            "Santander": "SAN",
            "Atlassian": "TEAM"
        }
    },
    "Ferrari": {
        sponsors: [
            "HP", "Shell", "Uni-credit", "Puma", "VGW", "Ray-Ban", "AWS", "Richard Mille", 
            "Ceva Logistics", "OMR Automotive", "MAHLE", "Pirelli", "Bell", "SKF", "Vistajet", 
            "NGK Spark Plugs", "Brembo", "Riedel", "Iveco", "ManPower Group", "Technogym", 
            "Garrett", "Giorgio Armani", "Sabelt", "Genesys", "Bitdefender", "HCL Software", 
            "ZCG", "Bang Olufsen", "Ecopol", "Ohlins", "DXC Technology", "Peroni", 
            "Philip Morris International", "Celsius", "Ambipar", "Chivas Regal", "Espacto", "Vantage"
        ],
        stockSymbols: {
            "HP": "HPQ",
            "Shell": "SHEL",
            "AWS": "AMZN",
            "Puma": "PUM.DE",
            "DXC Technology": "DXC",
            "Philip Morris International": "PM"
        }
    },
    "Aston Martin": {
        sponsors: [
            "Cognizant", "Aramco", "SentinelOne", "Citi", "JCB", "NetApp", "Boss", 
            "Girard Perregaux", "Bombardier", "Pirelli", "TikTok", "Ogio", "Oakley", 
            "Stilo", "Velocity Black", "Valvoline", "NexGEN", "Banco Master", "ServiceNow", 
            "Regent Sea Cruises", "WolfGang Puck", "Financial Times", "OMP", "Stichd", 
            "Maaden", "Glenfiddich", "Coinbase", "Pepperstone", "Circle", "Xerox", "ARM", 
            "Atlas Air", "Elemis London", "Puma"
        ],
        stockSymbols: {
            "Cognizant": "CTSH",
            "Aramco": "2222.SR",
            "Citi": "C",
            "NetApp": "NTAP",
            "ServiceNow": "NOW",
            "Coinbase": "COIN",
            "Xerox": "XRX",
            "ARM": "ARM",
            "Puma": "PUM.DE"
        }
    },
    "Sauber": {
        sponsors: [
            "Code Zero", "Camozzi", "Globeair", "Singha", "Additive Industries", 
            "Mitsubishi Electric", "Pirelli", "Puma", "Sabelt", "Walter Meier", 
            "Web Eyewear", "JigSpace", "Brutsch-Ruegger", "Riedel", "Stake", "Kick", 
            "Agilis", "Cielo", "Mascot Workwear", "SenseTime", "FIX Network", 
            "Sunoco", "Extreme Networks", "Scania", "Hewlett Packard Enterprise", 
            "Zero", "Jeckerson", "Beyond Nations", "Edelweiss", "+GF+", "Tucano", 
            "Catalano", "Libertex", "CoinPayments", "Admin By Request"
        ],
        stockSymbols: {
            "Mitsubishi Electric": "MIELY",
            "Puma": "PUM.DE",
            "Sunoco": "SUN",
            "Hewlett Packard Enterprise": "HPE"
        }
    },
    "Haas": {
        sponsors: [
            "Haas Automation", "Alpinestars", "Pirelli", "Schuberth", "Taittinger", 
            "Tricorp Workwear", "MoneyGram", "Haas Tooling", "Travis Mathew", "Play & Go", 
            "MGM Rewards", "New Era", "Toyota Gazoo Racing", "CommScope", "Mphasis", 
            "Orion180", "Ruckus", "UChicago Medicine"
        ],
        stockSymbols: {
            "MoneyGram": "MGI",
            "CommScope": "COMM",
            "Mphasis": "MPHAS"
        }
    },
    "RB": {
        sponsors: [
            "Honda", "Randstad", "Pirelli", "Riedel", "Siemens", "Xmtrading", "Visa", 
            "Cash App", "Hugo", "Tudor", "NEFT Vodka", "Piquadro", "Hugo Eyewear", 
            "RebelDot", "Airtasker", "Dynatrace", "Student.com", "Roboze", "Hahnair"
        ],
        stockSymbols: {
            "Honda": "HMC",
            "Randstad": "RAND.AS",
            "Siemens": "SIEGY",
            "Visa": "V",
            "Dynatrace": "DT"
        }
    },
    "Alpine": {
        sponsors: [
            "BWT", "Renault E-Tech", "Binance", "Mobilize Financial Services", "Microsoft", 
            "Sprinklr", "Boeing", "Delphi", "Eurodatacar", "Shamir", "3D Systems", 
            "Alpinestars", "Matrix", "Pirelli", "Roland", "Track Racer", "Canel's", 
            "Businesssolver", "XBOX", "MNTN", "Qatar Airways", "H Moser & Cie", "Eni", 
            "MSC Cruises", "R5 Turbo 3E", "Arctic Monkey", "ApeCoin", "Banco BRB", 
            "Castore", "INFINOX", "Mercado Libre", "Modo Casino", "New Era", "Oakberry", 
            "The Venetian Resort", "Lumi", "Jaaq", "M-Experiment", "Viagogo"
        ],
        stockSymbols: {
            "Microsoft": "MSFT",
            "Boeing": "BA",
            "3D Systems": "DDD",
            "Qatar Airways": "QAR.QA",
            "Mercado Libre": "MELI"
        }
    },
    "McLaren": {
        sponsors: [
            "British-American Tobacco", "Splunk", "Dell Technologies", "Alteryx", "Smartsheet", 
            "Medallia", "Arrow Electronics", "Richard Mille", "Hilton", "Unilever", "FxPro", 
            "Deloitte", "TUMI", "CNBC", "Ashurst", "Stratasys", "KAUST", "New Era", 
            "FAI Aviation Group", "Cisco", "AkzoNobel-Sikkens", "Castore", "SunGod", 
            "Google/Chrome", "Pirelli", "OKX", "Android", "DP World", "Jack Daniels", 
            "DeWalt", "K-Swiss", "Monster Energy", "Salesforce", "Estrella Galicia 0", 
            "Dropbox", "Workday", "Ecolab", "Airwallex", "ON Optimum Nutrition", 
            "Halo ITSM", "Udemy", "Reiss", "Alpinestar", "Mastercard", "Allwyn", 
            "Okta", "Goldman Sachs", "eBay", "Greene Tweed", "T-Mobile", "LEGO"
        ],
        stockSymbols: {
            "Splunk": "SPLK",
            "Dell Technologies": "DELL",
            "Smartsheet": "SMAR",
            "Hilton": "HLT",
            "Unilever": "UL",
            "Deloitte": "DLO",
            "Cisco": "CSCO",
            "Google": "GOOGL",
            "Salesforce": "CRM",
            "Dropbox": "DBX",
            "Workday": "WDAY",
            "Mastercard": "MA",
            "Okta": "OKTA",
            "Goldman Sachs": "GS",
            "eBay": "EBAY",
            "T-Mobile": "TMUS"
        }
    }
};

// Function to create team cards with hover dropdowns
function createTeamCards() {
    console.log('createTeamCards function called');
    const bodyBar = document.querySelector('.bodyBar');
    console.log('bodyBar element:', bodyBar);
    
    if (!bodyBar) {
        console.error('bodyBar element not found!');
        return;
    }
    
    bodyBar.innerHTML = ''; // Clear existing content
    console.log('Cleared bodyBar content');

    Object.keys(f1TeamsData).forEach(teamName => {
        const teamCard = document.createElement('div');
        teamCard.className = 'Team';
        teamCard.innerHTML = `
            <div class="team-header">
                <h3>${teamName}</h3>
                <div class="dropdown-arrow">▼</div>
            </div>
            <div class="sponsors-dropdown">
                <div class="sponsors-list">
                    ${f1TeamsData[teamName].sponsors.map(sponsor => {
                        const stockSymbol = f1TeamsData[teamName].stockSymbols[sponsor];
                        return `
                            <div class="sponsor-item">
                                <span class="sponsor-name">${sponsor}</span>
                                ${stockSymbol ? `<span class="stock-symbol">${stockSymbol}</span>` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
        bodyBar.appendChild(teamCard);
    });
    console.log('Team cards created successfully');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, creating team cards...');
    createTeamCards();
});

// Also try to run immediately in case DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createTeamCards);
} else {
    console.log('DOM already loaded, creating team cards immediately...');
    createTeamCards();
}

// Scroll functionality
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

function toggleDropdown(){
    document.getElementById("links").classList.toggle("show");
}

window.onclick = function (event) {
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