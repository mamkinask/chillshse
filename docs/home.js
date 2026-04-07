/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

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
    var defaultSrc = card.getAttribute('data-cover-default') || img.src;
    var hoverSrc = card.getAttribute('data-cover-hover') || defaultSrc;
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