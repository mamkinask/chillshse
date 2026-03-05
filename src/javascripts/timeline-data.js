/**
 * Источник данных для страницы Таймлайн.
 * Сейчас: мок getMockTimelineItems().
 * Позже: заменить на запрос к Airtable в fetchTimelineFromAirtable().
 *
 * Формат элемента: { imageUrl, mediaType?, title?, genres?, tags?, year? }
 * В Airtable можно сделать поля: Image (attachment), MediaType, Title, Genres, Tags, Year.
 */

function getMockTimelineItems() {
  var base = 'http://localhost:3845/assets/';
  var imgs = [
    '8e88b60960fed41925633bfcd8a1f06e011aeb2b.png',
    '695b7d44633a776a9c4c9339d6869d73e62d11c3.png',
    'cfe91616508dc1a0cedd949da9dfbcc102440439.png',
    '1af0eb883e1e660e7e958b0d0042ad2c49d759ce.png',
    '5dbfa63bff435ebaabbf598a78b7c3665f648ad9.png',
    'bf33ad6fb809e8993a6d7b385cd0653203b18799.png',
    'af640f65211485fbe069fc5a3a2e8340fa11a4af.png',
    '7eb4b315badaec4281a6ccf9dee42959e95b8372.png'
  ];
  var titles = ['Чужой', 'Зомби', 'Эмитивилл', 'Мёртвая зона', 'Долгий путь', 'Дракула', 'Сияние', 'Туман'];
  var genres = ['Боди-хоррор', 'Космический хоррор', 'Зомби', 'Дом с призраками', 'Мистика', 'Вампиры', 'Психологический', 'Мистика'];
  return imgs.map(function (url, i) {
    return {
      imageUrl: base + url,
      mediaType: 'ФИЛЬМ',
      title: titles[i] || '',
      genres: '‼ ' + (genres[i] || 'Хоррор'),
      tags: '#тег1 #тег2',
      year: 1979
    };
  });
}

/**
 * Загрузка карточек таймлайна.
 * Сейчас: возвращает мок.
 * Для Airtable: раскомментировать/дописать fetch к API и маппинг полей.
 *
 * Пример Airtable:
 * GET https://api.airtable.com/v0/BASE_ID/Timeline
 * Header: Authorization: Bearer YOUR_PERSONAL_ACCESS_TOKEN
 * В ответе: records[].fields { Image: [{ url }], MediaType, Title, Genres, Tags, Year }
 */
function fetchTimelineFromAirtable() {
  return Promise.resolve(getMockTimelineItems());

  // --- Вариант с Airtable (раскомментировать и подставить BASE_ID + токен) ---
  // var AIRTABLE_BASE = 'YOUR_BASE_ID';
  // var AIRTABLE_TOKEN = 'YOUR_TOKEN'; // хранить на бэкенде или в env
  // return fetch('https://api.airtable.com/v0/' + AIRTABLE_BASE + '/Timeline', {
  //   headers: { 'Authorization': 'Bearer ' + AIRTABLE_TOKEN }
  // })
  //   .then(function (r) { return r.json(); })
  //   .then(function (data) {
  //     return (data.records || []).map(function (rec) {
  //       var f = rec.fields || {};
  //       var img = f.Image && f.Image[0] && f.Image[0].url;
  //       return {
  //         imageUrl: img || '',
  //         mediaType: f.MediaType || '',
  //         title: f.Title || '',
  //         genres: f.Genres || '',
  //         tags: f.Tags || '',
  //         year: f.Year
  //       };
  //     });
  //   });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getMockTimelineItems: getMockTimelineItems, fetchTimelineFromAirtable: fetchTimelineFromAirtable };
}
