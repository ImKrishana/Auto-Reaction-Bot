const EMOJIS = [
  "👍", "❤️", "🔥", "🥰", "👏", "😁", "🤔", "🤯", "😱", "😢",
  "🎉", "🤩", "🙏", "👌", "🕊", "🤡", "🥱", "🥴", "😍", "🤷‍♂️",
  "❤️‍🔥", "🌚", "💯", "🤣", "⚡", "🏆", "🗿", "😐", "🤨", "🍾",
  "💋", "😈", "😴", "😭", "🤓", "👻", "👨‍💻", "👀", "🙈", "🤷‍♀️",
  "😇", "🤝", "✍️", "🤗", "🫡", "😨", "🧑‍🎄", "🎄", "⛄", "🤪",
  "🆒", "💘", "🙊", "🦄", "😘", "🙉", "💊", "😎", "👾", "🤷"
];

export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("OK");
    }

    try {
      const update = await request.json();

      if (!update.message) {
        return new Response("OK");
      }

      const { chat, message_id } = update.message;
      const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];

      await fetch(
        `https://api.telegram.org/bot${env.BOT_TOKEN}/setMessageReaction`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            chat_id: chat.id,
            message_id,
            reaction: [
              {
                type: "emoji",
                emoji
              }
            ]
          })
        }
      );

      return new Response("OK");
    } catch {
      return new Response("Internal Server Error", {
        status: 500
      });
    }
  }
};
