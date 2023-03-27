/* Older code to try out

const cardBookmark = document.querySelector("[data-js=card_bookmark]");
console.log('cardBookmark: ', cardBookmark);

cardBookmark.addEventListener("click", (event) => {
    console.log('event.target', event.target.src);
    console.log('I am clicking');


    //event.target.src != "./asset/bookmark_filled.png" ? event.target.src = './assets/bookmark_filled.png' : event.target.src != './asset/bookmark_filled.png'


    if (event.target.src !== "./assets/bookmark_filled.png") {
        event.target.src = "./assets/bookmark_transparent.png";
         console.log('src', event.target.src);
    } else {
        event.target.src = "./assets/bookmark.png";
    }
})

function bookmarkFilled() {
    if (cardBookmark.src != "./assets/bookmark_filled.png") {
        cardBookmark.src = "./assets/bookmark_filled.png";
    } else {
        cardBookmark.src = "./assets/bookmark.png";
    }
}

function bookmarkEmpty() {
    if (img.src != "./assets/bookmark.png") {
        img.src = "./assets/bookmark.png";
    } else {
        img.src = "./assets/bookmark_filled.png";
    }
} */


// Bookmark Icon toggle
const bookmarkIcons = document.querySelectorAll('[data-js="card_bookmark"]');
// console.log(bookmarkIcons.length);

for (let i = 0; i < bookmarkIcons.length; i++) {
    const bookmarkIcon = bookmarkIcons[i];
    console.log(bookmarkIcon);

    bookmarkIcon.addEventListener("click", () => {
        console.log(bookmarkIcon);
        if (bookmarkIcon.src.match("./assets/bookmark.png")) {
            bookmarkIcon.src = "./assets/bookmark_filled.png";
        } else {
            bookmarkIcon.src = "./assets/bookmark.png";
        }
    });
}

// Answer toggle
const answerButtons = document.querySelectorAll('[data-js="answer-button"]');
const answerToggles = document.querySelectorAll('[data-js="answer-text"]');
// console.log(answerToggles.length);

for (let i = 0; i < answerButtons.length; i++) {
    const answerButton = answerButtons[i];
    const answerToggle = answerToggles[i];
    //console.log(answerButton);

    answerButton.addEventListener("click", () => {
        if (answerToggle.style.display == "none") {
            answerToggle.style.display = "block";
        } else {
            answerToggle.style.display = "none";
        }
    });
}

// Answer-button text change
// tried the following: Adding <form> to html layout and adding value "Show Answer". 
// It returned a "flat button" and without changing the text

/* const buttonTexts = document.querySelectorAll('[data-js="button-text"]');
console.clear();
console.log(buttonTexts.length);

for (let i = 0; i < buttonTexts.length; i++) {
    const answerButton = answerButtons[i];
    const buttonText = buttonTexts[i];
    console.log(buttonTexts);

    answerButton.addEventListener("click", () => {
        if (buttonText.value == "Show Answer") {
            buttonText.value = "Hide Answer";
        } else {
            buttonText.value = "none";
        }
    });
} */


