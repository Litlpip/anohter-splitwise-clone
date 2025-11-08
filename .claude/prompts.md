# Claude Code Prompts для SplitWise Clone

## Контекст проекта
Это mobile-first PWA приложение для разделения расходов между друзьями, аналог Splitwise.

## Правила разработки

### Архитектура
- Используем Feature-Sliced Design (FSD) архитектуру
- Минимальная структура папок, расширяем по необходимости
- Каждая фича изолирована и независима

### Код-стайл
- TypeScript строгий режим
- Функциональные компоненты + хуки
- Именование: camelCase для переменных, PascalCase для компонентов
- Комментарии на русском языке где это улучшает понимание
- ESM импорты (import/export)

### Mobile-First подход
- Все компоненты сначала проектируются для мобильных
- Минимальный размер кликабельных элементов: 44x44px
- Touch-friendly интерфейс
- Оптимизация для одной руки (bottom navigation)

### PWA требования
- Все новые фичи должны работать offline
- Кэширование данных через Service Worker
- Оптимистичные UI обновления
- Синхронизация при восстановлении соединения

### Производительность
- Lazy loading для роутов
- Code splitting по фичам
- Оптимизация изображений (WebP, lazy loading)
- Минимизация bundle size

### Chakra UI
- Использовать встроенные компоненты где возможно
- Кастомизация через theme.ts
- Responsive props для адаптивности
- CSS Modules для специфичных стилей

### Состояние
- Tanstack Query для серверного состояния
- React Context для глобального UI состояния (если нужно)
- Local state через useState/useReducer
- Не дублировать серверное состояние в локальном

### Формы
- React Hook Form для всех форм
- Zod схемы для валидации
- Типы генерируются из Zod схем
- Валидация на клиенте и сервере

## Частые задачи

### Создание новой фичи
```
Структура:
src/features/feature-name/
├── ui/           # Компоненты
├── model/        # Логика, хуки, stores
├── api/          # API запросы
└── index.ts      # Public API
```

### Создание нового компонента
```tsx
import { FC } from 'react'

interface ComponentNameProps {
  // props
}

export const ComponentName: FC<ComponentNameProps> = ({ ...props }) => {
  return (
    // JSX
  )
}
```

### API запрос с Tanstack Query
```tsx
import { useQuery } from '@tanstack/react-query'

export const useFeatureData = () => {
  return useQuery({
    queryKey: ['feature-key'],
    queryFn: async () => {
      // fetch data
    },
    staleTime: 1000 * 60 * 5, // 5 минут
  })
}
```

## Debugging
- Используй React DevTools для компонентов
- Chrome DevTools → Application для PWA
- Network tab для проверки кэширования
- Lighthouse для аудита производительности

## Roadmap
См. PWA_ROADMAP.md для полного плана разработки
