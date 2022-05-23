const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "embed",
  run: async (client, message, args) => {
      
   let embed = new MessageEmbed()
       .setDescription('`embed message`')
       .setColor("RANDOM")
       if (!args.join(' ')) return message.reply({embeds: [embed]})
      
     let don = new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
        .setDescription(args.join(" "))
        .setTimestamp()
        .setColor("RANDOM")
        message.delete().catch(O_o => {});
      
    message.channel.send({embeds: [don]})
  }
}