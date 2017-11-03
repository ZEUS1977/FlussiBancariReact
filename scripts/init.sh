#!/bin/bash

cd ..;

sudo npm init -y;

sudo npm install webpack -g;

sudo npm install --save babel-core babel-loader@6.2.10 babel-preset-react@6.23.0 babel-preset-es2015@6.18.0 babel-preset-stage-1@6.16.0 redux express;

sudo npm install --save-dev webpack;
sudo npm install react --save;
sudo npm install react-dom --save;
sudo npm install react-router@3.0.5 --save;
sudo npm install axios --save;
sudo npm install es6-promise --save;

cp ./scripts/webpack.config.js ./;

mkdir ./public;

cp ./scripts/index.html ./public;

cp ./scripts/server.js ./;

cp ./scripts/.gitignore ./;

cp -f ./scripts/webpack.config.js ./

mkdir src;

cp ./scripts/app.js ./src;

node server.js&;

webpack;
