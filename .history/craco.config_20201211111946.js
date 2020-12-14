
const path = require('path');
const StyleResourcesLoader = require('style-resources-loader');
const CracoLessPlugin = require('craco-less');
const { getThemeVariables } = require('antd/dist/theme');

module.exports = {
    babel: {
        plugins: [
            [
                "@babel/plugin-proposal-decorators",
                {
                    legacy: true
                }
            ],
            [
                "@babel/plugin-proposal-class-properties",
                {
                    loose: true
                }
            ]
        ]
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: getThemeVariables({
                            dark: true, // 开启暗黑模式
                            compact: true, // 开启紧凑模式
                         }),
                        javascriptEnabled: true,

                    },
                },
                modifyLessRule: function(lessRule, context){
                    lessRule.use = ["style-loader", "css-loader", "less-loader", {
                        loader: "style-resources-loader",
                        options: {
                            patterns: path.resolve( __dirname, "src/commmon.less"),
                            injector: 'append'
                        }
                    }]
                    return {
                        lessRule,
                        context
                    }

                }
            },
        },
        {
            plugin: StyleResourcesLoader,
            options: {
                patterns: path.resolve( __dirname, "src/commmon.less"),
                injector: 'append'
            },
        }
    ],
};
