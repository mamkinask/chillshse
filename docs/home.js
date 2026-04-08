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
function initGuessCards() {
  document.querySelectorAll('.guess-cards .card').forEach(function (card) {
    var img = card.querySelector('img');
    if (!img) return;
    var defaultSrc = resolveCover(card.getAttribute('data-cover-default')) || img.src;
    var hoverSrc = resolveCover(card.getAttribute('data-cover-hover')) || defaultSrc;
    img.src = defaultSrc;
    card.addEventListener('mouseenter', function () {
      img.src = hoverSrc;
    });
    card.addEventListener('mouseleave', function () {
      img.src = defaultSrc;
    });
  });
}
window.showDialogState = showDialogState;
document.addEventListener('DOMContentLoaded', initGuessCards);
/******/ })()
;