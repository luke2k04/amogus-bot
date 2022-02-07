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
  if (message.content.toLocaleLowerCase().search("sus") !== -1) {
    message.channel.send("AMOGUS");
  } else if (message.content.toLocaleLowerCase().search("czarnek") !== -1) {
    const image = fs.readFileSync(path.join(__dirname, "garnek.png"));
    message.channel.send({ files: [image] });
  } else if (message.content.toLocaleLowerCase().search("czarnk") !== -1) {
    const image = fs.readFileSync(path.join(__dirname, "garnek.png"));
    message.channel.send({ files: [image] });
  } else if (message.content.toLocaleLowerCase().search("garnek") !== -1) {
    const image = fs.readFileSync(path.join(__dirname, "garnek.png"));
    message.channel.send({ files: [image] });
  } else if (message.content.toLocaleLowerCase().search("ała") !== -1) {
    message.channel.send("cała? ta pojebana kurwa?");
  } else if (message.content.toLocaleLowerCase().search("całoś") !== -1) {
    message.channel.send("cała? ta pojebana kurwa?");
  } else if (message.content.toLocaleLowerCase().search("całk") !== -1) {
    message.channel.send("cała? ta pojebana kurwa?");
  } else if (message.content.toLocaleLowerCase().search("owo") !== -1) {
    message.channel.send("uwu");
  } else if (message.content.toLocaleLowerCase().search("uwu") !== -1) {
    message.channel.send("owo");
  }

  // can someone rewrite to switch
});

client.login(process.env.DISCORD_TOKEN);
