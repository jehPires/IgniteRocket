const path = require('path') //boas práticas; para resolver as barras nos SO
const HtmlWebpackPlugin = require('html-webpack-plugin')
//const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production'; //variáveis ambiente

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map', //sourcemap- ver codigo original; para debugar
    entry: path.resolve(__dirname, 'src', 'index.tsx'),//arquivo principal da aplicação; 
    output:{ //arquivo que vou gerar com webpack
        path: path.resolve(__dirname, 'dist'),
        filename : 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'] //ambos formatos devem funcionar na app
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
//        hot: true,
      },
    plugins:[
  //      isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname, 'public', 'index.html') //qual arquivo usará para template
        })
    ],//.filter(Boolean), //para adicionar plugin de forma condicional

    module: { //onde ficam as config. de como nossa aplicação vai se comportar quando importar 
        //cada tipo de arquivo
        rules: [
            {
                test: /\.(j|t)sx$/, //para saber se é arquivo js ou nao; regex
                exclude: /node_modules/, //quando importar um arquivo dessa pasta não quero que faça a 
                //conversão para o browser, pois é responsabilidade de biblioteca que to usando
                use: [
                    {
                      loader:'babel-loader',
                     // options: {
                        //plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
                     // }
                    },
                  ],
            },
            {
                test: /\.scss$/, 
                exclude: /node_modules/,  
                use: ['style-loader', 'css-loader','sass-loader'], 
            },
        
        ],
    },    
};