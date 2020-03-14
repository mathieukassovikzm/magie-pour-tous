module.exports = {
  resolve: {
    extensions: ['.scss','.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
      '@images': resolve('src/assets/img'),
    }
  }
};
