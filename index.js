require("dotenv").config();
const { Client, Intents } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once("ready", () => {
  console.log("Ready!");
  client.user.setActivity("AMOGUS", { type: "PLAYING" });
});

client.on("messageCreate", (message) => {
  if (message.content.toLocaleLowerCase().search("sus") !== -1) {
    message.channel.send("AMOGUS");
  } else if (message.content.toLocaleLowerCase().search("fur") !== -1) {
    message.channel.send("Burn furries! :flame::fox::flame:");
  }
});

client.login(process.env.DISCORD_TOKEN);
