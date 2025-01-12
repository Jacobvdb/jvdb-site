module.exports = function(eleventyConfig) {
    
    return {
        dir: {
            input: ".",
            output: "_site"
        },
        templateFormats: ["md", "njk", "html","liquid"],
       
    };
};