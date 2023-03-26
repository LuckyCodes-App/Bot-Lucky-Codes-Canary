require('dotenv').config();
const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const Discord = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
    ], 
    partials: [
        Partials.Message, 
        Partials.GuildMember, 
        Partials.Reaction, 
        Partials.User, 
        Partials.Channel, 
        Partials.GuildScheduledEvent,
    ],
});

//**      HANDLERS      *//
['commands'].forEach(f => client[f] = new Collection());
['commands', 'events'].forEach(f => require(`./src/handlers/${f}`)(client));
//**      HANDLERS      *//

//**      TOKEN      *//
client.login(process.env.TOKEN);
//**      TOKEN      *//