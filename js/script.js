//==-- Arrays to store possible results --==//
// 3D array of vacation destinations
const objDestinations = {
  urban: {
    hot: ["Hong Kong","Kuala Lumpur","Bangaluru"],
    varying: ["London","Melbourne"],
    cold: ["Harbin", "Oslo"]
  },
  suburban: {
    hot: ["Seville","Honolulu"],
    varying: [""],
    cold: ["Innsbruck","Reykjavík","Oulu"]
  },
  rural: {
    hot: ["Cayman Islands"],
    varying: ["Óbidos","Santa Maddalena","Stepantsminda"],
    cold: ["Yellowknife","Shirakawa Village"]
  }
};

// 2D array of destination activities
const objActivities = {
  Oslo: {
    country: "Norway",
    population: 673469,
    censusyear: 2018,
    sightseeing: [""],
    food: ["food1", "food2"]
  },
  London: {
    country: "United Kingdom",
    population: 8825000,
    censusyear: 2017,
    sightseeing: [""],
    food: ["food1", "food2"]
  },
  Paris: {
    country: "France",
    population: 2206488,
    censusyear: 2018,
    sightseeing: [""],
    food: ["food1", "food2"]
  },
  Bangaluru: {
    country: "India",
    population: 12339447,
    censusyear: 2017,
    sightseeing: ["place1","place2"],
    food: ["food1", "food2"]
  },
  "Hong Kong": {
    country: "China",
    population: 7448900,
    censusyear: 2018,
    sightseeing: [""],
    food: ["food1", "food2"]
  },
  "San Francisco": {
    country: "USA",
    population: 884363,
    censusyear: 2017,
    sightseeing: [""],
    food: ["food1", "food2"]
  },
  Óbidos: {
    country: "Portugal",
    population: 11617,
    censusyear: 2015,
    sightseeing: [""],
    food: ["ginja"]
  },
  Seville: {
    country: "Spain",
    population: 703021,
    censusyear: 2011,
    sightseeing: [
      "Plaza de España",
      "Plaza de toros de la Real Maestranza de Caballería de Sevilla - the oldest bullring in Spain"
    ],
    food: ["tapas"]
  },
  Reykjavík: {
    country: "Iceland",
    population: 122853,
    censusyear: 2016,
    sightseeing: [""],
    food: ["food1", "food2"]
  },
  Harbin: {
    country: "China",
    population: 10635971,
    censusyear: 2010,
    sightseeing: [""],
    food: ["food1", "food2"]
  },
  Innsbruck: {
    country: "Austria",
    population: 130894,
    censusyear: 2016,
    sightseeing: [""],
    food: ["food1", "food2"]
  },
  Yellowknife: {
    country: "Canada",
    population: 19569,
    censusyear: 2016,
    sightseeing: ["Aurora Borealis is visible throughout winter months"],
    food: ["food1","food2"]
  },
  Staycation: {
    country: "the safety and comfort of your own home",
    population: "your family members",
    censusyear: "today",
    sightseeing: [
      "watch TV",
      "play video games",
      "play with your dog",
      "play with your cat"
    ],
    food: [
      "Might as well microwave yourself some Kraft Dinner and call it a night.",
      "Just go boil some water and cook some instant noodles."
    ]
  },
  "Cayman Islands": {
    country: null,
    population: 60765,
    censusyear: 2016,
    sightseeing: ["beaches","place2"],
    food: ["drinks","place2"]
  },
  "Melbourne": {
    country: "Australia",
    population: 5000000,
    censusyear: 2016,
    sightseeing: ["place1","place2"],
    food: ["food1","food2"]
  },
  "Honolulu": {
    country: "USA",
    population: 0,
    censusyear: 0,
    sightseeing: ["place1","place2"],
    food: ["food1","food2"]
  },
  "Oulu": {
    country: "",
    population: 0,
    censusyear: 0,
    sightseeing: ["place1","place2"],
    food: ["food1","food2"],
  },
  "Kuala Lumpur": {
    country: "",
    population: 0,
    censusyear: 0,
    sightseeing: ["place1","place2"],
    food: ["food1","food2"],
  },
  "Santa Maddalena": {
    country: "Italy",
    population: 0,
    censusyear: 0,
    sightseeing: ["place1","place2"],
    food: ["food1","food2"],
  },
  "Stepantsminda": {
    country: "Georgia",
    population: 1326,
    censusyear: 2014,
    sightseeing: ["place1","place2"],
    food: ["food1","food2"],
  },
  "Shirakawa Village": {
    country: "Japan",
    population: 1668,
    censusyear: 2017,
    sightseeing: ["place1","place2"],
    food: ["food1","food2"],
  }
}


//==-- Functions --==//

//-- Random Object Key --//
// Takes in an object argument and returns a string containing the name of a randomly selected key of the object.
const randObjKey = obj => {
  const keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * keys.length)];
}

//-- Random Array Element --//
// Takes in an array argument and returns a random element within the array.
const randArrElem = arr => arr[Math.floor(Math.random() * arr.length)];
