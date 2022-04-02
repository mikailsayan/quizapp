import QuizcardFunctions from "./components/Quizcard/quizcard.js";
//Wir importieren den Export aus quizcard.js hier her und geben einen Namen

QuizcardFunctions();

const jsAllBookmarks = document.querySelectorAll(".bookmark-icon");
//Wir holen uns alle(!) Bookmark Icons mit der Klasse

jsAllBookmarks.forEach((bookmarkIcon) => {
    QuizcardFunctions(bookmarkIcon);
});
//Wir 


