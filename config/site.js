module.exports = {
	pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

	siteTitle: 'UAlberta Minecraft', // Navigation and Site Title
	siteTitleAlt: 'UAlberta Minecraft Server', // Alternative Site title for SEO
	siteTitleShort: 'UAlberta MC', // short_name for manifest
	siteHeadline: 'ip: play.ualberta-mc.club', // Headline for schema.org JSONLD
	siteUrl: 'https://ualberta-mc.club', // Domain of your site. No trailing slash!
	siteLanguage: 'en', // Language Tag on <html> element
	siteLogo: '/logos/logo.png', // Used for SEO and manifest
	siteDescription: 'ip: play.ualberta-mc.club',
	author: 'Zhi', // Author for schema.org JSONLD

	// siteFBAppID: '123456789', // Facebook App ID - Optional
	userTwitter: '@emilia', // Twitter Username
	ogSiteName: 'emilia', // Facebook Site Name
	ogLanguage: 'en_US', // og:language
	googleAnalyticsID: 'UA-47519312-4',

	// Manifest and Progress color
	themeColor: '#3498DB',
	backgroundColor: '#2b2e3c',

	// Your information
	avatar: '/logos/logo.png',
	name: 'University of Alberta Minecraft',
	location: 'ip: play.ualberta-mc.club',
	socialMedia: [
		{
			url: 'https://discord.gg/A7KFqaM',
			name: 'Discord'
		},
		{
			url: 'https://www.reddit.com/r/uAlberta/',
			name: 'Reddit'
		}
	]
};
