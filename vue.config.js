// const CKEditorWebpackPlugin = require('@ckeditor/ckeditor5-dev-webpack-plugin');

module.exports = {
    publicPath: "/",
    lintOnSave: false,
    // 배포 파일의 위치를 지정
    outputDir: "../HappyHouseAPI/src/main/resources/static",
    // configureWebpack: {
    //     plugins: [
    //         // CKEditor needs its own plugin to be built using webpack.
    //         new CKEditorWebpackPlugin({
    //             // The UI language. Language codes follow the https://en.wikipedia.org/wiki/ISO_639-1 format.
    //             language: 'ko'
    //         })
    //     ]
    // },
};