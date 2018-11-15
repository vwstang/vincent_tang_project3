//==-- Arrays to store possible results --==//
// 3D array of vacation destinations
const objDestinations = {
  urban: {
    hot: ["Hong Kong", "Kuala Lumpur", "Vientiane"],
    varying: ["Brussels", "Perth", "Stuttgart"],
    cold: ["Harbin", "Oslo", "Minsk"]
  },
  suburban: {
    hot: ["Seville", "Maui", "Venice"],
    varying: ["Split", "Bordeaux", "Jeju Island"],
    cold: ["Innsbruck", "Reykjavík", "Oulu"]
  },
  rural: {
    hot: ["Cayman Islands", "Mamanuca Islands", "Sidi Bou Said"],
    varying: ["Óbidos", "Santa Maddalena", "Stepantsminda"],
    cold: ["Yellowknife", "Shirakawa Village", "Zermatt"]
  }
};

// 2D array of destination activities
const objDestInfo = {
  Oslo: {
    country: "Norway",
    population: 673469,
    censusyear: 2018,
    activities: {
      sightseeing: ["oslosight1", "oslosight2", "oslosight3"],
      food: ["oslofood1", "oslofood2", "oslofood3"]
    }
  },
  Brussels: {
    country: "Belgium",
    population: 1191604,
    censusyear: 2017,
    activities: {
      sightseeing: [
        "brusselssight1",
        "brusselssight2",
        "brusselssight3"
      ],
      food: [
        "brusselsfood1",
        "brusselsfood2",
        "brusselsfood3"
      ]
    }
  },
  "Hong Kong": {
    country: "China",
    population: 7448900,
    censusyear: 2018,
    activities: {
      sightseeing: [
        "hksight1",
        "hksight2",
        "hksight3"
      ],
      food: [
        "hkfood1",
        "hkfood2",
        "hkfood3"
      ]
    }
  },
  Óbidos: {
    country: "Portugal",
    population: 3100,
    censusyear: 2015,
    activities: {
      sightseeing: [
        "Óbidos Castle; walk the wall",
        "obidossight2",
        "obidossight3"],
      food: ["Ginja"]
    }
  },
  Seville: {
    country: "Spain",
    population: 703021,
    censusyear: 2011,
    activities: {
      sightseeing: [
        "Plaza de España",
        "Real Alcázar",
        "Catedral de Sevilla"
      ],
      food: ["tapas"]
    }
  },
  Reykjavík: {
    country: "Iceland",
    population: 122853,
    censusyear: 2016,
    activities: {
      sightseeing: [""],
      food: ["food1", "food2"]
    }
  },
  Harbin: {
    country: "China",
    population: 10635971,
    censusyear: 2010,
    activities: {
      sightseeing: [
        "harbinsight1",
        "harbinsight2",
        "harbinsight3"
      ],
      food: [
        "harbinfood1",
        "harbinfood2",
        "harbinfood3"
      ]
    }
  },
  Innsbruck: {
    country: "Austria",
    population: 130894,
    censusyear: 2016,
    activities: {
      sightseeing: [""],
      food: ["food1", "food2"]
    }
  },
  Yellowknife: {
    country: "Canada",
    population: 19569,
    censusyear: 2016,
    activities: {
      sightseeing: [
        "Aurora Borealis is visible throughout winter months"
      ],
      food: ["food1", "food2"]
    }
  },
  Staycation: {
    country: "the safety and comfort of your own home",
    population: "your family members",
    censusyear: "today",
    activities: {
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
    }
  },
  "Cayman Islands": {
    country: null,
    population: 60765,
    censusyear: 2016,
    activities: {
      sightseeing: ["beaches", "place2"],
      food: ["drinks", "place2"]
    }
  },
  Perth: {
    country: "Australia",
    population: 2022044,
    censusyear: 2016,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"]
    }
  },
  Oulu: {
    country: "",
    population: 0,
    censusyear: 0,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  "Kuala Lumpur": {
    country: "",
    population: 0,
    censusyear: 0,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  "Santa Maddalena": {
    country: "Italy",
    population: 0,
    censusyear: 0,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  Stepantsminda: {
    country: "Georgia",
    population: 1326,
    censusyear: 2014,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  "Shirakawa Village": {
    country: "Japan",
    population: 1668,
    censusyear: 2017,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  Split: {
    country: "Croatia",
    population: 178102,
    censusyear: 2011,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  "Mamanuca Islands": {
    country: "Fiji",
    population: 900,
    censusyear: 2017,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  "Sidi Bou Said": {
    country: "Tunisia",
    population: 5911,
    censusyear: 2014,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  "Zermatt": {
    country: "Switzerland",
    population: 5643,
    censusyear: 0,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  "Maui": {
    country: "Hawaii, USA",
    population: 144444,
    censusyear: 2010,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  "Stuttgart": {
    country: "Germany",
    population: 632743,
    censusyear: 2017,
    activities: {
      sightseeing: ["Porsche Museum", "place2"],
      food: ["food1", "food2"],
    }
  },
  "Bordeaux": {
    country: "France",
    population: 250776,
    censusyear: 2016,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  "Vientiane": {
    country: "Laos",
    population: 0,
    censusyear: 0,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  "Jeju Island": {
    country: "South Korea",
    population: 621550,
    censusyear: 2014,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  "Venice": {
    country: "Italy",
    population: 261905,
    censusyear: 2017,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  "Minsk": {
    country: "Belarus",
    population: 1982444,
    censusyear: 2018,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  }
};

// 2D array of phrases to be randomized with food activities
const arrFoodPhrases = [
  ["If you've ever heard of ", 1, ", then you're in luck, because it's something you can easily find in ", 2, "."],
  ["As for food and drinks, you HAVE to go try ", 1, " when you're there. Trust me, it'll knock your socks off!"],
  ["When I went to ", 2, " back in [INSERT NON-EXISTENT DATE OF TRIP], I really enjoyed ", 1, ". You should definitely get it on your trip there."]
];