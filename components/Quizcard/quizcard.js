export default function QuizcardFunctions() {

const jbookmark = document.querySelector(".js-bookmark");
const jsbuttonanswer = document.querySelector(".js-button-hide");
const jsanswer = document.querySelector(".js-answer");
const jsbuttonhide = document.querySelector(".js-button-answer");
const jbookmarkfill = document.querySelector("js-bookmark-fill");

function marking() {
    jbookmark.classList.toggle("hidden");
    jbookmarkfill.classList.toggle("hidden");
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
jbookmarkfill.addEventListener("click", marking);
jsbuttonanswer.addEventListener("click", hideanswer);
jsbuttonhide.addEventListener("click", hideanswer);
jsbuttonanswer.addEventListener("click", hidebuttonanswer);
jsbuttonhide.addEventListener("click", hidebuttonhide);

}