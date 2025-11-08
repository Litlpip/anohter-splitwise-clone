# Changelog

## [2025-11-08] - Этап 1: Базовая настройка PWA ✅

### Добавлено
- Установлены PWA зависимости:
  - `vite-plugin-pwa` - плагин для генерации Service Worker
  - `workbox-window` - библиотека для работы с Service Worker

- Создана структура PWA:
  ```
  public/
  ├── icons/
  │   ├── icon-192x192.svg (placeholder иконка)
  │   ├── icon-512x512.svg (placeholder иконка)
  │   └── apple-touch-icon.svg (для iOS)
  └── manifest.json (PWA манифест)

  src/
  ├── components/
  │   └── PWAUpdatePrompt.tsx (компонент уведомлений об обновлениях)
  ├── hooks/
  │   └── useServiceWorker.ts (хук для работы с SW)
  └── vite-env.d.ts (TypeScript типы для PWA)
  ```

- Настроен Service Worker:
  - Network First стратегия для API запросов
  - Cache First стратегия для статических ресурсов (изображения, JS, CSS)
  - Автоматическое обновление SW
  - Включен dev режим для локального тестирования

- Обновлен `index.html`:
  - Добавлены PWA meta-теги
  - Настроена адаптивная тема (следует системной)
  - Добавлена поддержка iOS и Android
  - Оптимизирован viewport для мобильных устройств

- Интегрирован PWA Update Prompt:
  - Уведомление о новых версиях приложения
  - Уведомление о готовности работы offline
  - Кнопка обновления приложения

- Создана документация:
  - `PWA_ROADMAP.md` - дорожная карта разработки
  - `PWA_SETUP_GUIDE.md` - руководство по настройке и тестированию

### Конфигурация
- `vite.config.ts` - подключен и настроен vite-plugin-pwa
- `tsconfig.json` - добавлены типы для PWA

### Тестирование
- Dev сервер запускается без ошибок: `npm run dev`
- Service Worker регистрируется корректно
- Приложение готово к тестированию PWA функциональности

### Следующие шаги
Этап 2: Установка библиотек (React Router, Chakra UI, Tanstack Query, React Hook Form + Zod)

---

## Технические детали

### PWA возможности
- ✅ Installable - можно установить как приложение
- ✅ Offline-ready - базовая работа offline
- ✅ Auto-update - автоматическое обновление
- ✅ Mobile-optimized - оптимизировано для мобильных
- ✅ Network-resilient - устойчиво к сбоям сети

### Caching стратегии
1. **API requests** (`/^https:\/\/api\..*/`):
   - Strategy: Network First
   - Fallback: Cache
   - Timeout: 10 seconds
   - Cache TTL: 24 hours

2. **Images** (`.png`, `.jpg`, `.jpeg`, `.svg`, `.gif`, `.webp`):
   - Strategy: Cache First
   - Cache TTL: 30 days
   - Max entries: 100

3. **Static assets** (`.js`, `.css`):
   - Strategy: Cache First
   - Cache TTL: 7 days
   - Max entries: 100

### Поддерживаемые платформы
- ✅ Chrome/Edge (Desktop & Mobile)
- ✅ Safari (Desktop & iOS)
- ✅ Firefox (Desktop & Mobile)
- ✅ Samsung Internet

### Требования для production
- ⚠️ HTTPS обязателен для Service Workers
- ⚠️ Рекомендуется обновить Node.js до 20.19+ или 22.12+
