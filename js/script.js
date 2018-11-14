//==-- GLOBAL VARIABLES --==//
// let densityChoice, climateChoice, activityChoice; // Create dynamic variables to store user input choices
// let resultDestination = "", resultActivity = ""; // Create dynamic variables to store processed results and initialize as empty strings.


//==-- GLOBAL OBJECTS --==//

//== Randify Object ==//
// Stores all methods related to randomization logic
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

//== /Randify Object ==/


//== Application Object ==//
// Stores all methods related to the application logic
const app = {};

// User input variables
app.userDensity = "";
app.userClimate = "";
app.userActivity = "";
app.rsltDestination = "";
app.rsltActivity = "";

//-- METHOD: Get Inputs --//
// Obtains user input choices and stores into app variables
app.getInputs = () => {
  app.userDensity = $("input[name=density]:checked").val();
  app.userClimate = $("input[name=climate]:checked").val();
  app.userActivity = $("input[name=activity]:checked").val();
}


app.checkValid = () => {
  if (app.userDensity === "indifferent" && app.userClimate === "indifferent" && app.userActivity === "indifferent") {   // If all inputs are "indifferent"
    return 1;
  } else if (app.userDensity && app.userClimate && app.userActivity) { // If they are all truthy (i.e. valid)
    return 2;
  } else {
    return 3;
  }
}

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

//-- METHOD: Get Destination --//
// Generate a resulting destination based off user inputs (randomized already if input was "indifferent")
app.getDestination = () => app.rsltDestination = randify.arrElem(objDestinations[app.userDensity][app.userClimate]);

//-- METHOD: Get Activity --//
// Generate a resulting activity based off rsltDestination
app.getActivity = () => app.rsltActivity = randify.arrElem(objDestInfo[app.rsltDestination]["activities"][app.userActivity]);

//-- METHOD: Initialize Application --//
// Initialize the application
app.init = () => {
  $(".questions").on("submit", e => {
    e.preventDefault();
    app.getInputs();
    switch (app.checkValid()) {
      case 1:
        app.rsltDestination = "Staycation";
        app.userActivity = randify.objKey(objDestInfo.Staycation.activities);
        app.getActivity();
        console.log(`${app.rsltDestination} : ${app.rsltActivity}`);
        break;
      case 2:
        app.isIndecisive();
        app.getDestination();
        app.getActivity();
        console.log(`${app.rsltDestination} : ${app.rsltActivity}`);
        break;
      case 3:
        alert("Do you even want to go on vacation? Go answer all the questions please.");
        break;
      default:
        alert("An unknown error occurred.");
        console.log("This code should never get run");
        break;
    }
  });
};


// For resetting the form IF HAVE TIME
// app.reset = () => {
  //   app.userDensity = "";
  //   app.userClimate = "";
  //   app.userActivity = "";
  //   app.rsltDestination = "";
  //   app.rsltActivity = "";
  // }
  
  
//==-- DOM MANIPULATOR OBJECT --==//
// Stores all methods related to manipulating the DOM
const domManip = {};

// Variables for storing generated responses to push to the DOM
domManip.



//==-- DOCUMENT READY --==//
// Run app initializing when the document has been fully loaded
$(() => {
  app.init();
});