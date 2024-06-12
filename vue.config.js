module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/BurgerCreatorPublish/' // Zmień na nazwę Twojego repozytorium na GitHub
      : '/',
  outputDir: 'dist/spa', // Katalog, do którego buduje się aplikacja
  assetsDir: 'static',
};
