///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
var totalAcres = 0;
        for (let e = 0; e < fujiAcres.length; e++) {
            totalAcres = totalAcres + fujiAcres[e];
        }
        for (let e = 0; e < galaAcres.length; e++) {
            totalAcres = totalAcres + galaAcres[e];
        }
        for (let e = 0; e < pinkAcres.length; e++) {
            totalAcres = totalAcres + pinkAcres[e];
        }
    
console.log(totalAcres);

/* 
        I first thought that I would use the same formula to count the acres
        that are picked in the arrays and add them together using a for loop
        that would run 3 times, but I realized that each array would require
        a unique formula. So instead of creating one for loop that ran three
        times, I would create three for loops that each ran 7 times, with a 
        running totalAcres value.
/*


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
var averageDailyAcres = totalAcres / galaAcres.length;
console.log(averageDailyAcres);

/*
        I wanted to create a dynamic formula that would update if we 
        decided to change how many days we tracked inside of an array. 
        Simply putting the divisor as 7 would have worked for now, but would
        easily become a problem if the number of days tracked ever changed.
/*


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
while (acresLeft > 0) {
    days++;
    acresLeft = acresLeft - averageDailyAcres;
} 
console.log(days);


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
let averageApplesPerAcre = 6.5;
fujiTons = fujiAcres.slice(0, 7);
galaTons = galaAcres.slice(0, 7);
pinkTons = pinkAcres.slice(0, 7);

for (let i = 0; i < fujiTons.length; i++) {
    fujiTons[i] = fujiTons[i] * averageApplesPerAcre;
}
for (let i = 0; i < galaTons.length; i++) {
    galaTons[i] = galaTons[i] * averageApplesPerAcre;
}
for (let i = 0; i < pinkTons.length; i++) {
    pinkTons[i] = pinkTons[i] * averageApplesPerAcre;
}

console.log(fujiTons);
console.log(galaTons);
console.log(pinkTons);

/*
    I figured that this was another case where the easiest solution would be
    to create three for loops that manipulated the new arrays by simply 
    multiplying the amount of acres harvested by the average apples per acre
    harvested (in tons).
/*

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 
var fujiTonsPicked = 0;
var galaTonsPicked = 0;
var pinkTonsPicked = 0;

for (let e = 0; e < fujiTons.length; e++) {
    fujiTonsPicked = fujiTonsPicked + fujiTons[e];
}
for (let e = 0; e < galaTons.length; e++) {
    galaTonsPicked = galaTonsPicked + galaTons[e];
}
for (let e = 0; e < pinkTons.length; e++) {
    pinkTonsPicked = pinkTonsPicked + pinkTons[e];
}

var fujiPounds = fujiTonsPicked * 2000;
var galaPounds = galaTonsPicked * 2000;
var pinkPounds = pinkTonsPicked * 2000;

console.log(fujiPounds);
console.log(galaPounds);
console.log(pinkPounds);

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = fujiPounds * fujiPrice;
let galaProfit = galaPounds * galaPrice;
let pinkProfit = pinkPounds * pinkPrice;

console.log(fujiProfit);
console.log(galaProfit);
console.log(pinkProfit);


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
var totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log(totalProfit);
