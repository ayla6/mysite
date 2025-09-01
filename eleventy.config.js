import htmlmin from "html-minifier";
import * as sass from "sass";
import path from "path";
import markdownit from "markdown-it";
const md = markdownit();

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("favicon.png");
  eleventyConfig.addPassthroughCopy(".well-known/*");
  eleventyConfig.addPassthroughCopy("aataylactop.asc");

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

  eleventyConfig.addNunjucksFilter("markdown", function (value) {
    return md.render(value);
  });

  eleventyConfig.addNunjucksFilter("format_date", function (value) {
    return new Date(value).toISOString().slice(0, 16).replace("T", " ");
  });

  eleventyConfig.addNunjucksFilter("truncate", function (value, length = 300) {
    return value.slice(0, length);
  });

  eleventyConfig.addNunjucksFilter("getrkey", function (value) {
    return value.slice(value.lastIndexOf("/") + 1);
  });
}
