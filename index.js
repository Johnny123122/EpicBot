const { Client, MessageEmbed} = require('discord.js');
const config = require('./config');
const commands = require('./help');
const { error } = require('console');

let bot = new Client({
  fetchAllMembers: true, 
  presence: {
    status: 'dnd',
    activity: {
      name: `${config.prefix}help for commands! (Coming soon to the public)`,
      type: 'LISTENING'
    }
  }
});

bot.on('ready', () => console.log(`Logged in as ${bot.user.tag}.`));

bot.on('message', async message => {
  if (message.content.startsWith(config.prefix)) {
    let args = message.content.slice(config.prefix.length).split(' ');
    let command = args.shift().toLowerCase();

    switch (command) {

      case 'ping':
      case 'pong':
        let msg = await message.reply('Pinging...');
        await msg.edit(`🏓PONG ${Date.now() - msg.createdTimestamp}ms.`)
        break;
      case 'userinfo':
      case 'whois':
      case 'ui':
const moment = require('moment');

let user1;
if (message.mentions.users.first()) {
    user1 = message.mentions.users.first();
} else {
    user1 = message.author;
}

const member = message.guild.member(user1);

const embed5 = new MessageEmbed()
    .setColor('RANDOM')
    .addField(`${user1.tag}`, `${user1}`, true)
    .addField("ID:", `${user1.id}`, true)
    .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
    .addField("Status:", `${user1.presence.status}`, true)
    .addField("In Server", message.guild.name, true)
    .addField("Game:", `${user1.presence.game ? user1.presence.game.name : 'None'}`, true)
    .addField("Bot:", `${user1.bot}`, true)
    .addField("Joined The Server On:", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
    .addField("Account Created On:", `${moment.utc(user1.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
    .addField("Roles:", member.roles.cache.map(roles => `${roles}`).join(', '), true)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
message.channel.send(embed5);
break;
      case 'say':
      case 'repeat':
        if (args.length > 0)
          message.channel.send(args.join(' '));
          else
          message.reply('You did not send a message to repeat, cancelling command.')
        break;
   case 'kick':
    user = message.mentions.users.first();
    member = message.guild.member(user);
    if (args.length < 0)
        member.kick(`Kicked by: ${message.author.tag}!`)
        .catch(console.error);
        message.channel.send(`${message.author.tag} Successfully kicked: ${member}!`)
         break;
     case 'poll':
     case 'vote':
      embed2 = new MessageEmbed() 
      .setTitle('New poll!')
      .setDescription(args.join(' '))
      .setFooter(`Poll by: ${message.author.tag}`, message.author.displayAvatarURL())
      .setColor('RANDOM')
      .setTimestamp();
      message.channel.send(embed2).then(sentEmbed => {
        sentEmbed.react('742510050286764053')
        sentEmbed.react('742755896894947410')
      });
     break;

     case 'ban':
      user1 = message.mentions.users.first();
      member1 = message.guild.member(user1);
       member1.ban(`Banned by: ${message.author.tag}!`)
        message.channel.send(`${message.author.tag} Successfully banned: ${member1}`)
         break;
      case 'version':
      message.channel.send('The bots version is 0.1 (BETA)')
      break
      case 'help':
      case 'cmds':
        let embed = new MessageEmbed()
          .setTitle('HERE\'S A LIST OF MY COMMANDS')
          .setColor('RANDOM')
          .setFooter(`Requested by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL())
          .setTimestamp()
        if (!args[0])
          embed
            .setDescription(Object.keys(commands).map(command => `\`${command.padEnd(Object.keys(commands).reduce((a, b) => b.length > a.length ? b : a, '').length)}\` :: ${commands[command].description}`).join('\n'));
        else {
          if (Object.keys(commands).includes(args[0].toLowerCase()) || Object.keys(commands).map(c => commands[c].aliases || []).flat().includes(args[0].toLowerCase())) {
            let command = Object.keys(commands).includes(args[0].toLowerCase())? args[0].toLowerCase() : Object.keys(commands).find(c => commands[c].aliases && commands[c].aliases.includes(args[0].toLowerCase()));
            embed
              .setTitle(`COMMAND ${config.prefix}${command}`)

            if (commands[command].aliases)
              embed.addField('COMMAND ALIASES', `\`${commands[command].aliases.join('`, `')}\``);
            embed
              .addField('DESCRIPTION', commands[command].description)
              .addField('USAGE', `\`\`\`${config.prefix}${commands[command].format}\`\`\``);
          } else {
            embed
              .setTitle('COMMAND FAILED')
              .setColor('RED')
              .setDescription('This command does not exist. Please use the help command without specifying any commands to list them all.');
          }
        }
        message.channel.send(embed).then(sentEmbed => {
          sentEmbed.react('742510050286764053')
        });
       break;
    }
  }
});

require('./server')();
bot.login(config.token);