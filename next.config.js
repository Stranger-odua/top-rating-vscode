module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, //если мы видим файл свг
      issuer: {
        //в файлах дж, тс, тсх
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"], // то мы используем специальный загрузчик
    });
    return config;
  },
};
