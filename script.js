//1a
const mcuShows = [`Lokie`, `Moon Knight`];

//1b
const starWarsShows = [`The Mandalorian`, `The Book of Boba Fett`];

//1c
const disneyPlusShows = [
  ...mcuShows,
  ...starWarsShows,
  "The Beatles: Get Back",
];

//1d
console.log(disneyPlusShows);

//2a
const netflixMovies = {
  action: `Extraction`,
  crime: `The Irishman`,
};

//2b
const amazonPrimeMovies = {
  action: `Tomorrow War`,
  drama: `One Night in Miama`,
};

//2c
const streamingMovies = {
  ...amazonPrimeMovies,
  ...netflixMovies,
  musical: `Hamilton`,
};

//2d
console.log(streamingMovies);

//3a
const disneyJunior = [
  `Mickey Mouse Clubhouse`,
  `Spidey and His Amazing Friends`,
];

//3b
const [mickey, spidey] = disneyJunior;

//3c
console.log(disneyJunior);

//4a
const avengers = {
  warMachine: `James Rhodes`,
  theHulk: `Bruce Banner`,
};
//4b
const { warMachine, theHulk } = avengers;

//4c
console.log(warMachine, theHulk);

//4d
const moreAvengers = {
  blackWidow: `Natasha Romanoff`,
  hawkeye: `Clint Barton`,
  ironMan: `Tony Stark`,
};

//4e
const { nat, ...others } = moreAvengers;

//4f
console.log(nat, others);

// Bonus

//5a

const bonus = {
  first: [1, 2, 3],
  second: [4, 5, 6],
  third: [7, 8, 9],
};

const { first, second, third } = bonus;

const all = [...first, ...second, ...third];
console.log(all);

const one = all[0];
const two = all[1];
const three = all[2];
const four = all[3];
const five = all[4];
const six = all[5];
const seven = all[6];
const eight = all[7];
const nine = all[8];

console.log(one, two, three, four, five, six, seven, eight, nine);

//OR

// const all = [...bonus.first, ...bonus.second, ...bonus.third];

// const [one, two, three, four, five, six, seven, eight, nine] = all;

// console.log(all);
