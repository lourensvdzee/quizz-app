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

// Code to add a new container
/* const newCard = document.querySelector('[data-js="card-container"]');
const submitButton = document.querySelector('[data-js="button"]')
console.log(submitButton.length);

submitButton.addEventListener("click", (event) => {
    const newContainer = document.createElement("div");
    newContainer.classList.add("question");
    newContainer.textContent = form.textarea.textContent;
    newContainer.classlist.add("card-button");
    newContainer.classlist.add("answer-text");
    newContainer.textContent = form.textarea.textContent;
    newContainer.classList.add("card-container__tags");
    newContainer.li = form.textarea.textContent; 
    
    newCard.append(newContainer);
}); */