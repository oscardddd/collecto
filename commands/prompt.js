const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('prompt')
		.setDescription('Get a relevant story topic!')
		.addStringOption(option =>
			option.setName('type')
			.setDescription('The type of prompt')
			.setRequired(true)),

	async execute(interaction) {
		await interaction.reply(`This command is run by ${interaction.user.username}`);
	},
};