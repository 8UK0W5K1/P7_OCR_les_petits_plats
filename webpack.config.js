const path = require('path');

module.exports = {
  entry: './src/index.js', // fichier à compiler

  //	entry: {
  //		foo: 'foo.js',
  //		bar: 'bar.js'
  //	},   fichiers à compiler   | CODE SPLITTING |

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
