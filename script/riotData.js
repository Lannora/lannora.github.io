const RIOT_API_KEY = '';

// Example summoner name
const summonerName = 'Lannora';
const region = 'euw1';

async function fetchSummonerData() {
    const res = await fetch(`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${RIOT_API_KEY}`);
    const data = await res.json();
    document.getElementById('stats-card').innerHTML = `
    <h3>${data.name}</h3>
    <p>Level: ${data.summonerLevel}</p>
    <p>ID: ${data.id}</p>
  `;
}

fetchSummonerData();