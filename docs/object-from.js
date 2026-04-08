/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/javascript/object-from-query.js
function sanitizeObjectFromParam(from) {
  from = String(from || '').trim();
  if (!from || from.indexOf('..') !== -1) return '';
  if (/^https?:\/\//i.test(from) || from.indexOf('//') !== -1) return '';
  if (!/^[a-zA-Z0-9._-]+\.html$/i.test(from)) return '';
  return from;
}
function applyObjectFromQuery() {
  try {
    var params = new URLSearchParams(window.location.search);
    var safe = sanitizeObjectFromParam(params.get('from'));
    if (!safe) return;
    var suffix = '?from=' + encodeURIComponent(safe);
    var back = document.querySelector('a.obj-nav-btn[aria-label="Назад"]');
    if (back) back.setAttribute('href', safe);
    document.querySelectorAll('a.media-card[href]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href || href === '#' || href.indexOf('?') !== -1) return;
      var file = href.replace(/^\.\//, '').split('/').pop();
      if (!sanitizeObjectFromParam(file)) return;
      a.setAttribute('href', file + suffix);
    });
  } catch (e) {}
}
;// ./src/javascript/object-from-static.js

document.addEventListener('DOMContentLoaded', applyObjectFromQuery);
/******/ })()
;