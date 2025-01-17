function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  }
  
  

  
  function numPointsScored(players) {
    let game = gameObject();
    if(game.home.players[players]) {
    return game.home.players[players].points;
    } else if(game.away.players[players]) {
      return game.away.players[players].points;
  } else {
    return 'player not found.';
}
  }

  function shoeSize(players){
    let game = gameObject();

    if(game.home.players[players]) {
      return game.home.players[players].shoe;
    } else if(game.away.players[players]) {
      return game.away.players[players].shoe;
    }else {
      return 'shoe not found.';
    }
  }

  function teamColors(teamName){
  let game = gameObject();
  if(game.home.teamName === teamName){
    return game.home.colors;
  }else if(game.away.teamName === teamName) {
    return game.away.colors;
 } else {
    return 'cant find team';
}
}

function teamNames() {
  let game = gameObject();
  let teams = [];
  teams.push(game.home.teamName);
  teams.push(game.away.teamName);
  return teams;
}

function PlayersNumbers(teamName) {
  let game = gameObject();
  let jerseyNumbers = [];

  if(game.home.teamName === teamName) {
    for(let key in game.home.players) {
      jerseyNumbers.push(game.home.players[key].number);
    }
   } else {
      for(let key in game.away.players) {
      jerseyNumbers.push(game.away.players[key].number);
  }
}
  return jerseyNumbers;
}

function playerStatus(playerName) {
  let game = gameObject();
  if(game.home.players[playerName]) {
    return game.home.players[playerName];
} else if(game.away.players[playerName]) {
    return game.away.players[playerName];
} else {
  return 'cant find player';
}
}

function bigShoeRebounds() {
let game = gameObject();
let largestShoe = 0;
let largestPlayer;

for(let key in game.home.players) {
  let player = game.home.players[key];
  if(player.shoe > largestShoe){
   
    largestPlayer = player;
  }
}
for(let key in game.away.players) {
  let player = game.away.players[key];
  if(player.shoe > largestShoe) {
   
    largestPlayer = player;
  }
}
return largestPlayer.rebounds
}