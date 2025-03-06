module.exports = function (eleventyConfig) {
  const htmlmin = require("html-minifier");
  const sass = require("sass");
  const path = require("path");

  eleventyConfig.addPassthroughCopy("favicon.png");
  eleventyConfig.addPassthroughCopy("_config.yml");
  eleventyConfig.addPassthroughCopy(".well-known/*");

  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",
    compile: async function (inputContent, inputPath) {
      let result = sass.compileString(inputContent, {
        loadPaths: [path.dirname(inputPath)],
        style: "compressed",
      });
      return async () => {
        return result.css;
      };
    },
  });

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: false,
      });
    }
    return content;
  });
};
