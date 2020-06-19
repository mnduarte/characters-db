const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const outputDirectory = 'dist';

module.exports = {
  entry: ['babel-polyfill', './src/client/index.js'],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,//Buscar cualquier archivo que termine en .js (El somolo $ indica que termina ahi  el string)
        exclude: /node_modules/,//Que excluya la transformacion, porque tarda y no es necesario
        use: { //cuando se cumpla lo de arriba, sobre todo el test, ocurre lo de abajo
            loader: 'babel-loader',//Utiliza
            options: {
              presets: [//Setea config
                '@babel/preset-react',
                '@babel/preset-env'//transforma todo a javascript para que lo entienda los navegadores
              ],                      
            plugins: ['@babel/plugin-proposal-optional-chaining']//Plugins extra
            }
          }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {    
    historyApiFallback: true,
    port: 9000,
    open: true,  
    proxy: [{
      //context: ['/auth', '/api/user', '/api/auth/login'],
      context: function(pathname, req) {
        if (/^\/api/.test(pathname)) {
            return true;
        }
        return false;
      },
      target: 'http://localhost:3000',
    }]
  },
  plugins: [
    //new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
};