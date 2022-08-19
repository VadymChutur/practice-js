const numbers = [5, 10, 15, 20, 25];
// const doubleNums = numbers.map(function (number) {
//   console.log(number);

//   return number * 2;
// });

// console.log(doubleNums);
// // numbers.forEach(function (number, index, array) {
// //   console.log('number:', number);
// // });

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// const playersNames = players.map((player) => {
//   console.log(player);

//   return player.name;
// });

// console.log('playerNames', playersNames);

// const playerIds = players.map((player) => player.id);

// console.log('playerIds', playerIds);

// const playersOnline = players.map((player) => player.online);

// console.log('playerOnline', playersOnline);

// const playersUpdete = players.map((player) => ({ ...player, points: player.points * 1.1 }));

// console.table(playersUpdete);

// const playerIdToUpdeate = 'player-3';

// const updatePlayers = players.map((player) =>
//   //   if (playerIdToUpdeate === player.id) {
//   //     console.log('Find player');

//   //     return {
//   //       ...player,
//   //       timePlayed: player.timePlayed + 100,
//   //       points: player.points + 50,
//   //     };
//   //   }

//   //     return player;
//   playerIdToUpdeate === player.id
//     ? {
//         ...player,
//         timePlayed: player.timePlayed + 100,
//         points: player.points + 50,
//       }
//     : player
// );

// console.table(updatePlayers);

////////////////////////////////////////////////////////////////////////////////////////////
// filter true || false

// const filterdNumber = numbers.filter((number) => {
//   console.log(number);

//   return number > 15;
// });

// console.log(filterdNumber);

////////////////////////////////////////////////////////////////////////////////////////////

// const onlinePlayers = players.filter((player) => player.online);

// console.table(onlinePlayers);

// const offlinePlayers = players.filter((player) => !player.online);

// console.table(offlinePlayers);

// const hardcorePlayers = players.filter((player) => player.timePlayed > 250);

// console.table(hardcorePlayers);

////////////////////////////////////////////////////////////////////////////////////////////
// find

// const number = numbers.find((number) => number > 10);

// console.log(number);

// const playerToFind = 'player-3';

// const playerWithId = players.find((player) => player.id === playerToFind);

// console.log(playerWithId);

// const findPlayerById = (allPlayer, playerId) => {
//   return allPlayer.find((player) => player.id === playerId);
// };

// console.log(findPlayerById(players, 'player-4'));

/////////////////////////////////////////////////////////////////////////////////////////
// evry some

// const isAllOnline = players.every((player) => player.online);

// console.log(isAllOnline);

// const isAnyOnline = players.some((player) => player.online);

// const isHardcoreOnline = players.some((player) => player.timePlayed > 400);

// console.log(isAnyOnline);

// console.log(isHardcoreOnline);

///////////////////////////////////////////////////////////////////////////////////////////
// reduce

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// // const total = numbers.reduce((acc, number) => acc + number, 0);

// // console.log(total);

// const totalSalary = Object.values(salary).reduce(
//   (total, value) => value + total,
//   0
// );

// // console.log(totalSalary);

// const totalTimePlayed = players.reduce(
//   (totalTime, player) => totalTime + player.timePlayed,
//   0
// );

// console.log(totalTimePlayed);

/////////////////////////////////////////////////////////////////////////////////////////////
// sort

// const sortNumbers = numbers.sort();

// // console.log(sortNumbers);

// const letters = ['b', 'B', 'a', 'A'];

// // letters.sort();

// // console.log(letters);

// // numbers.sort((curEl, nexEl) => {
// // return nexEl - curEl;
// // });

// const copy = [...numbers].sort((a, b) => a - b);

// console.log(copy);

// const sortedByBestPlayeds = [...players].sort((prevPlayer, nextPlayer) => {
//   return prevPlayer.points - nextPlayer.points;
// });

// console.table(sortedByBestPlayeds);

// const byName = [...players].sort((a, b) => {
//   const result = a.name[0] > b.name[0];

//   if (result) {
//     return 1;
//   }

//   if (!result) {
//     return -1;
//   }
// });

// console.table(byName);

// console.log(numbers);

////////////////////////////////////////////////////////////////////////////////////////////
// flat flatMap

const array = [1, 2, 3, [(4, [5])], [6, 7]];

// console.log(array.flat());

const onlineAndSorted = players
  .filter((player) => player.online)
  .sort((playerA, playerB) => playerA.points - playerB.points);

console.table(onlineAndSorted);
