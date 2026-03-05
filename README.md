# ЧИЛЛС

Сайт про хоррор-медиа: фильмы, книги, комиксы и игры.

## Запуск

```bash
npm install
npm start
```

Сайт откроется автоматически в браузере.

## Airtable (опционально)

Таймлайн по умолчанию работает на тестовых данных. Чтобы подключить Airtable, создай файл `airtable-secret.js` в корне проекта:

```js
module.exports = {
  AIRTABLE_BASE: 'твой_base_id',
  AIRTABLE_TOKEN: 'твой_personal_access_token'
}
```

Файл не попадает в репозиторий — он добавлен в `.gitignore`.
