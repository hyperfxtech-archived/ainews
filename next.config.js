const withCss = require("@zeit/next-css")

module.exports = withCss({
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                use: 'frontmatter-markdown-loader'
            }
        )
        return cfg;
    }
})

