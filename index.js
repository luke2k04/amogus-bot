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
  if (message.author.bot) return;
  if (message.content.toLocaleLowerCase().search("sus") !== -1) {
    message.channel.send("AMOGUS");
  } else if (message.content.toLocaleLowerCase().search("czarnek") !== -1) {
    message.channel.send(
      new Discord.MessageEmbed().setImage(
        "https://cdn.discordapp.com/attachments/939843875776905236/939936244182437898/czarnek_ty_chuju.png"
      )
    );
  }
});

client.login(process.env.DISCORD_TOKEN);
