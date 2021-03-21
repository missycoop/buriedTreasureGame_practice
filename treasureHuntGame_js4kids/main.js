//Create a web page with a treasure map image & a place to display messages to player
// pick a random spot on the map picture to hide the treasure
// Create a click handler. Each time the player clicks the map, the click handler will do the following...
//     add 1 to a click Counter    
//     calculate how far the click location is from the treasure location
//     display a message on the web page to tell the player whether they're hot or cold
//     congratulate the player if they click on the treasure or very close to it, 
//     and say how many clicks it took to find the treasure


//game code


//picks a random number - takes the size argument as input & picks a random number from 0 upt to size of img
let getRandomNumber = function(size){
    return Math.floor(Math.random() * size);
};
//mearsure distance of click & target - taking in 2 arguments, the event object is passed to the click handler & it come with built-in info about the player's click. It contatins 2 properties called offsetX & offsetY which tell us the x & y coordinates of the click. Stores that info & subtracts the clicks from the target.  The 3rd line in te body of the function uses the pythagorean theorem to square the coordinates then add to get the distance between pts.
const getDistance = function(event,target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

//display a hint telling player how close they are to treasure
const getDistanceHint = function(distance){
    if (distance < 10) {
        return "Boiling Hot!";
    }else if (distance < 20){
        return "Really hot";
    }else if (distance < 40) {
        return "Hot";
    }else if (distance < 80) {
        return "Warm";
    }else if (distance < 160) {
        return "Cold";
    }else if (distance < 320) {
        return "Really Cold";
    }else {
        return "Freezing!";
    }
};
//setting coordinates & variable for click handlger
let width = 400;
let height = 400;
let clicks = 0;

//creates a target with 2 properties that represent the coordinates of the treasure.  The properties are both set by getRandomNumber, when we run this code we get a new random location on the map, & the chosen coordinates will be saved as target
let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};


//click handler - when player clicks map
$("#map").click(function(event){
    clicks++
    //get distance between click event & target
    let distance = getDistance(event, target);
    //convert distance to a hint
    let distanceHint = getDistanceHint(distance);

    //update the #distance element with the new hint
    $("#distance").text(distanceHint);
    //if the click was close enough, thell them they won
    if (distance < 8){
        alert ("Found the treasure in " + clicks + " clicks!");
    }

});

