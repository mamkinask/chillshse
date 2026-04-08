export function sanitizeObjectFromParam(from) {
  from = String(from || '').trim()
  if (!from || from.indexOf('..') !== -1) return ''
  if (/^https?:\/\//i.test(from) || from.indexOf('//') !== -1) return ''
  if (!/^[a-zA-Z0-9._-]+\.html$/i.test(from)) return ''
  return from
}

function bindObjectBackButton(back, safeFrom) {
  if (!back) return
  if (safeFrom) {
    back.setAttribute('href', safeFrom)
    back.onclick = null
    return
  }
  back.setAttribute('href', 'timeline.html')
  back.onclick = function (e) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    window.history.back()
  }
}

export function applyObjectFromQuery() {
  try {
    var params = new URLSearchParams(window.location.search)
    var safe = sanitizeObjectFromParam(params.get('from'))

    var back = document.querySelector('a.obj-nav-btn[aria-label="Назад"]')
    bindObjectBackButton(back, safe)

    if (!safe) return

    var suffix = '?from=' + encodeURIComponent(safe)

    document.querySelectorAll('a.media-card[href]').forEach(function (a) {
      var href = a.getAttribute('href')
      if (!href || href === '#' || href.indexOf('?') !== -1) return
      var file = href.replace(/^\.\//, '').split('/').pop()
      if (!sanitizeObjectFromParam(file)) return
      a.setAttribute('href', file + suffix)
    })
  } catch (e) {}
}
