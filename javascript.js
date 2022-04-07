import BookmarkMarking from './components/Bookmark/bookmark.js';
import QuizcardButtonFunction from './components/Quizcard/quizcard.js';

//SinglePageFunction
const jsmainpage = document.querySelector('.main-page');
const jsbookmarkpage = document.querySelector('.bookmark-page');
const jscreatepage = document.querySelector('.create-page');
const jsprofilepage = document.querySelector('.profile-page');
const jsbuttonmain = document.querySelector('.js-button-main');
const jsbuttonbookmark = document.querySelector('.js-button-bookmark');
const jsbuttoncreate = document.querySelector('.js-button-create');
const jsbuttonprofile = document.querySelector('.js-button-profile');

function showMainPage() {
  jsmainpage.classList.remove('hidden');
  jsbookmarkpage.classList.add('hidden');
  jscreatepage.classList.add('hidden');
  jsprofilepage.classList.add('hidden');
}

function showBookmarkPage() {
  jsmainpage.classList.add('hidden');
  jsbookmarkpage.classList.remove('hidden');
  jscreatepage.classList.add('hidden');
  jsprofilepage.classList.add('hidden');
}

function showCreatePage() {
  jsmainpage.classList.add('hidden');
  jsbookmarkpage.classList.add('hidden');
  jscreatepage.classList.remove('hidden');
  jsprofilepage.classList.add('hidden');
}

function showProfilePage() {
  jsmainpage.classList.add('hidden');
  jsbookmarkpage.classList.add('hidden');
  jscreatepage.classList.add('hidden');
  jsprofilepage.classList.remove('hidden');
}

jsbuttonmain.addEventListener('click', showMainPage);
jsbuttonbookmark.addEventListener('click', showBookmarkPage);
jsbuttoncreate.addEventListener('click', showCreatePage);
jsbuttonprofile.addEventListener('click', showProfilePage);

// Wir holen uns die Daten aus der API
const api = 'https://opentdb.com/api.php?amount=10';
toFetch(api);

async function toFetch(quizApi) {
  try {
    const response = await fetch(quizApi);
    const data = await response.json();
    //const {correct_answer: answer} = results;
    renderQuestion(data.results);
  } catch (error) {
    console.error(`Ups, das war ein Fehler: ${error}`);
  }
}

const renderQuestion = questionsArray => {
  // Wir holen uns die Area, in die die Karte appended werden
  const quizArea = document.querySelector('.quiz-allcards');

  // Für jedes Object was wir ins Array schreiben, erstelle eine komplette Karte
  questionsArray.forEach(cardObject => {
    const quizCard = document.createElement('article');
    const quizCardHeadline = document.createElement('h3');
    const quizCardQuestion = document.createElement('p');
    const quizCardButton = document.createElement('button');
    const quizCardHeadline2 = document.createElement('h2');
    const quizCardAnswers = document.createElement('p');
    const bookmarkSVG = document.createElement('svg');
    bookmarkSVG.setAttribute('viewBox', '0 0 24 24');
    quizCard.innerHTML = `
            <svg class="bookmark-icon js-bookmark" viewBox="0 0 24 24">
            <path
            fill="currentColor"
            d="M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"
            />
            </svg>
        `;
    /*const quizCardOptionUl = document.createElement("ul");
        const tagList = document.createElement("ul");
        cardObject.tags.forEach((tag) => { //Wir holen jede "tags"-Zeile aus cardObjects
            const tagOption = document.createElement("li"); //Wir kreiiren ein Listelement
            tagOption.textContent = tag; //Wir schreiben in dieses Listelement ein Tagelement
            tagOption.classList.add("tag-list"); //Wir fügen die Klasse hinzu
            tagList.append(tagOption); //Wir lassen es auf der UL "tagList" erscheinen
        })
        cardObject.option.forEach((option) => {
            const quizCardOption = document.createElement("li");
            quizCardOption.textContent = option;
            quizCardOption.classList.add("answer-option");
            quizCardOptionUl.append(quizCardOption);
        })*/

    // Wir fügen die Klassen den erstellten Tags hinzu
    quizCard.classList.add('quiz-card');
    quizCardHeadline.classList.add('headline3');
    quizCardQuestion.classList.add('question');
    quizCardButton.classList.add('button-hidey');
    quizCardButton.classList.add('js-button-answer');
    quizCardHeadline2.classList.add('headline2');
    quizCardHeadline2.classList.add('headline-answer');
    quizCardAnswers.classList.add('js-answer');
    quizCardAnswers.classList.add('hidden');
    bookmarkSVG.classList.add('bookmark-icon');
    bookmarkSVG.classList.add('js-bookmark');
    //quizCardOptionUl.classList.add("js-options");
    //tagList.classList.add("tag-ul");

    // Wir schreiben den Content in die Tags rein
    quizCardHeadline.textContent = 'Frage';
    quizCardQuestion.textContent = cardObject.question;
    quizCardButton.textContent = 'Show Answer';
    quizCardHeadline2.textContent = 'Optionen:';
    quizCardAnswers.textContent = cardObject.correct_answer;

    // quizArea ist die Section, quizCard ist das Article
    quizArea.append(quizCard);
    quizCard.append(quizCardHeadline);
    quizCard.append(quizCardQuestion);
    quizCard.append(quizCardButton);
    quizCard.append(quizCardHeadline2);
    quizCard.append(bookmarkSVG);
    quizCard.append(quizCardAnswers);
    /*quizCard.append(quizCardOptionUl);
        quizCard.append(tagList);*/
  });
};

//Wir erstellen das Array mit den Objekten drinnen
/*const questionsArray = [
    {
        id: "1",
        isBookmarked: false,
        question: "Wie oft kannst du <header> verwenden?",
        answer: "Wie oft du möchtest",
        option: ["Ein Mal", "Drei Mal", "Wie oft du möchtest"],
        tags: ["html", "elements", "basic"]
    },
    {
        id: "2",
        isBookmarked: false,
        question: "Wie rufst du die Funktion 'fName' auf?",
        answer: "fName()",
        option: ["fname()", "fname = start", "fname(start)"],
        tags: ["javascript", "elements", "basic"]
    },
    {
        id: "3",
        isBookmarked: false,
        question: "Was ist eine API?",
        answer: "Eine Schnittstelle, um externe Daten zu importieren",
        option: ["Schnittstelle", "Funktion", "Datenbank"],
        tags: ["javascript", "elements", "basic"]
    }
]*/

renderQuestion(questionsArray);

//Mark Bookmark Funktion
const jsAllBookmarks = document.querySelectorAll('.js-bookmark');
jsAllBookmarks.forEach(jbookmark => {
  BookmarkMarking(jbookmark);
});

//ShowAnswerButton Funktion
const jsAllCards = document.querySelectorAll('.quiz-card');
jsAllCards.forEach(jsshowanswer => {
  QuizcardButtonFunction(jsshowanswer);
});
