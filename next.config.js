// next.config.js
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");




let withCss = withSass({
    webpack: (config, {config: {target}}) => {
        const env = {

        };

       // config.optimization.minimize = true;
       // config.optimization.minimizer = [];
       // config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

        //console.log("condif", config);

        return {
            ...config,
            node: {
                fs: "empty"
            },
            plugins: [
                ...config.plugins,
                new webpack.DefinePlugin(env),
            ]
        };

    }
});

withCss.cssModules = true;

module.exports = withCSS(withCss);
