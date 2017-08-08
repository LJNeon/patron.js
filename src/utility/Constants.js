const Result = require('../results/Result.js');
const PermissionUtil = require('../utility/PermissionUtil.js');
const CommandError = require('../enums/CommandError.js');

class Constants {
  constructor() {
    this.config = {
      maxMatches: 5
    };

    this.conversions = {
      secondInMs: 1000,
      minuteInMs: 60000,
      hourInMs: 3600000,
      dayInMs: 86400000,
      weekInMs: 604800000,
      monthInMs: 2592000000,
      yearInMs: 31536000000,
      decadeInMs: 315360000000,
      centuryInMs: 3153600000000
    };

    this.errors = {
      bannedUserNotFound: 'Banned user not found.',
      channelNotFound: 'Channel not found.',
      emojiNotFound: 'Emoji not found.',
      dmChannelNotFound: 'DM channel not found.',
      guildChannelNotFound: 'Guild channel not found.',
      guildEmojiNotFound: 'Guild emoji not found.',
      guildNotFound: 'Guild not found.',
      groupChannelNotFound: 'Group channel not found.',
      invalidArg: (argument) => 'You have provided an invalid ' + argument.name + '.',
      memberNotFound: 'Member not found.',
      messageNotFound: 'Message not found.',
      multipleMatches: (matches) => 'Multiple matches found: ' + matches + '.',
      roleNotFound: 'Role not found.',
      textChannelNotFound: 'Text channel not found.',
      tooManyMatches: 'Multiple matches found, please be more specific.',
      userNotFound: 'User not found.',
      voiceChannelNotFound: 'Voice channel not found.'
    };

    this.regexes = {
      argument: /"[\S\s]+?"|[\S\n]+/g,
      billion: /^\d+(\.\d+)?\s*b/i,
      centuries: /^\d+(\.\d+)?\s*(cen(tur(y|ies))?)$/i,
      days: /^\d+(\.\d+)?\s*(days?|d)$/i,
      decades: /^\d+(\.\d+)?\s*(dec(ade)?s?)$/i,
      emoji: /^<:.+:\d+>/,
      hours: /^\d+(\.\d+)?\s*(hours?|h)$/i,
      id: /^\d{17,19}/,
      million: /^\d+(\.\d+)?\s*m/i,
      milliseconds: /^\d+(\.\d+)?\s*(milliseconds?|ms)$/i,
      minutes: /^\d+(\.\d+)?\s*(min(ute)?s?|m)$/i,
      months: /^\d+(\.\d+)?\s*months?$/i,
      parseId: /\D+/g,
      permission: /[A-Z]+/g,
      quotes: /^"|"$/g,
      quotesMatch: /^"[\S\s]+"$/,
      roleMention: /^<@&\d+>/,
      seconds: /^\d+(\.\d+)?\s*(sec(onds)?s?|s)$/i,
      textChannelMention: /^<#\d+>/,
      thousand: /^\d+(\.\d+)?\s*k/i,
      usernameAndDiscrim: /.+#\d{4}/,
      userMention: /^<@!?\d+>/,
      weeks: /^\d+(\.\d+)?\s*(weeks?|w)$/i,
      whiteSpace: /\s/,
      years: /^\d+(\.\d+)?\s*(years?|y)$/i
    };

    this.results = {
      botPermissions: (client, command, permissions) => new Result({ success: false, command: command, commandError: CommandError.botPermission, errorReason: client.user.username + ' cannot execute this command without the ' + PermissionUtil.format(permissions) + ' permission' + (permissions.length > 1 ? 's' : '') + '.' }),
      commandNotFound: new Result({ success: false, commandError: CommandError.CommandNotFound, errorReason: 'This command does not exist.' }),
      guildOnly: (command) => new Result({ success: false, command: command, commandError: CommandError.GuildOnly, errorReason: 'This command may only be used inside a server.' }),
      invalidArgCount: (command) => new Result({ success: false, command: command, commandError: CommandError.InvalidArgCount, errorReason: 'You have provided an invalid number of arguments.' }),
      memberPermissions: (command, permissions) => new Result({ success: false, command: command, commandError: CommandError.memberPermission, errorReason: 'This command may only be used by members with the ' + permissions + ' permission' + (permissions.length > 1 ? 's' : '') + '.' }),
      success: (command) => new Result({ success: true, command: command })
    };
  }
}

module.exports = new Constants();