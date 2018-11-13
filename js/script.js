//==-- Arrays to store possible results --==//
// 3D array of vacation destinations
const objDestinations = {
  urban: {
    hot: [],
    cold: []
  },
  suburban: {
    hot: [],
    cold: ["Innsbruck", "Reykjavik"]
  },
  rural: {
    hot: [],
    cold: []
  }
};

// 2D array of destination activities
const objActivities = {
  Oslo: {
    country: "Norway",
    sightseeing: [],
    food: []
  },
  London: {
    country: "Great Britain",
    sightseeing: [],
    food: []
  },
  Paris: {
    country: "France",
    sightseeing: [],
    food: []
  },
  Bangalore: {
    country: "India",
    sightseeing: [],
    food: []
  },
  "Hong Kong": {
    country: "China",
    sightseeing: [],
    food: []
  },
  "San Francisco": {
    country: "USA",
    sightseeing: [],
    food: []
  },
  Óbidos: {
    country: "Portugal",
    sightseeing: [],
    food: []
  },
  Reykjavík: {
    country: "Iceland",
    sightseeing: [],
    food: []
  },
  Harbin: {
    country: "China",
    sightseeing: [],
    food: []
  },
  Innsbruck: {
    country: "Austria",
    sightseeing: [],
    food: []
  },
  Yellowknife: {
    country: "Canada",
    sightseeing: [],
    food: []
  },
  Staycation: {
    country: "the safety and comfort of your own home",
    sightseeing: [],
    food: []
  }
}


//==-- Functions --==//

//-- Random Object Key --//
// Takes in an object argument and returns a string containing the name of a randomly selected key of the object.
const randObjKey = obj => {
  const keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * keys.length)];
}
