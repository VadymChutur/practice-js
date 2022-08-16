// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

// console.log(numbers);

// const numbers = [...[1, 2, 3], 5, 4];

// console.log(numbers);

/////////////////////////////////////////////////////////////////////////////

// const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.min(...temps));

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];

// const b = [...a];

// a[0].x = 1234;
// console.log(a);
// console.log(b);
// console.log(a[0] === b[0]);

//////////////////////////////////////////////////////////////////////////////

// const lastWeekTemps = [1, 2, 3];
// const curentWeekTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const alltemps = [...lastWeekTemps, ...curentWeekTemps, ...nextWeekTemps];

// console.log(alltemps);

//////////////////////////////////////////////////////////////////////////////
// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// // const c = Object.assign({}, a, b);

// const c = { ...a, ...b };

// console.log(c);

////////////////////////////////////////////////////////////////////////////

// const playlist = {
//   name: 'My super playlist',
//   raiting: 5,
//   tracks: ['track - 1', 'track - 2', 'track - 3'],
//   trackCount: 3,
// };

// // console.log(playlist);

// playlist.raiting = 4;

// const { raiting, name, tracks, trackCount, autor = 'qwe' } = playlist;

// console.log(name, raiting, tracks, autor);

// console.log(playlist.name, playlist.raiting, playlist.tracks, playlist.trackCount);

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/faces/twitter/r_oy/128.jpg',
//   stats: {
//     folowers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name: nameProfile,
//   tag,
//   location,
//   avatar,
//   stats: { folowers, views, likes },
// } = profile;

// console.log(nameProfile, tag, location, avatar, folowers, likes, views);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const rgb = [255, 100, 80];
// const [a, b, c] = rgb;

// console.log('red:', a, 'green:', b, 'blue:', c);

// const autorsList = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };

// const keys = Object.keys(autorsList);
// const entries = Object.entries(autorsList);

// for (const entry of entries) {
//   console.log(entry);

//   const nameAutor = entry[0];
//   const raitingAutor = entry[1];
//   console.log(nameAutor, raitingAutor);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const showProfile = function (userProfile) {
//   //   console.log(userProfile);

//   const { name: nameProfile, tag } = userProfile;
//   console.log(nameProfile, tag);
// };

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/faces/twitter/r_oy/128.jpg',
//   stats: {
//     folowers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// // console.log(nameProfile, tag, restProps);

// showProfile(profile);
