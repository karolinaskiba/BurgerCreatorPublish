module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/BurgerCreatorPublish/' : '/',
  outputDir: 'dist/spa',
  assetsDir: 'static',
};
