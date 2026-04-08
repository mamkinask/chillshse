import '../stylesheets/home.css'
import coverDefault from '../assets/media/elements_pictures/CoverVariantsDefault.png'
import coverVideogame from '../assets/media/elements_pictures/CoverVariantsVideogame.png'
import coverBook from '../assets/media/elements_pictures/CoverVariantsBook.png'
import coverFilm from '../assets/media/elements_pictures/CoverVariantsFilm.png'
import coverComics from '../assets/media/elements_pictures/CoverVariantsComics.png'

var COVER_MAP = {
  'CoverVariantsDefault.png': coverDefault,
  'CoverVariantsVideogame.png': coverVideogame,
  'CoverVariantsBook.png': coverBook,
  'CoverVariantsFilm.png': coverFilm,
  'CoverVariantsComics.png': coverComics
}

function resolveCover(attr) {
  if (!attr) return null
  var filename = attr.split('/').pop()
  return COVER_MAP[filename] || null
}

function showDialogState(state) {
  var dialog = document.getElementById('dialog-mac')
  document.getElementById('dialog-view-default').style.display = state === 'default' ? '' : 'none'
  document.getElementById('dialog-view-no').style.display = state === 'no' ? '' : 'none'
  document.getElementById('dialog-view-closed').style.display = state === 'closed' ? '' : 'none'
  if (state === 'closed') {
    dialog.classList.add('state-closed')
  } else {
    dialog.classList.remove('state-closed')
  }
}

function initGuessCards() {
  document.querySelectorAll('.guess-cards .card').forEach(function (card) {
    var img = card.querySelector('img')
    if (!img) return
    var defaultSrc = resolveCover(card.getAttribute('data-cover-default')) || img.src
    var hoverSrc = resolveCover(card.getAttribute('data-cover-hover')) || defaultSrc
    img.src = defaultSrc
    card.addEventListener('mouseenter', function () { img.src = hoverSrc })
    card.addEventListener('mouseleave', function () { img.src = defaultSrc })
  })
}

window.showDialogState = showDialogState

document.addEventListener('DOMContentLoaded', initGuessCards)
