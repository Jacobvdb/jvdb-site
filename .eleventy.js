module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: ".",
            includes: "_layouts",
            output: "_site"
        },
        templateFormats: ["md", "njk"],
    };
};