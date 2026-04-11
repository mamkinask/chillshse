/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/chillshse/";
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/assets/media/elements_pictures/CoverVariantsDefault.png
const CoverVariantsDefault_namespaceObject = __webpack_require__.p + "images/77a20a641bee692e1f25.png";
;// ./src/assets/media/elements_pictures/CoverVariantsVideogame.png
const CoverVariantsVideogame_namespaceObject = __webpack_require__.p + "images/0e8ca9febdfcab23ad57.png";
;// ./src/assets/media/elements_pictures/CoverVariantsBook.png
const CoverVariantsBook_namespaceObject = __webpack_require__.p + "images/71af271546324b0eb3cd.png";
;// ./src/assets/media/elements_pictures/CoverVariantsFilm.png
const CoverVariantsFilm_namespaceObject = __webpack_require__.p + "images/7c6eeddc311753478dea.png";
;// ./src/assets/media/elements_pictures/CoverVariantsComics.png
const CoverVariantsComics_namespaceObject = __webpack_require__.p + "images/a466b79d59959bb470d5.png";
;// ./src/javascript/home.js






var COVER_MAP = {
  'CoverVariantsDefault.png': CoverVariantsDefault_namespaceObject,
  'CoverVariantsVideogame.png': CoverVariantsVideogame_namespaceObject,
  'CoverVariantsBook.png': CoverVariantsBook_namespaceObject,
  'CoverVariantsFilm.png': CoverVariantsFilm_namespaceObject,
  'CoverVariantsComics.png': CoverVariantsComics_namespaceObject
};
function resolveCover(attr) {
  if (!attr) return null;
  var filename = attr.split('/').pop();
  return COVER_MAP[filename] || null;
}
function showDialogState(state) {
  var dialog = document.getElementById('dialog-mac');
  document.getElementById('dialog-view-default').style.display = state === 'default' ? '' : 'none';
  document.getElementById('dialog-view-no').style.display = state === 'no' ? '' : 'none';
  document.getElementById('dialog-view-closed').style.display = state === 'closed' ? '' : 'none';
  if (state === 'closed') {
    dialog.classList.add('state-closed');
  } else {
    dialog.classList.remove('state-closed');
  }
}
function isGuessClickMode() {
  return window.matchMedia('(max-width: 768px)').matches;
}
function setGuessHintText() {
  var hint = document.querySelector('.guess-hint');
  if (!hint) return;
  hint.textContent = isGuessClickMode() ? '▷ Нажмите на карточку, чтобы увидеть медиаформат.' : '▷ Удерживайте курсор на синих карточках, чтобы посмотреть, какого формата произведение перед вами';
}
function initGuessCards() {
  document.querySelectorAll('.guess-cards .card').forEach(function (card) {
    var img = card.querySelector('img');
    if (!img) return;
    var defaultSrc = resolveCover(card.getAttribute('data-cover-default')) || img.src;
    var hoverSrc = resolveCover(card.getAttribute('data-cover-hover')) || defaultSrc;
    img.src = defaultSrc;
    card.addEventListener('mouseenter', function () {
      if (isGuessClickMode()) return;
      img.src = hoverSrc;
    });
    card.addEventListener('mouseleave', function () {
      if (isGuessClickMode()) return;
      img.src = defaultSrc;
    });
    card.addEventListener('click', function (e) {
      if (!isGuessClickMode()) return;
      e.preventDefault();
      if (card.getAttribute('data-guess-flipped') === '1') {
        card.removeAttribute('data-guess-flipped');
        img.src = defaultSrc;
      } else {
        card.setAttribute('data-guess-flipped', '1');
        img.src = hoverSrc;
      }
    });
  });
  setGuessHintText();
  var resizeGuessTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeGuessTimer);
    resizeGuessTimer = setTimeout(function () {
      setGuessHintText();
      document.querySelectorAll('.guess-cards .card').forEach(function (card) {
        var img = card.querySelector('img');
        if (!img) return;
        var defaultSrc = resolveCover(card.getAttribute('data-cover-default')) || img.src;
        var hoverSrc = resolveCover(card.getAttribute('data-cover-hover')) || defaultSrc;
        if (!isGuessClickMode()) {
          card.removeAttribute('data-guess-flipped');
          img.src = defaultSrc;
        } else {
          img.src = card.getAttribute('data-guess-flipped') === '1' ? hoverSrc : defaultSrc;
        }
      });
    }, 150);
  });
}
window.showDialogState = showDialogState;
document.addEventListener('DOMContentLoaded', initGuessCards);
/******/ })()
;