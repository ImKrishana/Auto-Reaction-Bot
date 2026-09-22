# Auto Reaction Bot No Hosting 

- **Telegram Bot that automatically reacts to posts in telegram channels, groups, and private messages**.
- **Lightweight and Serverless**: Built on Cloudflare Workers, the bot is serverless, efficient, and no hosting platform required.

## Deployment 

### 1. Click the button below:

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/ImKrishana/Auto-Reaction-Bot)

### 2. Set BOT_TOKEN

After creating the Worker, go to:

`Settings → Variables and Secrets`

Add a **Secret**:

```text
Name: BOT_TOKEN
Value: YOUR_TELEGRAM_BOT_TOKEN
```
### 3. Set Webhook

Replace `YOUR_BOT_TOKEN` and `YOUR_WORKER_URL`:

```bash
curl "https://api.telegram.org/botYOUR_BOT_TOKEN/setWebhook?url=YOUR_WORKER_URL"
```

Example:

```bash
curl "https://api.telegram.org/bot123456:ABCDEF/setWebhook?url=https://your-worker.workers.dev"
```

## Xtra

Live bot can be found here

**Demo Bot:** [@AutomaticReactsRoBot](https://t.me/AutomaticReactsRoBot)

---

[![License](https://img.shields.io/github/license/ImKrishana/AutomaticReactsRoBot)](https://github.com/ImKrishana/@AutomaticReactsRoBot/blob/main/LICENSE)
[![Telegram](https://img.shields.io/badge/Telegram-26A5E4?logo=telegram&logoColor=white)](https://t.me/TheZake)
