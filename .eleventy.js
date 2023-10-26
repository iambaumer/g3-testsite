const pluginRSS = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginRSS);
    // Copy 'assets/' to '_site/assets/
    eleventyConfig.addPassthroughCopy("assets");
    // Input Directory : src | Output directory: _site
    return {
        dir: {input: 'src', output: '_site', includes: '_templates'}
    };
};