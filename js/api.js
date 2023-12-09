const key = "739D1FCA95D6DF76CA2B014DA54ECEB1"

const form = document.querySelector(".form");
const username = document.getElementById("username");
const avatar = document.getElementById("avatar");


async function GetPlayerSummaries(steamid) {
    const url = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${key}&steamids=${steamid}`;
    console.log(url);
    const request = new Request(url);
    console.log(request);
    const response = await fetch(request);
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
}

async function getRecentlyPlayedGames(steamid) {
    const url = `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${key}&steamid=${steamid}`;
    const request = new Request(url);
    const response = await fetch(request);
    const data = await response.json();
    return data;
}


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const steamid = document.querySelector("#steamid").value;
    GetPlayerSummaries(steamid).then((data) => {
        username.innerHTML = data.response.players[0].personaname;
        avatar.src = data.response.players[0].avatarfull;
    });
});