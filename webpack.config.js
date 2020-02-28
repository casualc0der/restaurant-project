const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = { 
  entry: './src/index.js',
  output: { 
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
   module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
             {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader',
         ],
       },
    ]
  },
   plugins: [
  new MiniCssExtractPlugin()

]
};
