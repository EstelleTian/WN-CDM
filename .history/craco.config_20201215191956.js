/*
 * @Author: your name
 * @Date: 2020-12-09 21:18:59
 * @LastEditTime: 2020-12-15 19:10:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \WN-CDM\craco.config.js
 */

const path = require('path');
const CracoLessPlugin = require('craco-less');
const { getThemeVariables } = require('antd/dist/theme');
const sassResourcesLoader = require('craco-sass-resources-loader');

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
                }
            },
        },{
            plugin: sassResourcesLoader,
            options: {
              resources: ['./src/common.scss'],
            },
          },
    ]
};
