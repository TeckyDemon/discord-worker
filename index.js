const cron=require('node-cron')
const {Client}=require('discord.js')

for(let config of process.argv.slice(2)){
	config=require(`./${config}`)
	client=new Client()
	cron.schedule(config.cron,async ()=>{
		await client.login(config.clientToken)
		await client
			.guilds.find(g=>g.id==config.workServerID)
			.channels.find(c=>c.id==config.workChannelID)
			.send(config.workCommand)
		await client.destroy()
	})
}
