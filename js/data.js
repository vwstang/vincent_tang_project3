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
    varying: ["Óbidos", "Villnöß", "Stepantsminda"],
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
        "Ice and Snow World",
        "St. Sophia Church",
        "Yabuli Ski Resort"
      ],
      food: [
        "dalieba (Chinese bread made to resemble Russian rye bread)",
        "di san xian (fried potato, eggplant, pepper in garlic sauce)",
        "braised pork"
      ]
    }
  },
  Innsbruck: {
    country: "Austria",
    population: 130894,
    censusYear: 2016,
    activities: {
      sightseeing: [
        "The Nordkettenbahnen",
        "Swarovski Crystal Worlds",
        "Maria-Theresien Strasse"
      ],
      food: [
        "tafelspitz (boiled beef served with horseradish sauce",
        "Speckknödel (Austrian bacon dumplings)",
        "Kiachl (German fried dough pastry)"
      ]
    }
  },
  Yellowknife: {
    country: "Canada",
    population: 19569,
    censusYear: 2016,
    activities: {
      sightseeing: [
        "Aurora Village",
        "Cameron Falls Trail",
        "Northern Arts and Cultural Center"
      ],
      food: [
        "bison",
        "bannock",
        "arctic char (fish)"
      ]
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
    country: "British Overseas Territory",
    population: 60765,
    censusYear: 2016,
    activities: {
      sightseeing: [
        "Cayman Turtle Centre: Island Wildlife Encounter",
        "Seven Mile Beach",
        "Eden Rock & Devil's Grotto"
      ],
      food: [
        "cassava cake",
        "cracked conch",
        "fish rundown"
      ]
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
      sightseeing: [
        "Petronas Twin Towers",
        "Batu Caves",
        "Thean Hou Temples"
      ],
      food: [
        "nasi lemak (Malaysian rice dish)",
        "rendang (spicy meat dish)",
        "asam laksa (spicy noodle soup)"
      ],
    }
  },
  "Villnöß": {
    country: "Italy",
    population: 2552,
    censusYear: 2010,
    activities: {
      sightseeing: [
        "Sass Pordoi",
        "Passo Sella"],
      food: [
        "",
        ""
      ],
    }
  },
  Stepantsminda: {
    country: "Georgia",
    population: 1326,
    censusYear: 2014,
    activities: {
      sightseeing: [
        "Gergeti Trinity Church",
        "Gveleti Waterfalls",
        "Mount Kazbek"
      ],
      food: [
        "khinkali (Georgian dumplings)",
        "khachapuri (cheese-filled bread)",
        "kupati (pork sausage)"
      ],
    }
  },
  "Shirakawa Village": {
    country: "Japan",
    population: 1668,
    censusYear: 2017,
    activities: {
      sightseeing: [
        "Ogimachi Castle Observation Deck",
        "Ogimachi Gasshi-zukuri Minka-en Museum (open air museum with traditional style farmhouses)",
        "Mount Haku"
      ],
      food: [
        "tochi mochi (Japanese horse chestnut dessert)",
        "Hida beef soba (Japanese thin buckwheat noodles)",
        "Hida beef onigiri (Japanese rice balls)"
      ],
    }
  },
  Split: {
    country: "Croatia",
    population: 178102,
    censusYear: 2011,
    activities: {
      sightseeing: [
        "Diocletian's Palace",
        "St. Duje's Cathedral",
        "Marjan"
      ],
      food: [
        "pašticada (Dalmatian beef stew)",
        "paradizet (Dalmatian dessert)",
        "fritula (fried sweet dumpling)"
      ],
    }
  },
  "Mamanuca Islands": {
    country: "Fiji",
    population: 900,
    censusYear: 2017,
    activities: {
      sightseeing: [
        "Solevu Village",
        "Caves of Monuriki Island (film site of Tom Hanks movie Cast Away)",
        "Tropical Forests on Ngalito Island"
      ],
      food: [
        "kava (Fiji national drink)",
        "kokoda (mahi-mahi marinated in lemon or lime juice)",
        "palusami (fish or corned beef with coconut milk baked in taro leaves)"
      ],
    }
  },
  "Sidi Bou Said": {
    country: "Tunisia",
    population: 5911,
    censusYear: 2014,
    activities: {
      sightseeing: [
        "Palace Dar Nejma Ezzahra",
        "Carthaginian Ruins",
        "Baths of Antoninus Pius"
      ],
      food: [
        "brik (savoury filled pastries)",
        "grilled merguez (spicy sausage)",
        "mana-ich (Lebanese-style flat bread)"
      ],
    }
  },
  "Zermatt": {
    country: "Switzerland",
    population: 5643,
    censusYear: 2017,
    activities: {
      sightseeing: [
        "Matterhorn",
        "Gornergrat",
        "Matterhorn Museum - Zermatlantis"
      ],
      food: [
        "schüblig (dried sausage)",
        "rösti (Swiss potato fritter)",
        "raclettissima pizza (cheese with silverskin onions and gherkins pizza)"
      ],
    }
  },
  "Maui": {
    country: "Hawaii, USA",
    population: 144444,
    censusYear: 2010,
    activities: {
      sightseeing: [
        "Haleakala Crater",
        "Road to Hana",
        "Waianapanapa State Park"
      ],
      food: [
        "poi (paste made from taro)",
        "laulau (pork wrapped in taro leaves)",
        "poke (diced raw fish)"
      ],
    }
  },
  "Stuttgart": {
    country: "Germany",
    population: 632743,
    censusYear: 2017,
    activities: {
      sightseeing: [
        "Porsche Museum",
        "Wilhelma Zoological-Botanical Garden",
        "Killesbergturm"
      ],
      food: [
        "schwarzwälder schinken (black forest ham)",
        "spätzle (egg noodles)",
        "maultaschen (ravioli filled with minced meat, onions, spinach)"
      ],
    }
  },
  "Bordeaux": {
    country: "France",
    population: 250776,
    censusYear: 2016,
    activities: {
      sightseeing: [
        "Place de la Bourse",
        "Quais de Bordeaux",
        "La Cité du Vin"
      ],
      food: [
        "entrecote bordelaise (steak cooked in red wine sauce)",
        "canalés (vanilla and rum flavoured pastries)",
        "white asparagus"
      ],
    }
  },
  "Vientiane": {
    country: "Laos",
    population: 760000,
    censusYear: 2015,
    activities: {
      sightseeing: [
        "Pha That Luang",
        "Patuxai",
        "Haw Phra Kaew"
      ],
      food: [
        "klao niaw (sticky rice)",
        "laap (meat salad)",
        "sai oua (sausage snack)"
      ],
    }
  },
  "Jeju Island": {
    country: "South Korea",
    population: 621550,
    censusYear: 2014,
    activities: {
      sightseeing: [
        "Mount Hallasan",
        "Teddy Bear Museum",
        "Cheonjeyeon Waterfall and Seonimgro Bridge"
      ],
      food: [
        "galchiguk (hairtail fish soup)",
        "jeonbokjuk (rice porridge with abalone)",
        "kkwong-memil guksu (buckwheat noodles with pheasant meat)"
      ],
    }
  },
  "Venice": {
    country: "Italy",
    population: 261905,
    censusYear: 2017,
    activities: {
      sightseeing: [
        "Bascilia di San Marco",
        "Burano Island",
        "Ponte de Rilato"
      ],
      food: [
        "sarde in saor (sweet and sour sardines)",
        "risotto al nero di seppia (squid ink risotto)",
        "bigoli in salsa (whole wheat pasta with anchovie sauce)"
      ],
    }
  },
  "Minsk": {
    country: "Belarus",
    population: 1982444,
    censusYear: 2018,
    activities: {
      sightseeing: [
        "Bolshoi Opera and Ballet Theatre of Belarus",
        "Cathedral of the Holy Spirit",
        "National Library of Belarus"
      ],
      food: [
        "khaladnik (chilled beetroot borscht)",
        "draniki (essential potato latkes)",
        "babka (potato stew)"
      ],
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