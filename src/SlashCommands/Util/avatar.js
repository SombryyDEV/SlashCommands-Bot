const {
    MessageEmbed
} = require('discord.js')

module.exports = {
    name: 'avatar',
    description: 'Veja o avatar dos usuarios',
    options: [{
        name: 'user',
        type: 'USER',
        description: 'Selecione o usuario/id',
        required: false,
    }],
    run: async (client, interaction, options) => {
        const usuario = interaction.options.getUser('user')
        const userId = interaction.member.user.id;
      
        const user = client.users.cache.find(user => user.id === userId)
        function getUserFromMention(usuario) {
            if (!usuario){
              return user
            }
    
            if (usuario.toString().startsWith('<@') && usuario.toString().endsWith('>')) {
              usuario = usuario.toString().slice(2, -1);
    
              if (usuario.toString().startsWith('!')) {
                usuario = usuario.toString().slice(1);
              }
    
              return client.users.cache.get(usuario);
            }
          }
    
    
          const p = getUserFromMention(usuario)
        const embed = new MessageEmbed()
            .setTitle(`${p.username}'s Avatar`)
            .setColor('BLUE')
            .setImage(p.displayAvatarURL({
                dynamic: true,
                size: 1024
            }))
            .setFooter(`Requesitado por: ${interaction.user.username}`, interaction.user.displayAvatarURL({ dynamic: true }));
        
        await interaction.reply({
            embeds: [embed]
        });
        
        
        
         //by Allyson#5586
    }
}