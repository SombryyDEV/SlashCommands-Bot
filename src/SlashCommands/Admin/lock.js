const Discord = require('discord.js')

module.exports={
    name: 'lock',
    description: 'Trancar um canal',
    type: 'CHAT_INPUT',
    run: async(client, interaction, args)=>{
        if (!interaction.member.permissions.has("MANAGE_CHANNELS")) {
            interaction.reply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setColor('RED')
                    .setDescription('❌ You are not allowed to use this command.')
                ], ephemeral: true
            })
        } else {
            
            interaction.reply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setDescription('✅ OK! Esse chat foi trancado com sucesso.')
                ], ephemeral: true
            }).then(msg => { 
            interaction.channel.permissionOverwrites.edit(interaction.guild.id, { SEND_MESSAGES: false }).catch(e => {
                console.log(e)
                interaction.edit({
                    embeds: [
                        new Discord.MessageEmbed()
                        .setColor('RED')
                        .setDescription('❌ ERRO! Algo deu errado ao trancar esse chat.')
                        .setFooter({
                            text: 'Reporte esse bug pra nossa equipe',
                            iconURL: ''
                        })
                    ], ephemeral: true
                })
            })
        })
    }
    }
}