// F1 Teams and their sponsors data - will be loaded from sponsors.json
let f1TeamsData = {};

// Load data from sponsors.json
async function loadSponsorsData() {
    try {
        const response = await fetch('sponsors.json');
        if (!response.ok) throw new Error("Could not fetch sponsors data");
        
        const data = await response.json();
        f1TeamsData = data;
        return data;
    } catch (error) {
        console.error('Error loading sponsors data:', error);
        return {};
    }
}

// Function to create team cards
async function createTeamCards() {
    const bodyBar = document.querySelector('.bodyBar');
    if (!bodyBar) {
        console.error('bodyBar element not found!');
        return;
    }

    // Load sponsors data first
    await loadSponsorsData();
    
    bodyBar.innerHTML = ''; // Clear previous content

    Object.keys(f1TeamsData).forEach((teamName, index) => {
        const teamData = f1TeamsData[teamName];
        const dropId = `drop${index + 1}`;

        const teamCard = document.createElement('div');
        teamCard.className = 'Team drip';
        teamCard.innerHTML = `
            <div class="team-header" onclick="toggleDropdown('${dropId}')">
                <h3>${teamName}</h3>
                <div class="dropdown-arrow">▼</div>
            </div>
            <div id="${dropId}" class="sponsors-dropdown content">
                ${teamData.map(sponsor => {
                    return `
                        <div class="sponsor-item" onclick="fetchData('${sponsor.Code}', '${dropId}')">
                            <span class="sponsor-name">${sponsor.Sponsor}</span>
                            <span class="stock-symbol">${sponsor.Code}</span>
                            <span class="stock-price">$${sponsor.Price}</span>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
        bodyBar.appendChild(teamCard);
    });
}

// Toggle dropdown function
function toggleDropdown(dropId) {
    const drop = document.getElementById(dropId);
    if (drop) drop.classList.toggle('show');
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

// Navbar scroll effect
let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
    const navbar = document.getElementById("NavBar"); // match your HTML
    if (!navbar) return;

    const currentScrollPos = window.pageYOffset;
    navbar.style.top = prevScrollPos > currentScrollPos ? "0" : "-80px";
    prevScrollPos = currentScrollPos;
};

// Close dropdowns when clicking outside
window.onclick = function (event) {
    if (!event.target.closest('.drip')) {
        document.querySelectorAll('.content.show').forEach(drop => drop.classList.remove('show'));
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', createTeamCards);


async function fetchStockPrice(symbol) {
    if (!symbol) return null;
    
    const apiToken = 'Ar4HLWBos-zpGsZDTLGW';
    const url = `https://eodhd.com/api/real-time/${symbol}?api_token=${apiToken}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data && data.close) {
            return parseFloat(data.close);
        } else {
            throw new Error('Invalid data received from API');
        }
    } catch (error) {
        console.error(`Error fetching stock price for ${symbol}:`, error);
        return null;
    }
}

// Enhanced createTeamCards function with stock price integration
async function createTeamCardsWithPrices() {
    const bodyBar = document.querySelector('.bodyBar');
    if (!bodyBar) {
        console.error('bodyBar element not found!');
        return;
    }

    bodyBar.innerHTML = ''; // Clear existing content

    for (const [teamName, teamData] of Object.entries(f1TeamsData)) {
        const teamCard = document.createElement('div');
        teamCard.className = 'Team';
        teamCard.innerHTML = `
            <div class="team-header">
                <h3>${teamName}</h3>
                <div class="dropdown-arrow">▼</div>
            </div>
            <div class="sponsors-dropdown">
                <div class="sponsors-list">
                    ${await Promise.all(teamData.sponsors.map(async (sponsor) => {
                        const stockSymbol = teamData.stockSymbols[sponsor];
                        const stockPrice = stockSymbol ? await fetchStockPrice(stockSymbol) : null;
                        return `
                            <div class="sponsor-item">
                                <span class="sponsor-name">${sponsor}</span>
                                ${stockPrice !== null ? `<span class="stock-price">$${stockPrice.toFixed(2)}</span>` : ''}
                            </div>
                        `;
                    }))}
                </div>
            </div>
        `;
        bodyBar.appendChild(teamCard);
    }
}