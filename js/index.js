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
console.log(bookmarkIcons.length);

for (let i = 0; i < bookmarkIcons.length; i++) {
    const bookmarkIcon = bookmarkIcons[i];
    console.log(bookmarkIcon);

    bookmarkIcon.addEventListener("click", () => {
        if (bookmarkIcon.src.match("./assets/bookmark.png")) {
            bookmarkIcon.src = "./assets/bookmark_filled.png";
        } else {
            bookmarkIcon.src = "./assets/bookmark.png";
        }
    });
}

