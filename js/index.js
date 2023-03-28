/* ----------------------------------------------------------------
Bookmark Icon toggle
---------------------------------------------------------------- */
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

/* ----------------------------------------------------------------
Answer toggle
---------------------------------------------------------------- */
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

/* ----------------------------------------------------------------
add new card with input from form
---------------------------------------------------------------- */

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formElements = event.target.elements;
    //      console.log(formElements);
    const question = formElements.question.value;
    //      console.log(question);
    const answer = formElements.answer.value;
    //      console.log(answer);
    const tag = formElements.tag.value;
    //      console.log(tag);

    const newCard = document.createElement("section");
    newCard.classList.add("card-container");
    newCard.innerHTML = `<section data-js="card-container" class="new-card-container">
<h3 class="question">${question}</h3>
<button data-js="answer-button" class="card-button">
  <h3 data-js="button-text">Show Answer</h3>
</button>
<span data-js="answer-text" class="answer-text" style="display: none;">
  <p>${answer}</p>
</span>
<ul class="card-container__tags">
  <li>${tag}</li>
</ul>
<img data-js="card_bookmark"
  class="card_bookmark"
  src="./assets/bookmark.png"
  alt="bookmark_empty"
/>
</section>`;

    document.body.append(newCard);


});