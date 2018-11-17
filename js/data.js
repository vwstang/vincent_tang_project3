//==-- Arrays to store possible results --==//
// 2D object containing arrays of vacation destinations
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

// Multi-Dimensional object containing destination information and arrays of activities
const objDestInfo = {
  Oslo: {
    country: "Norway",
    population: 673469,
    censusYear: 2018,
    activities: {
      sightseeing: [
        "Vigeland Sculpture Park",
        "Akershus Fortress",
        "Nordmarka"
      ],
      food: [
        "røkt laks (smoked salmon)",
        "kjøttboller (meatballs)",
        "krumkake (waffle cookie)"
      ]
    }
  },
  Brussels: {
    country: "Belgium",
    population: 1191604,
    censusYear: 2017,
    activities: {
      sightseeing: [
        "Grote Markt",
        "Belgian Royal Museum of Fine Arts",
        "Parc du Cinquantenaire"
      ],
      food: [
        "crevettes frises (gray shrimp)",
        "speculoos (spiced shortbread biscuits)",
        "moules-frites (mussels with fries)"
      ]
    }
  },
  "Hong Kong": {
    country: "China",
    population: 7448900,
    censusYear: 2018,
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
    censusYear: 2015,
    activities: {
      sightseeing: [
        "Óbidos Castle",
        "Porta de Vila",
        "Igreja de Santa Maria"],
      food: [
        "ginja (wine)",
        "caldo verde (Portuguese green soup)",
        "salada de polvo (octopus salad)"
      ]
    }
  },
  Seville: {
    country: "Spain",
    population: 703021,
    censusYear: 2011,
    activities: {
      sightseeing: [
        "Plaza de España",
        "Real Alcázar",
        "Catedral de Sevilla"
      ],
      food: [
        "solomillo al whiskey (pork loin with whiskey sauce)",
        "espinacas con garbanzos (spinach with chick peas)",
        "jamon iberico (Iberian ham)"
      ]
    }
  },
  Reykjavík: {
    country: "Iceland",
    population: 122853,
    censusYear: 2016,
    activities: {
      sightseeing: [
        "Hallgrímskirkja Church",
        "Tjörnin Pond",
        "Blue Lagoon"
      ],
      food: [
        "skyr (icelandic yogurt)",
        "hákarl (fermented shark)",
        "harðfiskur (dried fish)"
      ]
    }
  },
  Harbin: {
    country: "China",
    population: 10635971,
    censusYear: 2010,
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
    censusYear: 2016,
    activities: {
      sightseeing: [""],
      food: ["food1", "food2"]
    }
  },
  Yellowknife: {
    country: "Canada",
    population: 19569,
    censusYear: 2016,
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
    censusYear: "today",
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
    censusYear: 2016,
    activities: {
      sightseeing: ["beaches", "place2"],
      food: ["drinks", "place2"]
    }
  },
  Perth: {
    country: "Australia",
    population: 2022044,
    censusYear: 2016,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"]
    }
  },
  Oulu: {
    country: "",
    population: 0,
    censusYear: 0,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  "Kuala Lumpur": {
    country: "",
    population: 0,
    censusYear: 0,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  "Santa Maddalena": {
    country: "Italy",
    population: 0,
    censusYear: 0,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  Stepantsminda: {
    country: "Georgia",
    population: 1326,
    censusYear: 2014,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  "Shirakawa Village": {
    country: "Japan",
    population: 1668,
    censusYear: 2017,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  Split: {
    country: "Croatia",
    population: 178102,
    censusYear: 2011,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  "Mamanuca Islands": {
    country: "Fiji",
    population: 900,
    censusYear: 2017,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  "Sidi Bou Said": {
    country: "Tunisia",
    population: 5911,
    censusYear: 2014,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  "Zermatt": {
    country: "Switzerland",
    population: 5643,
    censusYear: 0,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  "Maui": {
    country: "Hawaii, USA",
    population: 144444,
    censusYear: 2010,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  "Stuttgart": {
    country: "Germany",
    population: 632743,
    censusYear: 2017,
    activities: {
      sightseeing: ["Porsche Museum", "place2"],
      food: ["food1", "food2"],
    }
  },
  "Bordeaux": {
    country: "France",
    population: 250776,
    censusYear: 2016,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  "Vientiane": {
    country: "Laos",
    population: 0,
    censusYear: 0,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  "Jeju Island": {
    country: "South Korea",
    population: 621550,
    censusYear: 2014,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  "Venice": {
    country: "Italy",
    population: 261905,
    censusYear: 2017,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  },
  "Minsk": {
    country: "Belarus",
    population: 1982444,
    censusYear: 2018,
    activities: {
      sightseeing: ["place1", "place2"],
      food: ["food1", "food2"],
    }
  }
};

// 2D array of phrases to be randomized with food activities
const arrPhrases = {
  info: [
    []
  ],
  sightseeing: [
    [1, " is a cool place in ", 2,". Go check it out! Bring back some cool pictures."],
    ["I heard that ", 1, " is worth visiting. It's totally Instagram worthy, so you can get some sick pics and post to your feed!"],
    ["You haven't been to ", 2," if you haven't seen ", 1]
  ],
  food: [
    ["If you've ever heard of ", 1, ", then you're in luck, because it's something you can easily find in ", 2, "."],
    ["As for food and drinks, you HAVE to go try ", 1, " when you're there. Trust me, it'll knock your socks off!"],
    ["When I went to ", 2, " back in [INSERT NON-EXISTENT DATE OF TRIP], I really enjoyed ", 1, ". You should definitely get it on your trip there."]
  ]
};