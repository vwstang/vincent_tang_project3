//-- Randify Object --//
// Object to store all randomizer functions as methods.
const randify = {};

//-- Random Object Key --//
// Takes in an object argument and returns a string containing the name of a randomly selected key of the object.
randify.objKey = obj => {
  const keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * keys.length)];
}

//-- Random Array Element --//
// Takes in an array argument and returns a random element within the array.
randify.arrElem = arr => arr[Math.floor(Math.random() * arr.length)];


//==-- Application --==//
const app = {};

app.getDestination = () => {
  // Store user inputs into lets
  let densityChoice = $("input[name=density]:checked").val();
  let climateChoice = $("input[name=climate]:checked").val();
  let activityChoice = $("input[name=activity]:checked").val();

  // Initialize empty variable to store result
  let resultDestination = "";

  // Check user indecisiveness by calling isIndecisive method
  app.isIndecisive(densityChoice, climateChoice, activityChoice);
}


app.isIndecisive = (densityChoice, climateChoice, activityChoice) => {
  // Catch the unique "indifferent" case, otherwise randify individual "indifferent" inputs
  if (densityChoice === "indifferent" && climateChoice === "indifferent" && activityChoice === "indifferent") {
    // Code for staycation
  } else {
    // Pseudocode: objDestinations[random densityChoice/user densityChoice][random climateChoice/user climateChoice] passed into randArrElem function to obtain a random destination based on user choices, which is then stored in the resultDestination variable.
    resultDestination = randify.arrElem(objDestinations
    /* Object Bracket Notation with nested if shorthand - checks if densityChoice is "indifferent", then obtains a random key within objDestinations, otherwise, use user input to obtain the object corresponding to the key within objDestinations */
    [((densityChoice === "indifferent") ? randify.objKey(objDestinations) : densityChoice)]
    /* Object Bracket Notation with nested if shorthand - checks if densityChoice is "indifferent", then obtains a random key within objDestinations, otherwise, use user input to obtain the object corresponding to the key within objDestinations */
    [((climateChoice === "indifferent") ? randify.objKey(objDestinations.urban) : climateChoice)]);
    console.log(resultDestination);
  }
}

//-- Initialize Application --//
// The overall application function for randomizing a destination result.
app.init = () => {
  $(".questions").on("submit", e => {
    e.preventDefault();
    app.getDestination();
  });
};

$(() => {
  app.init();
});