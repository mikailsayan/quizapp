import BookmarkMarking from "./components/Bookmark/bookmark.js";
import QuizcardButtonFunction from "./components/Quizcard/quizcard.js";

const jsAllBookmarks = document.querySelectorAll(".bookmark-icon");

jsAllBookmarks.forEach((jbookmark) => {
    BookmarkMarking(jbookmark);
}); 

const jsAllCards = document.querySelectorAll(".quiz-card");


jsAllCards.forEach((jsshowanswer) => {
    QuizcardButtonFunction(jsshowanswer);
});



//SinglePageFunction
const jsmainpage = document.querySelector(".main-page");
const jsbookmarkpage = document.querySelector(".bookmark-page");
const jscreatepage = document.querySelector(".create-page");
const jsprofilepage = document.querySelector(".profile-page");
const jsbuttonmain = document.querySelector(".js-button-main");
const jsbuttonbookmark = document.querySelector(".js-button-bookmark");
const jsbuttoncreate = document.querySelector(".js-button-create");
const jsbuttonprofile = document.querySelector(".js-button-profile");

function showMainPage() {
    jsmainpage.classList.remove("hidden");
    jsbookmarkpage.classList.add("hidden");
    jscreatepage.classList.add("hidden");
    jsprofilepage.classList.add("hidden");
}

function showBookmarkPage() {
    jsmainpage.classList.add("hidden")
    jsbookmarkpage.classList.remove("hidden")
    jscreatepage.classList.add("hidden")
    jsprofilepage.classList.add("hidden")
}

function showCreatePage() {
    jsmainpage.classList.add("hidden")
    jsbookmarkpage.classList.add("hidden")
    jscreatepage.classList.remove("hidden")
    jsprofilepage.classList.add("hidden")
}

function showProfilePage() {
    jsmainpage.classList.add("hidden")
    jsbookmarkpage.classList.add("hidden")
    jscreatepage.classList.add("hidden")
    jsprofilepage.classList.remove("hidden")
}

jsbuttonmain.addEventListener("click", showMainPage);
jsbuttonbookmark.addEventListener("click", showBookmarkPage);
jsbuttoncreate.addEventListener("click", showCreatePage);
jsbuttonprofile.addEventListener("click", showProfilePage);