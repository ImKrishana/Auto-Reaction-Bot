## Deployment

<details>
<summary><strong>Method 1: One Click Deploy</strong></summary>

### Step 1: Click the button below

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/ImKrishana/Auto-Reaction-Bot)

### Step 2: Set BOT_TOKEN

After creating the Worker, go to:

`Settings → Variables and Secrets`

Add a **Secret**:

```text
Name: BOT_TOKEN
Value: YOUR_TELEGRAM_BOT_TOKEN
```

### Step 3: Set Webhook

Replace `YOUR_BOT_TOKEN` and `YOUR_WORKER_URL`:

```bash
curl "https://api.telegram.org/botYOUR_BOT_TOKEN/setWebhook?url=YOUR_WORKER_URL"
```

Example:

```bash
curl "https://api.telegram.org/bot123456:ABCDEF/setWebhook?url=https://your-worker.workers.dev"
```

</details>

<details>
<summary><strong>Method 2: Manual Deployment</strong></summary>

### Step 1: Create a Cloudflare Account

Create a Cloudflare account and log in to the dashboard.

### Step 2: Create a Worker

Go to **Workers & Pages**, click **Create Worker**, and choose a subdomain.

### Step 3: Add the Code

Open the repository's `react.js` file, copy the code, and paste it into your Worker.

### Step 4: Add BOT_TOKEN Secret

Go back to your Worker's dashboard.

Go to:

`Settings → Variables and Secrets`

Under **Secrets**, add:

```text
Name: BOT_TOKEN
Value: YOUR_TELEGRAM_BOT_TOKEN
```

### Step 5: Deploy

Click **Deploy**.

Your Worker is now ready.

### Step 6: Set Webhook

Replace `YOUR_BOT_TOKEN` and `YOUR_WORKER_URL`:

```bash
curl "https://api.telegram.org/botYOUR_BOT_TOKEN/setWebhook?url=YOUR_WORKER_URL"
```

</details>

## Xtra

Live bot can be found here

**Demo Bot:** [@AutomaticReactsRoBot](https://t.me/AutomaticReactsRoBot)

---

[![License](https://img.shields.io/github/license/ImKrishana/Auto-Reaction-Bot)](https://github.com/ImKrishana/Auto-Reaction-Bot/blob/main/LICENSE)
[![Telegram](https://img.shields.io/badge/Telegram-26A5E4?logo=telegram&logoColor=white)](https://t.me/TheZake)
