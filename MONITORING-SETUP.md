# Настройка мониторинга и алертов для BRM AI Site

## 1. Vercel Analytics

### Уже выполнено:
- ✅ Установлен пакет `@vercel/analytics`
- ✅ Добавлен компонент `<Analytics />` в `src/app/layout.tsx`
- ✅ Включен `instrumentationHook` в `next.config.mjs`

### Что нужно сделать в Vercel Dashboard:

1. Перейдите в проект на [vercel.com](https://vercel.com)
2. Откройте вкладку **Analytics**
3. Нажмите **Enable Analytics**
4. Настройте алерты в **Settings → Alerts**:

| Trigger | Condition | Channel |
|---------|-----------|---------|
| Performance | LCP > 2.5s за 10 мин | Email/Slack |
| Performance | INP > 200ms за 10 мин | Email/Slack |
| Performance | CLS > 0.1 за 10 мин | Email/Slack |
| Errors | ≥ 1 Production Error (5xx) | Email |
| Deployments | Deploy Failed | Slack |

## 2. Lighthouse CI

### Уже настроено:
- ✅ Установлен `@lhci/cli`
- ✅ Создан `.lighthouserc.json`
- ✅ Настроен GitHub Action

### Пороговые значения:
- First Contentful Paint: < 2000ms
- Largest Contentful Paint: < 2500ms
- Total Blocking Time: < 200ms
- Cumulative Layout Shift: < 0.1
- Performance Score: > 90%

## 3. Запуск тестов

### Локальное тестирование:
```bash
# Полный тест производительности
npm run test:performance

# Только Lighthouse (требует запущенный сервер)
npm run lighthouse
```

### В CI/CD:
Lighthouse автоматически запускается при:
- Pull Request в main ветку
- Push в main ветку

## 4. Мониторинг Core Web Vitals

### Реальные метрики пользователей:
- Vercel Analytics собирает LCP, INP, CLS автоматически
- Данные доступны в Vercel Dashboard → Analytics

### Синтетические тесты:
- Lighthouse CI запускается на каждый PR
- Результаты сохраняются как артефакты в GitHub Actions

## 5. Еженедельный аудит

Создайте напоминание для проверки:
1. **Search Console** → Core Web Vitals report
2. **PageSpeed Insights** для ключевых страниц
3. **Vercel Analytics** → тренды за неделю

## 6. Оптимизации уже внедрены:

- ✅ Статическая генерация страниц (`dynamic = 'force-static'`)
- ✅ Кэширование статических ресурсов (31536000 секунд)
- ✅ Оптимизированный компонент изображений
- ✅ Структурированные данные JSON-LD
- ✅ Улучшенные метаданные и Open Graph
- ✅ Security headers и HSTS

## 7. Рекомендации по улучшению:

1. **Для LCP**:
   - Используйте `<HeroImage>` компонент для главных изображений
   - Добавьте `<link rel="preload">` для критических шрифтов

2. **Для INP**:
   - Используйте `React.lazy()` для тяжелых компонентов
   - Избегайте блокирующих скриптов

3. **Для CLS**:
   - Всегда указывайте размеры изображений
   - Используйте `aspect-ratio` CSS свойство 