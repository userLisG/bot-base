const config_token = require('./modules/configs')
// Livrarias
const Discord = require("discord.js");
const { CommandHandler } = require('djs-commander');

// DJS 
const client = new Discord.Client({
    intents: [ 
      Discord.GatewayIntentBits.Guilds,
      Discord.GatewayIntentBits.GuildMessages,
      Discord.GatewayIntentBits.MessageContent,
      Discord.GatewayIntentBits.GuildVoiceStates,
      Discord.GatewayIntentBits.GuildPresences,
      Discord.GatewayIntentBits.GuildMembers
    ]
});
module.exports = client

new CommandHandler({
    client,
    eventsPath: path.join(__dirname, './modules/events'),
    commandsPath: path.join(__dirname, './modules/commands')
});

client.login(config_token.disc_bot_token).then(() => {
    return;
}).catch((err) => {
    console.log('[ERRO]: O TOKEN está inválido! Vá nas configurações e mude o token no disc_configurations!');
})