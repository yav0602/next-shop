// eslint-disable-next-line no-undef
module.exports = {
	webpack(config) {
		config.module.rules.push({
			loader: "@svgr/webpack",
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					plugins: [{ removeViewBox: false }],
				},
				titleProp: true,
			},
			test: /\.svg$/,
		});
		return config;
	},
};
