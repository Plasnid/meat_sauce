// ! logging and display utilities
/*
example structure of a function declaration
function functionName(){}
*/
// * display utilities
function displayLog(msg){
    console.log(msg);
}
function displayInPage(msg, tagType,styleClass){
    // * let, const
    // * let: is changeable (ie. age, wake up time)
    // * const: constant, set once (ie. loveOfGarlic, name, place of birth)
    const page = document.querySelector('body');
    let itemToAdd = document.createElement(tagType);
    itemToAdd.classList.add(styleClass);
    itemToAdd.innerText = msg;
    page.appendChild(itemToAdd);

}
function displayText(msg, tagType,styling){
    displayInPage(msg, tagType, styling);
    displayLog(msg);
}
displayText("Tasty Sauce!","h1","mainTitle");
displayText("The Tastiest Meat Sauce at your fingertips!", "h2","subTitle");

// ! prep veggies

// * washing
/*
    - strainer put in sink
    - put veggies in the strainer
    - open tap and set temp
    - leave tap on for 34 seconds
    - mix veggies with hand
*/
function vegWash(veggieList){
    for(let i=0;i<veggieList.length;i++){
        displayText(`now the ${veggieList[i]} are in the strainer`, "p");
        displayText(`now the ${veggieList[i]} are moist`, "p");
        displayText(`now the ${veggieList[i]} are stirred`, "p");
        displayText(`now the ${veggieList[i]} are dried`, "p");
    }
}
// * carrots, tomato, spinach, basil, onions, garlic, celery
let ingredients = [
    {name: "carrots", amount: "2 blended"}, 
    {name: "tomato", amount:"40 cubed"}, 
    {name: "spinach", amount:"1 leaf"}, 
    {name: "basil", amount:"3 clubbed"}, 
    {name: "onions", amount:"4 roasted"}, 
    {name: "garlic", amount:"80 cups"}
];
console.log(ingredients[3]["name"]);
console.log(ingredients[3].amount);
console.log(`you will need ${ingredients[3].amount} of ${ingredients[3].name}`)

/**
 * operators
 */

/**
 * * = sets a value let bork="meetboooool";
 * * ==  compares equality but not datatype  1=="1" would pass
 * * === compares equality and datatype 1==="1" would fail
 * * != not equal
 * 
 * * > greater than
 * * < less than
 * * >= greater than or equal to
 * * <= less than or equal to
 * * ! not
 * * && and
 */

let queasey = false;
let dietType = "cannibal";
let hungry = true;

function letsEat(dietType, hungerLimit){
    let randoHunger = Math.random();
    console.log(randoHunger);
    if(randoHunger<hungerLimit){
        console.log("I would like some foods");
        if(dietType=="cannibal"){
            console.log("Why don't you join me as dinner");
        }
    }else if(hungry==false && dietType=="cannibal"){
        console.log("pleased to meat you!  I'll save you for later.")
    }else{
        console.log("I could definitely eat!");
    }
}
letsEat("cannibal",0.7)


/*let sharpThings = {
    undersea: "shark mouth",
    hospital: "scalpel",
    australia: "everything",
    bathroom: "straight razor",
    dangerLevel: 110,
    dangerSpread: function(spreader, person, spread){
        console.log(`${person} you are spreading ${spread} with a dangerous ${spreader}`);
    }
}
sharpThings.dangerSpread("acid","Danger Stu","vegemite");
*/

/*console.log(sharpThings.undersea);
sharpThings["shmear depositor"] = "ninja star";
console.log(sharpThings["shmear depositor"]);
*/
//vegWash(vegetables);


// * cutting
/*
    -get knife and cutting board
    -put cutting board on table
    -transfer veg to bowls
    -slice aromatics
    -transfer carrot celery onions garlic to board
*/
// 
let pageBody = document.querySelector('body');
let interact = document.createElement("h3");
interact.innerText = "Hey";
pageBody.appendChild(interact);

interact.addEventListener("click", clickAction);

function clickAction(e){
    console.log("I have been clicked");
    console.log(e);
    e.target.classList.toggle("mainTitle");
    console.log(e);
}