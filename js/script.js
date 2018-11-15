/*
 *========================
 *==== GLOBAL OBJECTS ====
 *========================
 */

//==-- RANDIFY OBJECT --==//
// Stores all methods related to randomization logic
const randify = {};

//== METHOD: Random Object Key ==//
// Takes in an object argument and returns a string containing the name of a randomly selected key of the object.
randify.objKey = obj => {
  const keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * keys.length)];
}

//== METHOD: Random Array Element ==//
// Takes in an array argument and returns a random element within the array.
randify.arrElem = arr => arr[Math.floor(Math.random() * arr.length)];

//== METHOD: Random Phrase Generator ==//
// Takes in an array of food items (from objDestInfo) and returns a string containing a (hopefully) grammatically correct sentence.
// This METHOD is currently IMPURE - might just stay that way though.
randify.foodPhrase = () => {
  let arrPhrase = randify.arrElem(arrFoodPhrases);

  const strPhrase = arrPhrase.reduce((accum,elem) => {
    switch (elem) {
      case 1:
        accum = accum + app.rsltActivity;
        break;
      case 2:
        accum = accum + app.rsltDestination;
        break;
      default:
        accum += elem;
        break;
    }
    return accum;
  });
  return strPhrase;
};

//==-- /RANDIFY OBJECT --==/


//==-- RESULT PRINTER OBJECT --==//
// Stores all methods related to generating and printing the results
const rsltPrinter = {};

//== METHOD: Paste HTML (to DOM) ==//
// Takes a string argument formatted as markup and 
rsltPrinter.pasteHTML = (clipboardItem,htmlTag) => {
  const mkupItem = `<${htmlTag}>${clipboardItem}</${htmlTag}>`;
  $(".results").find(".wrapper").append(mkupItem);
}

//== METHOD: Generate Result ==//
// Generates the result section and append to DOM
rsltPrinter.genResults = (destination, activityType, activity) => {
  const genHeader = destination;
  const genInfo = `${destination} is a beautiful place in ${objDestInfo[destination].country}. It has a population of ${objDestInfo[destination].population} (as of ${objDestInfo[destination].censusYear}), perfect for your love of ${app.userDensity} locations.`
  let genAct;
  if (activityType === "food") {
    genAct = randify.foodPhrase();
  } else if (activityType === "sightseeing") {
    genAct = randify.arrElem(objDestInfo[destination].activities[activityType]);
  } else {
    // This code should not run technically. This statement can be scaled if more activity choices were implemented.
    console.log("What?");
  }
  rsltPrinter.pasteHTML(genHeader, "h2");
  rsltPrinter.pasteHTML(genInfo, "p");
  rsltPrinter.pasteHTML(genAct, "p");
}

//==-- /RESULT PRINTER OBJECT --==//


//==-- APPLICATION OBJECT --==//
// Stores all methods related to the application logic
const app = {};

// User input variables
app.userDensity = "";
app.userClimate = "";
app.userActivity = "";
app.rsltDestination = "";
app.rsltActivity = "";

//== METHOD: Get Inputs ==//
// Obtains user input choices and stores into app variables
app.getInputs = () => {
  app.userDensity = $("input[name=density]:checked").val();
  app.userClimate = $("input[name=climate]:checked").val();
  app.userActivity = $("input[name=activity]:checked").val();
}

//== METHOD: Check Validity ==//
// Checks if the user inputs are valid:
// 1) If all inputs are "indifferent", then return case 1 and suggest a staycation because the user is lazy.
// 2) If all inputs are truthy (i.e. no inputs are left unselected i.e. valid inputs), then return case 2 and run the intended logic.
// 3) Otherwise, one or two inputs have not been selected. Return case 3 and yell at user to complete the form.
app.checkValid = () => {
  if (app.userDensity === "indifferent" && app.userClimate === "indifferent" && app.userActivity === "indifferent") {
    return 1;
  } else if (app.userDensity && app.userClimate && app.userActivity) {
    return 2;
  } else {
    return 3;
  }
}

//== METHOD: Replace indecisive choices ==//
// Checks for 
app.isIndecisive = () => {
  if (app.userDensity === "indifferent") {
    app.userDensity = randify.objKey(objDestinations);
  }
  if (app.userClimate === "indifferent") {
    app.userClimate = randify.objKey(objDestinations[app.userDensity]);
  }
  if (app.userActivity === "indifferent") {
    app.userActivity = randify.objKey(objDestInfo.Staycation.activities);
  }
}

//== METHOD: Get Destination ==//
// Generate a resulting destination based off user inputs (randomized already if input was "indifferent")
app.getDestination = () => app.rsltDestination = randify.arrElem(objDestinations[app.userDensity][app.userClimate]);

//== METHOD: Get Activity ==//
// Generate a resulting activity based off rsltDestination
app.getActivity = () => app.rsltActivity = randify.arrElem(objDestInfo[app.rsltDestination]["activities"][app.userActivity]);

//== METHOD: Initialize Application ==//
// Initialize the application
app.init = () => {
  $(".questions").on("submit", e => {
    e.preventDefault();
    app.getInputs();
    switch (app.checkValid()) {
      // Case 1: Suggest a staycation because the user is lazy.
      case 1:
        app.rsltDestination = "Staycation";
        app.userActivity = randify.objKey(objDestInfo.Staycation.activities);
        app.getActivity();
        console.log(`${app.rsltDestination} : ${app.rsltActivity}`);
        break;
      // Case 2: Run the intended logic.
      case 2:
        app.isIndecisive();
        app.getDestination();
        app.getActivity();
        console.log(`${app.rsltDestination} : ${app.rsltActivity}`);
        rsltPrinter.genResults(app.rsltDestination, app.userActivity, app.rsltActivity);
        break;
      // Case 3: Yell at the user for not even completing the form.
      case 3:
        alert("Do you even want to go on vacation? Go answer all the questions please.");
        break;
      // Default: This code should never actually run.
      default:
        alert("An unknown error occurred.");
        console.log("This code should never get run");
        break;
    }
  });
};

//==-- /APPLICATION OBJECT --==//


/*
 *========================
 *==== DOCUMENT READY ====
 *========================
 */

// Run app initializing when the document has been fully loaded
$(() => {
  app.init();
});