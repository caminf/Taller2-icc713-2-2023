// you can use this variable like this: videoGames.N64 to get the N64 video games list
const videoGames = require('./load-games.js');

// DEMO CODE
const consoleToShow = 'PS2';
const genreToShow = 'Adventure';
const gameToFind = 'Metroid Fusion';
const random = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const recommendationsPerConsole = [];
const recommendationsPerGenre = [];
const recommendationsPerConsoleAndGenre = [];

separar();
function recommendationPerConsole(consoleToShow) {
  switch (consoleToShow) {
    case 'PS2':
      recommendationsPerConsole.push(videoGames.PS2[random(0, videoGames.PS2.length)]);
      recommendationsPerConsole.push(videoGames.PS2[random(0, videoGames.PS2.length)]);
      break;
    case 'GBA':
      recommendationsPerConsole.push(videoGames.GBA[random(0, videoGames.GBA.length)]);
      recommendationsPerConsole.push(videoGames.GBA[random(0, videoGames.GBA.length)]);

      break;
    case 'N64':
      recommendationsPerConsole.push(videoGames.N64[random(0, videoGames.N64.length)]);
      recommendationsPerConsole.push(videoGames.N64[random(0, videoGames.N64.length)]);
      break;
    default:
      console.log("consola no encontrada");
  }
  recommendationsPerConsole.forEach(recommendation => {
    console.log(`Nombre: ${recommendationsPerConsole.name} - Consola: ${recommendationsPerConsole.video_console} - Género: ${recommendationsPerConsole.genres}`)
  })
}
// recommendationPerConsole(consoleToShow);

separar();

function recommendationPerGenre(genreToShow) {
  const GBAGamesGenre = videoGames.GBA.filter(g => g.genres.includes(genreToShow));
  const PS2GamesGenre = videoGames.PS2.filter(g => g.genres.includes(genreToShow));
  const N64GamesGenre = videoGames.N64.filter(g => g.genres.includes(genreToShow));
  const gamesByGenre = GBAGamesGenre.concat(PS2GamesGenre, N64GamesGenre);

  recommendationsPerGenre.push(gamesByGenre[random(0, gamesByGenre.length)]);
  recommendationsPerGenre.push(gamesByGenre[random(0, gamesByGenre.length)]);
  recommendationsPerGenre.push(gamesByGenre[random(0, gamesByGenre.length)]);
  recommendationsPerGenre.forEach(game => {
    console.log(`Nombre: ${game.name} - Consola: ${game.video_console} - Género: ${game.genres}`)
  })
}
// recommendationPerGenre(genreToShow);
separar();
function recommendationPerConsoleAndGenre(consoleToShow) {

}

separar();
function searchGameByName(gameToFind){
    const games = videoGames.GBA.concat(videoGames.N64,videoGames.PS2);
    const foundGame = games.find((game) => game.name.toLowerCase === gameToFind.toLowerCase)
    console.log(`Consola: ${foundGame.video_console} - Género: ${foundGame.genres}`);
};
searchGameByName(gameToFind);

separar();
function searchGamesByGenre(genreToShow) {
  //boolean multigenero
  videoGames.GBA.forEach((game) => {
    if (game.genres.length > 1) { game.isMultigenre = true; } else { game.isMultigenre = false }
  });
  videoGames.PS2.forEach((game) => {
    if (game.genres.length > 1) { game.isMultigenre = true; } else { game.isMultigenre = false }
  });
  videoGames.N64.forEach((game) => {
    if (game.genres.length > 1) { game.isMultigenre = true; } else { game.isMultigenre = false }
  });

  const GBAGamesGenre = videoGames.GBA.filter(g => g.genres.includes(genreToShow));
  const PS2GamesGenre = videoGames.PS2.filter(g => g.genres.includes(genreToShow));
  const N64GamesGenre = videoGames.N64.filter(g => g.genres.includes(genreToShow));
  const gamesByGenre = GBAGamesGenre.concat(PS2GamesGenre, N64GamesGenre);

  gamesByGenre.forEach(game => {
    console.log(`Nombre: ${game.name} - Consola: ${game.video_console} - Género: ${game.genres} - Multigénero: ${game.isMultigenre}`)
  })
}

// searchGamesByGenre(genreToShow);




function separar() {
  console.log("-------------------------------------------------------------------------------------------------------------")
}


// // Show all video games from specific console
// function showVideoGamesFromConsole(consoleToShow) {
//   console.log(videoGames[consoleToShow]);
// }

// // Show all video games by console
// function showVideoGamesByConsole() {
//   console.log(videoGames.GBA);
//   console.log(videoGames.PS2);
//   console.log(videoGames.N64);
// }

// showVideoGamesFromConsole(consoleToShow);

// showVideoGamesByConsole(); 