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
const newCard = document.querySelector('[data-js="form"]');
const submitButton = document.querySelector('[data-js="button"]')
console.log(newCard);

submitButton.addEventListener("submit", (event) => {
    event.preventDefault();
    //add full form first
    const formElements = event.target.elements;
    //add text fields via name tag, eg formElements.your-question.value;
    console.log(questionText);
    const questionText = "text1"
    const answerText = "text2"
    const tagText = "text3"

    const newCard = document.createElement("section");
    newCard.innerHTML =
        // console.log(newCard);
        /* newCard.innerHTML = `<section data-js="card-container" class="card-container">
        <h3 class="question">What property flips the axes in flexbox?</h3>
        <button data-js="answer-button" class="card-button">
          <h3 data-js="button-text">Show Answer</h3>
        </button>
        <span data-js="answer-text" class="answer-text" style="display: none;">
          <p>Flex-direction</p>
        </span>
        <ul class="card-container__tags">
          <li>#html</li>
          <li>#flexbox</li>
          <li>#css</li>
        </ul>
        <img data-js="card_bookmark"
          class="card_bookmark"
          src="./assets/bookmark.png"
          alt="bookmark_empty"
        />
      </section>` */

        /* newContainer.textContent = form.textarea.value;
        newContainer.classlist.add("card-button");
        newContainer.classlist.add("answer-text");
        newContainer.textContent = form.textarea.value;
        newContainer.classList.add("card-container__tags");
        newContainer.li = form.textarea.value; */

        newCard.append(newContainer);
});