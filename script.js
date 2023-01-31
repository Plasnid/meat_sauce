// ! logging and display utilities
/*
example structure of a function declaration
function functionName(){}
*/
// * display utilities
function displayLog(msg){
    console.log(msg);
}
function displayInPage(msg, tagType){
    // * let, const
    // * let: is changeable (ie. age, wake up time)
    // * const: constant, set once (ie. loveOfGarlic, name, place of birth)
    const page = document.querySelector('body');
    let itemToAdd = document.createElement(tagType);
    itemToAdd.innerText = msg;
    page.appendChild(itemToAdd);

}
function displayText(msg, tagType){
    displayInPage(msg, tagType);
    displayLog(msg);
}
displayText("Tasty Sauce!","h1");
displayText("The Tastiest Meat Sauce at your fingertips!", "h2");

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
let vegetables = ["carrots", "tomato", "spinach", "basil", "onions", "garlic", "celery", "eggplant"];

vegWash(vegetables);


// * cutting
/*
    -get knife and cutting board
    -put cutting board on table
    -transfer veg to bowls
    -slice aromatics
    -transfer carrot celery onions garlic to board
*/
// * 