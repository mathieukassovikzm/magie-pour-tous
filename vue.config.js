module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/scss/_functions.scss";
        @import "@/scss/_variables.scss";
        @import "@/scss/_mixins.scss";
        `
      }
    }
  }
};
