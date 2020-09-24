module.exports = {
	name: 'args-info',
	description: 'Information about the arguments provided.',
	execute(msg, args) {
		if (args[0] === 'foo') {

		msg.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};