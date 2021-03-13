function docReady(fn) {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

docReady(function () {
  // DOM variables
  var contentBurger = document.getElementById('content__burger');
  var contentItems = document.getElementById('content__items');
  var contentItem = contentItems.querySelectorAll('.items__item');
  var fade = document.getElementById('fade');
  var faqQuestions = document.querySelectorAll('.faq__question');

  // Listeners
  contentBurger.addEventListener('click', onContentBurgerClick);
  contentItem.forEach(function (m) {
    m.addEventListener('click', onContentItemClick);
  });
  fade.addEventListener('click', onFadeClick);
  faqQuestions.forEach(function (m) {
    m.addEventListener('click', onFaqQuestionClick);
  });

  /**
   * Toggle menu state in handset mode.
   */
  function onContentBurgerClick() {
    contentItems.classList.toggle('content__items--expanded');
    fade.classList.toggle('fade--visible');
  }

  function onFadeClick() {
    contentItems.classList.remove('content__items--expanded');
    fade.classList.remove('fade--visible');
  }

  /**
   *  Hide fade and menu before navigating.
   * @param {MouseEvent} e
   */
  function onContentItemClick(e) {
    contentItems.classList.remove('content__items--expanded');
    fade.classList.remove('fade--visible');
  }

  /**
   *  Toggle collapsed/expended state.
   * @param {MouseEvent} e
   */
  function onFaqQuestionClick(e) {
    e.target.classList.toggle('faq__question--expanded');
    e.target.nextElementSibling.classList.toggle('faq__answer--expanded');
  }
});
