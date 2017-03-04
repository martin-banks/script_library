# Use to create basic project structure and files

# create project directory
mkdir -p src/scripts/templates
mkdir -p src/styles/components
mkdir -p images
mkdir -p build 


# create core project files
# core html
touch src/preview.html

# core js
touch src/scripts app.js state.js
echo "module.exports = {\n\n}" > state.js
echo "(()=>{\n\t\"use strict\"\n\tconst state = require('./state')\n})()" > app.js 

# core styles
touch src/styles/app.sass _variables.sass




# create build files
touch webpack.config.js


touch .babel.rc
echo "{\n\tpresets: ['es2015']\n}" > .babel.rc




# create npm package.json
npm init -y

# instal npm modules
npm i -D babel-core babel-loader babel-preset-es2015 css-loader extract-text-webpack-plugin html-webpack-plugin  node-sass progress-bar-webpack-plugin sass-loader webpack webpack-dev-server 


# additional packages
# es6-promise imagemagick imagesloaded