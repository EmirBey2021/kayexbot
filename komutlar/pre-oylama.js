const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
 if (!message.guild) {
  return }  
let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.channel.send("Bu Komutu Kullanabilmek İçin **Premium Üye** Olmalısın")}else{
      if( kullanıcı == 'gold'){
message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.sendEmbed(

     new Discord.MessageEmbed()

     .addField(`:x: Yazı Yazman Gerek :x:`)).then(m => m.delete(5000));

     console.log("oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
     message.channel.send(

       new Discord.MessageEmbed()

          .setColor('PINK')
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()

       .addField(`**Oylama**`, `**${question}**`)).then(function(message) {

         message.react('👍');

         message.react('👎');

          })
    
  
  
};

}

    }
    

  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'oylama',
  category: `Gold`,
  description: 'Oylama yapmanızı sağlar.',
  usage: 'oylama <oylamaismi>'
};
