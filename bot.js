const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === '!shop') {

       message.reply('https://docs.google.com/document/d/15rNTPaZJzMOcBkEqXXS6ltZmi9XQyC6xrdj3LBbUz0o');

       }

});


client.on('guildMemberAdd', member => {
  member.send(
    `Willkommen in der Welt von Euphoria! Die Leute von Euphoria sind sich bewusst das sie von einer höheren Macht gesteuert werden, außer eine bestimmte Gruppe von Menschen erschaffen von den Göttern um sie zu amüsieren. Du bist Teil dieser Gruppe von Leuten, den sogennanten Abenteurern. Also stürze dich in die von den Göttern moderierte Welt Abenteurer auf das deine Reise eine lange sei. `
  )
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
