module.exports = {
  future: {
    webpack5: true,
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.worker\.js$/,
      use: [
        {
          loader: 'worker-loader',
          options: {
            filename: 'static/[contenthash].worker.js',
            publicPath: '/_next/',
            inline: 'no-fallback',
          },
        },
        options.defaultLoaders.babel,
      ],
    });

    if (!options.isServer) {
      config.output.globalObject = 'self';
    }

    return config;
  },
};
