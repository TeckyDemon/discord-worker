const {basename}=require('path')
const {Client}=require('discord.js')

process.title=`dcworker ${process.argv.slice(2).map(a=>basename(a,'.json')).join(' ')}`

for(let config of process.argv.slice(2)){
	config=require(`./${config}`)
	client=new Client()
	setTimeout(async function(client){
		await client.login(config.clientToken)
		await client
			.guilds.find(g=>g.id==config.workServerID)
			.channels.find(c=>c.id==config.workChannelID)
			.send(config.workCommand)
		await client.destroy()
		setTimeout(arguments.callee,config.workWaitTime*1000,...arguments)
	},config.workWaitTime*1000,client)
}
