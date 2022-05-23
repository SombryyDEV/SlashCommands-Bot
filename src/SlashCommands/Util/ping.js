const Discord = require("discord.js")

module.exports =  {
    name: "ping",
    description: "Veja meu ping",
    type: "CHAT_INPUT",    
    
    run: async (client, interaction, args) => {

        let don = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setDescription(`📡 Meu ping atual é: \`${client.ws.ping}ms\`**.**`);

        interaction.reply({ embeds: [don], ephemeral: true })

    }
}