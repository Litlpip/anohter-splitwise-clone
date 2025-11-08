# PWA Setup Guide

## Что было реализовано

### 1. Установленные зависимости
- `vite-plugin-pwa` - плагин для автоматической генерации Service Worker
- `workbox-window` - библиотека для работы с Service Worker в клиенте

### 2. Созданные файлы

#### Конфигурация
- `vite.config.ts` - настроен PWA плагин с:
  - **Network First** стратегией для API запросов
  - **Cache First** стратегией для статических ресурсов (изображения, JS, CSS)
  - Автоматическое обновление Service Worker
  - Включен dev режим для тестирования

#### Манифест и иконки
- `public/manifest.json` - PWA манифест с настройками приложения
- `public/icons/icon-192x192.svg` - иконка 192x192 (placeholder)
- `public/icons/icon-512x512.svg` - иконка 512x512 (placeholder)
- `public/icons/apple-touch-icon.svg` - иконка для iOS

#### Компоненты и хуки
- `src/hooks/useServiceWorker.ts` - хук для работы с Service Worker
- `src/components/PWAUpdatePrompt.tsx` - компонент для уведомления о обновлениях
- `src/vite-env.d.ts` - TypeScript типы для PWA

#### HTML
- `index.html` - добавлены meta-теги для PWA:
  - Адаптивная тема (следует системной теме)
  - iOS поддержка
  - Android поддержка
  - Viewport настройки

## Как тестировать

### 1. Запуск в dev режиме
```bash
npm run dev
```
Откройте http://localhost:5173 в браузере

### 2. Проверка PWA в браузере
1. Откройте Chrome DevTools (F12)
2. Перейдите на вкладку **Application**
3. В левом меню выберите:
   - **Manifest** - проверьте настройки манифеста
   - **Service Workers** - проверьте что SW зарегистрирован
   - **Cache Storage** - проверьте кэшированные файлы

### 3. Тестирование offline режима
1. В DevTools → Application → Service Workers
2. Поставьте галочку **Offline**
3. Обновите страницу - приложение должно работать

### 4. Тестирование на мобильном устройстве

#### Вариант A: Через локальную сеть
```bash
npm run dev -- --host
```
Откройте на телефоне URL, который покажет Vite (например, http://192.168.x.x:5173)

#### Вариант B: Production сборка
```bash
npm run build
npm run preview
```

### 5. Установка PWA

#### Desktop (Chrome/Edge)
- В адресной строке справа появится иконка установки ⊕
- Нажмите на неё и выберите "Установить"

#### Android (Chrome)
- Откройте меню (⋮) → "Добавить на главный экран"
- Или появится баннер внизу экрана

#### iOS (Safari)
- Нажмите кнопку "Поделиться" (квадрат со стрелкой вверх)
- Выберите "На экран «Домой»"

## Lighthouse аудит

Для проверки PWA качества:
1. Откройте DevTools → Lighthouse
2. Выберите категорию "Progressive Web App"
3. Нажмите "Analyze page load"

Целевые показатели:
- PWA badge: ✓
- Installable: ✓
- Works offline: ✓

## Production деплой

### Важно для PWA:
1. **HTTPS обязателен** - Service Workers работают только по HTTPS
2. Рекомендуемые хостинги:
   - Vercel (автоматический HTTPS)
   - Netlify (автоматический HTTPS)
   - GitHub Pages (с custom domain для HTTPS)
   - Firebase Hosting

### Команды для деплоя:
```bash
npm run build
```

Результат будет в папке `dist/`

## Что дальше?

Следующие этапы из PWA_ROADMAP.md:
- Этап 2: Установка необходимых библиотек (React Router, Chakra UI, Tanstack Query)
- Этап 3: Структура проекта по FSD архитектуре

## Полезные ссылки

- [Vite PWA Plugin Docs](https://vite-pwa-org.netlify.app/)
- [Workbox Documentation](https://developer.chrome.com/docs/workbox/)
- [PWA Checklist](https://web.dev/pwa-checklist/)
