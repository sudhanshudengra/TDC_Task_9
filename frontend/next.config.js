// next.config.js
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.prisma$/,
      use: 'raw-loader',
    });

    return config;
  },
};
