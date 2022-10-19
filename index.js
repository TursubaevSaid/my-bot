const TelegramBot = require("node-telegram-bot-api");

const token = "5510847506:AAFE56p0zFicUQycl-UaVkraSl-O4cYPVDs";

const bot = new TelegramBot(token, { polling: true });

const arrMessageBot = ["Hello", "Hay", "Good"];

const roundMatch = (max, min) => {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

bot.on("message", (msg) => {
  const { id: id, first_name: userName } = msg.chat;

  if (/Hello/gi.test(msg.text)) {
    bot.sendMessage(id, `${arrMessageBot[roundMatch(2, 0)]} ${userName}`);
  }
});
