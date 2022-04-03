export default function QuizcardButtonFunction(jsshowanswer) {

const jsbuttonanswer = jsshowanswer.querySelector(".js-button-answer");
const jsanswer = jsshowanswer.querySelector(".js-answer");

function showanswer() {
    if (jsbuttonanswer.textContent === "Show Answer") { //Wenn auf dem Button "Show Answer" steht und du draufklickst..
        jsanswer.classList.toggle("hidden"); //..dann entferne die Klasse "hidden"..
        jsbuttonanswer.textContent = "Hide Answer"; //..und schreibe "Hide Answer" auf den Button
    } else {
        jsanswer.classList.toggle("hidden"); //Andernfalls füge Klasse "hidden" hinzu..
        jsbuttonanswer.textContent = "Show Answer"; //..und schreibe "Show Answer" auf den Button
    }

}

jsbuttonanswer.addEventListener("click", showanswer);

}


