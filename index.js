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
    message.channel.send("AMOGUSs");
  }
});

client.login(process.env.DISCORD_TOKEN);
