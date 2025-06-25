# Настройка алертов в Vercel Dashboard

## 📍 Где найти настройки алертов
1. В вашем проекте перейдите: **Settings** → **Alerts**
2. Нажмите **"Create Alert"**

## 🚨 Алерты для настройки

### Alert 1: Performance - LCP
- **Name**: "LCP Performance Alert"
- **Trigger**: Performance
- **Condition**: "Largest Contentful Paint is worse than 2.5 seconds"
- **Time Period**: "10 minutes"
- **Notification**: Email/Slack

### Alert 2: Performance - INP  
- **Name**: "INP Performance Alert"
- **Trigger**: Performance  
- **Condition**: "Interaction to Next Paint is worse than 200 milliseconds"
- **Time Period**: "10 minutes"
- **Notification**: Email/Slack

### Alert 3: Performance - CLS
- **Name**: "CLS Performance Alert"
- **Trigger**: Performance
- **Condition**: "Cumulative Layout Shift is worse than 0.1"
- **Time Period**: "10 minutes" 
- **Notification**: Email/Slack

### Alert 4: Errors
- **Name**: "Production Errors"
- **Trigger**: "Errors"
- **Condition**: "1 or more 5xx errors"
- **Time Period**: "5 minutes"
- **Notification**: Email

### Alert 5: Deployments
- **Name**: "Failed Deployments"
- **Trigger**: "Deployments"
- **Condition**: "Deploy failed"
- **Notification**: Slack/Email

## 📧 Настройка Slack (опционально)
1. **Settings** → **Integrations** → **Slack**
2. **Connect to Slack** → выберите канал
3. **Authorize** подключение 