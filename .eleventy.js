module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("favicon.svg");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    
    return {
        dir: {
            input: ".",
            output: "_site"
        },
        templateFormats: ["md", "njk", "html","liquid"],
       
    };
};