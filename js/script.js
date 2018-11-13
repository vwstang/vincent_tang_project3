//==-- Arrays to store possible results --==//
// 3D array of vacation destinations
const objDestinations = {
  urban: {
    hot: ["Hong Kong"],
    varying: ["London"],
    cold: ["Harbin"]
  },
  suburban: {
    hot: [],
    varying: [],
    cold: ["Innsbruck", "Reykjavik"]
  },
  rural: {
    hot: [],
    varying: ["Óbidos"],
    cold: ["Yellowknife"]
  }
};

// 2D array of destination activities
const objActivities = {
  Oslo: {
    country: "Norway",
    population: 673469,
    censusyear: 2018,
    sightseeing: [],
    food: []
  },
  London: {
    country: "Great Britain",
    population: 0,
    censusyear: 0,
    sightseeing: [],
    food: []
  },
  Paris: {
    country: "France",
    population: 0,
    censusyear: 0,
    sightseeing: [],
    food: []
  },
  Bangalore: {
    country: "India",
    population: 12339447,
    censusyear: 2017,
    sightseeing: [],
    food: []
  },
  "Hong Kong": {
    country: "China",
    population: 7448900,
    censusyear: 2018,
    sightseeing: [],
    food: []
  },
  "San Francisco": {
    country: "USA",
    population: 0,
    censusyear: 0,
    sightseeing: [],
    food: []
  },
  Óbidos: {
    country: "Portugal",
    population: 11617,
    censusyear: 2015,
    sightseeing: [],
    food: []
  },
  Reykjavík: {
    country: "Iceland",
    population: 122853,
    censusyear: 2016,
    sightseeing: [],
    food: []
  },
  Harbin: {
    country: "China",
    population: 10635971,
    censusyear: 2010,
    sightseeing: [],
    food: []
  },
  Innsbruck: {
    country: "Austria",
    population: 0,
    censusyear: 0,
    sightseeing: [],
    food: []
  },
  Yellowknife: {
    country: "Canada",
    population: 0,
    censusyear: 0,
    sightseeing: [],
    food: []
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
      "Kraft Dinner",
      "instant noodles"
    ]
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
