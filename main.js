/*

Write a function that puts a line through the text of the first <li> in the unordered "Arguments" list (<ul). Since this function always does the same thing, it requires no parameters!
Now call it! The first list item (<li>) should get what's known as a "strikethrough" style.
*/

function addStrikethough(){
    let argumentItem1 = document.querySelector('li');
    argumentItem1.style.textDecoration = 'line-through';
}

addStrikethough();

/*
Write a function that takes in a string representing an DOM element's id and a string representing a url. The function should set the image with that id to have that url as its image source.
Now use that function to set the three images in the Image Area section to show three images of your choice. You'll need three separate calls to your function!
 */

function setImage(id, url){
    let image = document.querySelector('#' + id);
    image.src = url;
    image.style.height = '300px'
}

setImage('image-1','https://travel.mqcdn.com/mapquest/travel/wp-content/uploads/2020/07/GettyImages-1220196496-720x480.jpg' );
setImage('image-2', 'https://cdn.elebase.io/dbcc75a2-4b9f-4a0e-8e4b-cfa273624e10/27340e3f-c735-4ff2-a36d-58bb4b6fcdbc-vtm701882dd5eb7c2a3b.jpg?i=true&q=85&w=1200' );
setImage('image-3', 'https://www.moon.com/wp-content/uploads/2015/04/Maine_Acadia-SandBeachi_ericcote-Stock-166637561.jpg?w=1080');


/*
This next function also doesn't require any parameters: write a function that always removes the first <li> from the Arguments <ul>
Now use it to remove the first two items from that list. You'll need to call it twice!
*/

function removeArgument(){
    let itemToRemove = document.querySelector('li');
    itemToRemove.remove();
}
removeArgument();
removeArgument();


/*
Write a function that takes in two strings, one representing a font size and one representing an id, and sets the thing with that id to have that size for its text.
Try using it to change the size of any text on the page.
*/

// function setFontSize(font, id){
//     let fontSize = document.querySelector('#' + id);
//     fontSize.style.fontsize = font;
// }


function setFontSize(id, newSize){
    let target = document.querySelector("#"+id);
    target.style.fontSize = (newSize);
}


setFontSize('IMG','50px');
setFontSize('lorem', '100px');



/*
Part Two - DOM Elements as Function Parameters
These functions will take in DOM elements as parameters. They also don't need to return anything.
*/

/*
Write a function that takes in a DOM element and appends it to the Arguments <ul>.
Let's use it! Create an image element in Javascript and pass it into your function.
*/

//element = Any DOM Elements

function addElementToList(element){
    let arguments = document.querySelector('#arguments');
  arguments.appendChild(element);
}


let newImage = document.createElement('img');
newImage.src = 'https://www.worldatlas.com/r/w960-q80/upload/e5/bf/05/shutterstock-75885847.jpg';

newImage.style.height = '250px';

addElementToList(newImage);


/*
Write a function that takes in an image element and modifies its height to be 30 pixels.
Let's use it. Query an image element and then pass it into the function.
*/

function imageElement(element){
    element.style.height = '30px';
}
imageElement(newImage);


/*
Write a function that takes in an element and gives it the class invisible.
Now query an element on the page and pass it into that function. You should see it disappear! (feel free to check the CSS file to see how this class works.)
*/

let query = document.querySelector('#heading')

function invisElement(element){
    element.className = 'invisible';
}
invisElement(query);


/*
These functions will return new DOM elements.

    Write a function that takes in text and returns a new <li> with the given text parameter as its innerText.
    Test it! Somewhere below this function, call it. Store the returned DOM element in a variable, then append it to the page (use your first function from part 2).
*/

function textTakeIn(text){
    let newLi = document.createElement('li');
    newLi.innerText = text

return newLi

}

textTakeIn('CAT');

let storedElement = textTakeIn('CAT');

addElementToList(storedElement);

/*
Write a function that takes in two strings, one representing a header size and one some text, and returns a new header of that size (e.g., a '3' for the first parameter should result in an <h3>) with that text in it.
Test it by calling it with a header size and some text, storing the return value in a variable, then appending it to the page (again, use your first function from part 2).
*/

function twoStrings(headerSize, text){
       if(headerSize === 1){
        let newHeader = document.createElement('h1'); newHeader.innerText = text
       }else if(headerSize === 2){newheader = document.createElement('h2'); newHeader.innerText = text
       }else if(headerSize === 3){newHeader = document.createElement('h3'); newHeader.innerText = text
       }else if(headerSize === 4){newHeader= document.createElement('h4'); newHeader.innerText = text
       }else if(headerSize === 5){newHeader = document.createElement('h5'); newHeader.innerText = text
       }else if(headerSize === 6){newHeader= document.createElement('h6'); newHeader.innerText = text
}
return newHeader
}

twoStrings(4,'Testing one, two, three!!!');

let stored2 = twoStrings(4,'Testing one, two, three!!!');

let stored3 = twoStrings(6, 'Testing, four, five and six');


addElementToList(stored2);
addElementToList(stored3);




