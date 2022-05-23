const Discord = require('discord.js')

module.exports={
    name: 'unlock',
    description: 'Destrancar os canais',
    type: 'CHAT_INPUT',
    run: async(client, interaction, args)=>{
        if (!interaction.member.permissions.has("MANAGE_CHANNELS")) {
            message.reply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setColor('RED')
                    .setDescription('❌ ERRO! Você não tem permissão pra esse comando.')
                ], ephemeral: true
            })
        } else {
            
            interaction.reply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setDescription('✅ Canal destracado com sucesso.')
                ], ephemeral: true
            }).then(msg => { 
                interaction.channel.permissionOverwrites.edit(interaction.guild.id, { SEND_MESSAGES: true }).catch(e => {
                console.log(e)
                interaction.edit({
                    embeds: [
                        new Discord.MessageEmbed()
                        .setColor('RED')
                        .setDescription('❌ ERRO! Algo deu errado ao trancar esse chat')
                        .setFooter({
                            text: 'Reporte esse bug a nossa equipe',
                            iconURL: ''
                        })
                    ], ephemeral: true
                })
            })
        })

            }
    }
}