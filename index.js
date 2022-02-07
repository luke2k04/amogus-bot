require("dotenv").config();
const { Client, Intents, MessageAttachment, Message } = require("discord.js");
const fs = require("fs");
const path = require("path");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once("ready", () => {
  console.log("Ready!");
  client.user.setActivity("AMOGUS", { type: "PLAYING" });
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  const s = (query) => message.content.toLocaleLowerCase().search(query) !== -1;

  switch (true) {
    case s("sus"):
      message.channel.send("AMOGUS");
      break;
    case s("czarnek"):
    case s("czarnk"):
    case s("garnek"):
      const image = fs.readFileSync(path.join(__dirname, "garnek.png"));
      message.channel.send({ files: [image] });
      break;
    case s("ała"):
    case s("całoś"):
    case s("całk"):
      message.channel.send("uSuŃcIe mOjE TwArZe!!");
      break;
    case s("owo"):
      message.channel.send("uwu");
      break;
    case s("uwu"):
      message.channel.send("owo");
      break;
  }
});

client.login(process.env.DISCORD_TOKEN);
