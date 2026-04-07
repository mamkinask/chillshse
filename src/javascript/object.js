import '../stylesheets/object.css'

var PLACEHOLDER = '../assets/media/elements_pictures/place-holder-picture.png'

function esc(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function show(id) { var el = document.getElementById(id); if (el) el.style.display = '' }
function hide(id) { var el = document.getElementById(id); if (el) el.style.display = 'none' }
function setHtml(id, html) { var el = document.getElementById(id); if (el) el.innerHTML = html }
function setText(id, text) { var el = document.getElementById(id); if (el) el.textContent = text }
function setAttr(id, attr, val) { var el = document.getElementById(id); if (el) el.setAttribute(attr, val) }

function buildMetaRow(label, value) {
  if (!value || !String(value).trim()) return ''
  var row = document.createElement('div')
  row.className = 'meta-row'
  var lbl = document.createElement('span')
  lbl.className = 'meta-label'
  lbl.textContent = label + ':'
  var val = document.createElement('span')
  val.className = 'meta-value'
  val.textContent = String(value)
  row.appendChild(lbl)
  row.appendChild(val)
  return row.outerHTML
}

function buildMediaCard(item) {
  var a = document.createElement('a')
  a.className = 'media-card'
  a.href = (item.id || '') + '.html'

  var imgWrap = document.createElement('div')
  imgWrap.className = 'media-card-img'

  var img = document.createElement('img')
  img.src = item.Cover || PLACEHOLDER
  img.alt = item.Title || ''
  img.loading = 'lazy'
  img.onerror = function () { this.src = PLACEHOLDER; this.onerror = null }
  imgWrap.appendChild(img)

  var titleDiv = document.createElement('div')
  titleDiv.className = 'media-card-title'
  titleDiv.textContent = item.Title || ''

  a.appendChild(imgWrap)
  a.appendChild(titleDiv)
  return a.outerHTML
}

function fillCardSection(sectionId, rowId, fieldValue, allData) {
  if (!fieldValue || !fieldValue.trim()) return
  var names = fieldValue.split('|').map(function (s) { return s.trim() }).filter(Boolean)
  var cards = names
    .map(function (name) { return allData.find(function (x) { return x.Title === name }) })
    .filter(Boolean)
  if (!cards.length) return
  var html = cards.map(buildMediaCard).join('')
  setHtml(rowId, html)
  show(sectionId)
}

function buildMetaHtml(item, year) {
  var metaHtml = ''
  var t = item.Type

  if (t === 'Фильм' || t === 'Сериал') {
    metaHtml += buildMetaRow('Медиаформат', t)
    metaHtml += buildMetaRow('Год', year)
    metaHtml += buildMetaRow('Поджанры', item.Subgenres)
    metaHtml += buildMetaRow('Франшиза', item.FranchiseName)
    metaHtml += buildMetaRow('Страны', item.Country)
    metaHtml += buildMetaRow('Режиссёр', item.Director)
    metaHtml += buildMetaRow('Рейтинг', item.Rating)
    metaHtml += buildMetaRow('Платформы', item.Platform)
    metaHtml += buildMetaRow('Длительность', item.Duration)
    metaHtml += buildMetaRow('Возраст', item.AgeRating)
  } else if (t === 'Игра') {
    metaHtml += buildMetaRow('Медиаформат', t)
    metaHtml += buildMetaRow('Год', year)
    metaHtml += buildMetaRow('Поджанры', item.Subgenres)
    metaHtml += buildMetaRow('Разработчик', item.Developer)
    metaHtml += buildMetaRow('Издатель', item.Publisher)
    metaHtml += buildMetaRow('Платформы', item.Platform)
    metaHtml += buildMetaRow('Рейтинг', item.Rating)
    metaHtml += buildMetaRow('Возраст', item.AgeRating)
  } else if (t === 'Книга') {
    metaHtml += buildMetaRow('Медиаформат', t)
    metaHtml += buildMetaRow('Год', year)
    metaHtml += buildMetaRow('Поджанры', item.Subgenres)
    metaHtml += buildMetaRow('Автор', item.Author)
    metaHtml += buildMetaRow('Издательство', item.Publisher)
    metaHtml += buildMetaRow('Страниц', item.Pages)
    metaHtml += buildMetaRow('Рейтинг', item.Rating)
    metaHtml += buildMetaRow('Возраст', item.AgeRating)
  } else if (t === 'Комикс') {
    metaHtml += buildMetaRow('Медиаформат', t)
    metaHtml += buildMetaRow('Год', year)
    metaHtml += buildMetaRow('Поджанры', item.Subgenres)
    metaHtml += buildMetaRow('Автор', item.Author)
    metaHtml += buildMetaRow('Издательство', item.Publisher)
    metaHtml += buildMetaRow('Выпусков', item.Issues)
    metaHtml += buildMetaRow('Рейтинг', item.Rating)
    metaHtml += buildMetaRow('Возраст', item.AgeRating)
  } else {
    metaHtml += buildMetaRow('Медиаформат', t)
    metaHtml += buildMetaRow('Год', year)
    metaHtml += buildMetaRow('Поджанры', item.Subgenres)
    metaHtml += buildMetaRow('Рейтинг', item.Rating)
    metaHtml += buildMetaRow('Возраст', item.AgeRating)
  }
  return metaHtml
}

function initObjectPage() {
  var params = new URLSearchParams(window.location.search)
  var id = params.get('id')
  var loadingEl = document.getElementById('obj-loading')

  if (!id) {
    if (loadingEl) loadingEl.textContent = 'ID не указан. Вернитесь на таймлайн.'
    return
  }

  fetch('../assets/data/horror_media.json')
    .then(function (r) { return r.json() })
    .then(function (data) {
      var item = data.find(function (x) { return x.id === id })

      if (!item) {
        if (loadingEl) loadingEl.textContent = 'Произведение не найдено.'
        return
      }

      document.title = item.Title + ' — ЧИЛЛС'
      var year = item.YearEnd && String(item.YearEnd).trim()
        ? String(item.YearEnd)
        : String(item.Year || '')

      setText('obj-title-name', '▷ ' + item.Title + ' ◁')
      setText('obj-title-year', year ? '(' + year + ')' : '')

      var posterImg = document.getElementById('obj-poster-img')
      if (posterImg) {
        posterImg.src = item.Cover || PLACEHOLDER
        posterImg.alt = item.Title || ''
        posterImg.onerror = function () { this.src = PLACEHOLDER; this.onerror = null }
      }

      var hasTrailerType = item.Type === 'Фильм' || item.Type === 'Сериал' || item.Type === 'Игра'
      if (hasTrailerType) {
        var trailerEl = document.getElementById('obj-trailer')
        if (trailerEl) trailerEl.style.display = ''

        var typeLabel = item.Type === 'Игра' ? 'ГЕЙМПЛЕЙ'
          : 'ТРЕЙЛЕР ' + (item.Type === 'Сериал' ? 'СЕРИАЛА' : 'ФИЛЬМА')
        setText('obj-trailer-header', '▷ ' + typeLabel)

        var trailerThumb = document.getElementById('obj-trailer-thumb')
        if (trailerThumb) {
          var tImg = document.createElement('img')
          tImg.src = item.TrailerCover || ('../assets/media/trailers_pictures/' + id + '.jpg')
          tImg.alt = 'Трейлер'
          tImg.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;'
          tImg.onerror = function () {
            this.src = '../assets/media/trailers_pictures/trailer-stub.jpg'
            this.onerror = null
          }
          trailerThumb.innerHTML = ''
          trailerThumb.appendChild(tImg)
        }
        var trailerHref = item.TrailerLink || item.Link
        if (trailerHref) {
          setAttr('obj-trailer-link', 'href', trailerHref)
        }
      }

      setHtml('meta-block', buildMetaHtml(item, year))

      if (item.Tropes && item.Tropes.trim()) {
        var tropesHtml = item.Tropes.split('|').map(function (t) {
          return '<span class="trope-tag">' + esc(t.trim()) + '</span>'
        }).join('')
        setHtml('tropes-bar', tropesHtml)
        show('sec-tropes')
      }

      if (item.Description && item.Description.trim()) {
        setText('obj-desc-text', item.Description)
        show('sec-desc')
      }

      if (item.Quote && item.Quote.trim()) {
        setText('obj-quote-text', '«' + item.Quote + '»')
        show('sec-quote')
      }

      fillCardSection('sec-influence', 'influence-row', item.Influence, data)
      fillCardSection('sec-legacy', 'legacy-row', item.Legacy, data)
      fillCardSection('sec-franchise', 'franchise-row', item.Franchise, data)
      fillCardSection('sec-samegenre', 'samegenre-row', item.SameGenre, data)

      if (item.Type === 'Игра' || item.Type === 'Комикс') {
        setText('cast-header', 'Персонажи:')
      }

      if (loadingEl) loadingEl.remove()
      show('obj-nav')
      show('obj-content')

      var footer = document.getElementById('obj-footer')
      var content = document.getElementById('obj-content')
      if (footer && content) {
        footer.style.display = ''
        requestAnimationFrame(function () {
          var contentBottom = content.offsetTop + content.offsetHeight
          footer.style.top = (contentBottom + 20) + 'px'
          var page = document.getElementById('object-page')
          if (page) page.style.minHeight = (contentBottom + 20 + 150) + 'px'
        })
      }
    })
    .catch(function (err) {
      console.error('Ошибка загрузки данных:', err)
      if (loadingEl) loadingEl.textContent = 'ОШИБКА ЗАГРУЗКИ ДАННЫХ'
    })
}

document.addEventListener('DOMContentLoaded', initObjectPage)
