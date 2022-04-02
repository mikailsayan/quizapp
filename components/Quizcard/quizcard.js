export default function QuizcardFunctions() {

const jbookmark = document.querySelector(".js-bookmark");
const jsbuttonhide = document.querySelector(".js-button-hide");
const jsbuttonanswer = document.querySelector(".js-button-answer");
const jsanswer = document.querySelector(".js-answer");

function marking() {
    jbookmark.classList.toggle("marked");
}

function hideanswer() {
    jsanswer.classList.toggle("hidden");
}

function hidebuttonanswer() {
    jsbuttonanswer.classList.add("hidden");
    jsbuttonhide.classList.remove("hidden");
}

function hidebuttonhide() {
    jsbuttonanswer.classList.remove("hidden");
    jsbuttonhide.classList.add("hidden");
}

jbookmark.addEventListener("click", marking);
jsbuttonanswer.addEventListener("click", hideanswer);
jsbuttonanswer.addEventListener("click", hidebuttonanswer);
jsbuttonhide.addEventListener("click", hideanswer);
jsbuttonhide.addEventListener("click", hidebuttonhide);

}