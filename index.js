const cron=require('node-cron')
const {Client}=require('discord.js')
client=new Client()
config=require('./config.json')

cron.schedule(config.cron,()=>{
	client
		.guilds.find(g=>g.id==config.workServerID)
		.channels.find(c=>c.id==config.workChannelID)
		.send(config.workCommand)
})

client.login(config.clientToken)
