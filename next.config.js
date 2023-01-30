// noinspection JSUnusedGlobalSymbols
const withCSS = require('@zeit/next-css');
const compose = require('next-compose');
const path = require('path');
cssConfig = {};
module.exports = compose([
    [withCSS, cssConfig],
    {
      webpack(config, options) {
        config.module.rules.push({
          test: /\.mp3$/,
          use: {
            loader: 'raw-loader',
          },
          // {
          //   test: /\.txt$/, use: 'raw-loader' }  
        
        });
        return config;
      },
    },
  ]);
  
module.exports = {
    
    env: {
        basePath: process.env.BASE_PATH || '',
    },
    basePath: process.env.BASE_PATH || '',
    i18n: {
        locales: ['en', 'ru', 'ar'],
        defaultLocale: 'en',
    },
};
