
const path = require('path');
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
            options: {
                modifyLessRule: {
                    test: /\.less$/,
                    use: ["style-loader", "css-loader",{
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                plugin: CracoLessPlugin,
                                modifyVars: getThemeVariables({
                                    dark: true, // 开启暗黑模式
                                    compact: true, // 开启紧凑模式
                                 }),
                                javascriptEnabled: true,
        
                            }
                        }
                    },{
                        loader: "style-resources-loader",
                        options: {
                            preProcessor: 'less',
                            patterns: path.resolve( __dirname, "./src/commmon.less"),
                            injector: 'append'
                        }
                    }],
                    
                    
                }
            },
        },
    ]
};
