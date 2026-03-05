/**
 * Список вопросов теста диагностики.
 * Можно менять: количество вопросов, картинки, тексты, варианты ответов.
 * Позже источник — Airtable (таблица Questions с полями: imageUrl, questionText, options как JSON или связанная таблица).
 */

module.exports = [
  {
    imageUrl: 'http://localhost:3845/assets/f29a954458e49a8533fd38b0171781d467243c57.png',
    question: 'Где вам было бы страшнее оказаться?',
    options: [
      { text: '1) Космический корабль в глубоком космосе', scores: { fear: 'unknown', intensity: 1 } },
      { text: '2) Заброшенный дом/особняк с тёмными коридорами', scores: { fear: 'supernatural', mood: 'gothic' } },
      { text: '3) Лес/дикая природа (без цивилизации)', scores: { fear: 'unknown', mood: 'modern' } },
      { text: '4) Подводная станция/пещера (ощущение давящей воды)', scores: { fear: 'unknown', intensity: 2 } },
      { text: '5) Пустой, абсолютно безлюдный город/общественное пространство, где должны быть люди, но их почему-то абсолютно нигде нет', scores: { fear: 'human', mood: 'modern' } }
    ]
  },
  {
    imageUrl: '',
    question: 'Какой формат вам ближе?',
    options: [
      { text: 'Фильм', scores: { format: 'film', intensity: 1 } },
      { text: 'Книга', scores: { format: 'book', intensity: 0 } },
      { text: 'Игра', scores: { format: 'game', intensity: 2 } },
      { text: 'Комикс', scores: { format: 'comic', intensity: 1 } }
    ]
  },
  {
    imageUrl: '',
    question: 'Какой уровень «страшности» комфортен?',
    options: [
      { text: 'Лёгкий треш, без жёстких сцен', scores: { intensity: 0, mood: 'light' } },
      { text: 'Средний — напряжение и атмосфера', scores: { intensity: 1, mood: 'medium' } },
      { text: 'Жёсткий хоррор, можно кровь и шок', scores: { intensity: 2, mood: 'dark' } }
    ]
  },
  {
    imageUrl: '',
    question: 'Что вас пугает больше?',
    options: [
      { text: 'Потустороннее, необъяснимое', scores: { fear: 'supernatural' } },
      { text: 'Человек и его поступки', scores: { fear: 'human' } },
      { text: 'Телесное, телесные ужасы', scores: { fear: 'body' } },
      { text: 'Неизвестное, космос, чуждое', scores: { fear: 'unknown' } }
    ]
  },
  {
    imageUrl: '',
    question: 'Сколько времени готовы потратить на произведение?',
    options: [
      { text: 'Короткий формат (до 2 часов)', scores: { duration: 'short' } },
      { text: 'Средний (вечер, несколько часов)', scores: { duration: 'medium' } },
      { text: 'Долгий (сериал или книга)', scores: { duration: 'long' } }
    ]
  }
]
