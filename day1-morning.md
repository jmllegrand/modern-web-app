
web vs native app 

browser is runtime => native web app

the app building see http://hubtags.com/
- oauth flow 
- add /remove tags
- github api from the browser


- dev mode : local server with live reload 
- prod mode : build script 
larde application can be build around statis sites


flipcart : static asset - everyhting run on client side on browser

shuterflies: deployment tool : rsync !!


tools used 
- es6
- babeljs
- ampersand
- webpack
- oauth
- yeticss, lightweight bootstrap
- ampersand: a backbone fork using the Router, Model & Collections
- react as the view 
- isomorphic js: js runs everywhere like meteorjs
having empty html doc with a script tag can be problematic: the browser has to download and tparse the entire js 
before rendering sth to the user
in a static site, generate several static html files with prepopulate content and let react take over later


To create a brand new project

'''
npm init 
'''

This will create a package.json. The file contains metadata for the application

2 scripts
- "build" to run webpack
- "start" to run the application

To execute the script 
npm run name_of_the_script_step
npm run start

webpack the build tools used by facebook

http://webpack.github.io/docs/tutorials/getting-started/

http://survivejs.com/webpack_react/developing_with_webpack/

https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement

npm install --save : install and write to package.json dependencies field
npm install --save-dev: install and write to package.json devDependencies field




