const Discord = require('discord.js')
module.exports = {
    name: 'clear',
    description: 'Apagador de mensagens.',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'amount',
            description: 'Escolha número pra ser deletado.',
            type: 'NUMBER',
            required: true,
        }
    ],
    run: async (client, interaction, args) => {

        let numero = interaction.options.getNumber('amount')

        if (!interaction.member.permissions.has("MANAGE_MESSAGES")) {
            interaction.reply({ content: `ERRO! Você não tem permissão.`, ephemeral: true })
        } else

        if (parseInt(numero) > 99 || parseInt(numero) <= 0) {
            return interaction.reply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setDescription(`Escolha a quantia \`1 - 99\`**.**`)
                    .setColor('RANDOM')
                ], ephemeral: true
            })
        } else {

        interaction.channel.bulkDelete(parseInt(numero))

        let embed = new Discord.MessageEmbed()
            .setDescription(`♻️ Clear completado`)
            .setTimestamp()
            .setFooter({ text: `OK! Apagamos com sucesso: ${interaction.member.user.username}`, iconURL: interaction.member.displayAvatarURL({ dynamic: true }) }) //utilizar npm i discord.js@latest
            .setColor('RANDOM')

        interaction.reply({ embeds: [embed] }).then(() => {
            setTimeout(() => {
                interaction.deleteReply()
            }, 5000)
        })

    }

    }
}