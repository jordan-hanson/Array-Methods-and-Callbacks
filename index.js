import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 
console.table(obj, ['firstName', 'lastName']);
(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
// console.log(fifaData[800]['Home Team Name'])
// console.table(fifaData, ['Year'] >= 2014)
let a = (array, cb) => {
    for (let i in array) {
        if (array[i].Year >= 2014 && array[i].Stage === "Final") {
            cb(`${array[i]['Home Team Name']} is the home Team for the 2014 world cup finals.`)
        }
    }
}
a(fifaData, function (val) {
    console.log(val)
})

let b = (array, cb) => {
    for (let i in array) {
        if (array[i].Year >= 2014 && array[i].Stage === "Final") {
            cb(`${array[i]["Away Team Name"]} is the away Team for the 2014 world cup finals.`)
        }
    }
}
b(fifaData, function (val) {
    console.log(val)
})

let c = (array, cb) => {
    for (let i in array) {
        if (array[i].Year >= 2014 && array[i].Stage === "Final") {
            cb(`The ${array[i]["Home Team Name"]} game goal was ${array[i]["Home Team Goals"]}.`)
        }
    }
}
c(fifaData, function (val) {
    console.log(val)
})

let d = (array, cb) => {
    for (let i in array) {
        if (array[i].Year >= 2014 && array[i].Stage === "Final") {
            cb(`The ${array[i]["Away Team Name"]} game goal was ${array[i]["Away Team Goals"]}.`)
        }
    }
}
d(fifaData, function (val) {
    console.log(val)
})

let e = (array, cb) => {
    for (let i in array) {
        if (array[i].Year >= 2014 && array[i].Stage === "Final") {
            cb(`The winner of the 2014 world cup finals is ${array[i]["Win conditions"]}.`)
        }
    }
}
e(fifaData, function (val) {
    console.log(val)
})
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter((item) => {
        return item.Stage === "Final";
    });
}
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

let getFilteredYears = (getFinals(fifaData))
let getYears = getFilteredYears.map((soccer) => {
    return soccer.Year
})
console.log(getFilteredYears)
console.log(getYears)

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(data) {
    return data.map((data) => {
        if (data["Home Team Goals"] > data["Away Team Goals"]) {
            console.log("Home Team Wins")
            return data["Home Team Name"]
        } else if (data["Away Team Goals"] > data["Home Team Goals"]) {
            console.log("Away Team Wins")
            return data["Away Team Name"]
        } else if (data["Home Team Goals"] === data["Away Team Goals"]) {
            console.log("It is a Tie")
            return "teams tied for"
        }
    })
}
let winners = (getWinners(getFilteredYears))
console.log(winners)
/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

let winnerSentence = winners.map(function (team) {
    return team
})
console.log(winnerSentence)

let f = (team, years, cb) => {
    console.log(years)
    for (let i in team && years) {
        cb(`In ${years[i]}, the ${team[i]} won the world cup \n`)
    }
}

f(winners, getYears, function (val) {
    console.log(val)
}
)

// /* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

// function getAverageGoals(/* code here */) {

//         /* code here */

//     };

// getAverageGoals();

let getHomeAverageGoals = getFilteredYears.reduce(function (counter, team) {
    let homeSum = counter += team["Home Team Goals"];
    return homeSum
}, 0)
let getAwayAverageGoals = getFilteredYears.reduce(function (counter, team) {
    let awaySum = counter += team["Away Team Goals"];
    return awaySum
}, 0)
console.log(getHomeAverageGoals / 19)
console.log(getAwayAverageGoals / 19)
console.table("Average for Home Teams in the Finals to date : " + getHomeAverageGoals / 19 + " Average for Away Teams in the Finals to date : " + getAwayAverageGoals / 19 + ".")
/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
