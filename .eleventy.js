const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("favicon.svg");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");

    eleventyConfig.addFilter("formatUTCDate", function(dateObj) {
        return DateTime.fromJSDate(new Date(dateObj), { zone: "utc" }).toFormat("MM-dd-yyyy");
      });
    
    return {
        dir: {
            input: ".",
            output: "_site",
            layouts: "_layouts"
        },
        templateFormats: ["md", "njk", "html","liquid"],
       
    };

    
     
}