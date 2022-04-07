export default function BookmarkMarking(jbookmark) {
  function marking() {
    jbookmark.classList.toggle('marked');
  }

  jbookmark.addEventListener('click', marking);
}
