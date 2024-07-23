// 5 variables
// one string
const locationWithBasketball = "Community Center";

// one number
const basketballCount = 5;

// one boolean
// This variable indicates if the location I visited had basketballs or not
let basketballAvailable = false;

// one array with strings 
const locations = ["School Gym", "Local Park", "Community Center"];

// one object
// Main character of the story
const person = {
  name: "Kevin",
  age: 29,
  role: "amateur basketball player",
};

// Minimum 3 functions. At least 1 receives a parameter
// Checks if the location from the array has basketballs.
// If it does, it will set the variable basketballAvailable to true
// otherwise, the variable will be false
function checkForBasketball(location) {
  if (location === locationWithBasketball) {
    basketballAvailable = true;
  } else {
    basketballAvailable = false;
  }
}

// This function checks if the variable basketballAvailable is true
// If it is, it logs to the console a version of the story where I found the basketballs
// Otherwise, it displays the version where the basketballs were not found
function describeVisit(location) {
  if (basketballAvailable === true) {
    console.log(`
      Upon arriving at the ${location}, I immediately saw the basketballs 
      we needed. I was pumped up and ready to hit the court.
    `);
  } else {
    console.log(`
      I headed to the ${location} in search of basketballs.
      After looking around and asking for help,
      I came up empty-handed. Time to try another spot!
    `);
  }
}

// This function logs to the console the concluding part of the story
function storyEnding() {
  console.log(`
    After visiting several spots, I finally found the basketballs at the ${locationWithBasketball}.
    When I got home, I discovered my cousin had borrowed a basketball 
    from his friend while I was out!
    At first, I was annoyed at the effort I went through, but then forgot about
     when we played a fun and competitive game together in our backyard!
  `);
}

// Minimum of 2 if/else conditions
// At least one should check and change the boolean value

// console.log in each function
function startStory() {
  // This is the first part of the story
  console.log(`
    Let me tell you a story about me, ${person.name}. When I was ${person.age}, my friends and I
    wanted to play basketball at a nearby court. At that time, I was a decent ${person.role}.
    When we got to the first location, I realized we were missing the ${basketballCount} basketballs
    needed for our game, so I decided to check where I can find some.
  `);

  // Array.forEach
  // It will read each location on the array and log to the console the correct part of the story
  locations.forEach(function (location) {
    checkForBasketball(location);
    describeVisit(location);
  });

  storyEnding();
}

// Function to call storytelling functions
startStory();
