module.exports = {
    'help': {
      aliases: ['cmds'],
      description: 'Shows the list of commands or help on a specified command.',
      format: 'help [command-name]'
    },
    'ping': {
      aliases: ['pong'],
      description: 'Checks connectivity with discord\'s servers.',
      format: 'ping'
    },
    'say': {
      aliases: ['repeat'],
      description: 'Repeats whatever is said.',
      format: 'say [message]'
    },
    'kick': {
      aliases: ['N/A'],
      description: 'Kick a user from the guild.',
      format: 'kick [mention]'
    },
    'ban': {
        aliases: ['N/A'],
        description: 'Ban a user from the guild.',
        format: 'ban [mention]'
    },
    'poll': {
      aliases: ['vote'],
      description: 'Creates a simple yes or no embed.',
      format: 'poll [question]'
    },
    'version': {
     aliases: ['N/A'],
     description: 'Checks the bots version.',
     format: 'version'
   },
  'invite': {
   aliases: ['support'],
   description: 'Sends the bots invite link and support server.',
   format: 'invite'
 },
'userinfo': {
 aliases: ['whois', 'ui'],
 description: 'Sends information on a user.',
 format: 'userinfo [mention]'
  }
}