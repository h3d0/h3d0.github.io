function docReady(fn) {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

docReady(function () {
  // DOM variables
  var faqQuestions = document.querySelectorAll('.faq__question');

  // Listeners
  faqQuestions.forEach(function (m) {
    m.addEventListener('click', onFaqQuestionClick);
  });

  /**
   *  Toggle collapsed/expended state.
   * @param {MouseEvent} e
   */
  function onFaqQuestionClick(e) {
    e.target.classList.toggle('faq__question--expanded');
    e.target.nextElementSibling.classList.toggle('faq__answer--expanded');
  }
});
