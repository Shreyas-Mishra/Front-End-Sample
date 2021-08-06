# Bootstrap-Sample-Project
<h2>Steps to Start</h2>
1.	Install NPM & Node.js
```https://nodejs.org```
Verify Syntax: 
```npm -v```
<br>
2.	Initialize package.json
	Syntax: ```npm init```
	NOTE : Enter default values for most except entry point set it to index.html 
<br>
3.	Install Lite Server
	Syntax: ```npm install lite-server --save-dev```
<br>
4.	Modify package.json file 
Syntax:
```
"scripts": {
    "start": "npm run lite",
    "test": "echo \"Error: no test specified\" && exit 1",
    "lite": "lite-server"
  },
 ```
<br>
5.	Put node_modules in a folder named .gitignore
<br>
6.	Download Bootstrap to Your Project
Syntax: ```npm install bootstrap@4.0.0 --save```
```npm install jquery@3.3.1 popper.js@1.12.9 --save```
<br>
7.	Put the following meta tags on every page 
	```
    	<meta charset="utf-8">
  	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    	<meta http-equiv="x-ua-compatible" content="ie=edge">
    	<!-- Bootstrap CSS -->
    	<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
	```
Place these tags  just before the body end tag
```
    <!-- jQuery first, then Popper.js, then Bootstrap JS. -->
    <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
   ```
<br>
8.	Install the following to implement Font-awesome & bootstrap-social
	``` npm install font-awesome@4.7.0 --save```
	```npm install bootstrap-social@5.1.1 --save```


	```<link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css">```
	```<link rel="stylesheet" href="node_modules/bootstrap-social/bootstrap-social.css">```
<br>
9.	Using SCSS(SASS) 
npm install --save-dev node-sass@4.7.2
Add the following in scripts into package.json file
	 "scss": "node-sass -o css/ css/"
Command to run scss
   	npm run scss
<br>
10.	Now install two more NPM Packages to  execute more than one command at once
npm install --save-dev onchange@3.3.0 parallelshell@3.0.1
Add the following in scripts into package.json file
	 "watch:scss": "onchange \"css/*.scss\" -- npm run scss",
    	"watch:all": "parallelshell \"npm run watch:scss\" \"npm run lite\""
Update start script as well
	"start": "npm run watch:all",
<br>
11.	Install rimraf module (Used to clean a folder)
		npm install --save-dev rimraf@2.6.2
	Add the following in scripts into package.json file
"clean": "rimraf dist",
<br>
12.	Install copyfiles ( as the name suggests)
npm -g install copyfiles@2.0.0
Add the following in scripts into package.json file
"copyfonts": "copyfiles -f node_modules/font-awesome/fonts/* dist/fonts",
<br>
13.	Compressing CSS HTML and Minifying Images
npm -g install imagemin-cli@3.0.0
Add the following in scripts into package.json file
"imagemin": "imagemin img/* --out-dir='dist/img'",
Note  : Open .gitignore and update it as follows. 
	node_modules
dist
		npm install --save-dev usemin-cli@0.5.1 cssmin@0.4.3 
uglifyjs@2.4.11 htmlmin@0.0.7
Add the following in scripts into package.json file
		    "usemin": "usemin contactus.html -d dist --htmlmin -o dist/contactus.html && usemin aboutus.html -d dist --htmlmin -o dist/aboutus.html && usemin index.html -d dist --htmlmin -o dist/index.html",
    "build": "npm run clean && npm run imagemin && npm run copyfonts && npm run usemin"
<br>

14.	Open index.html and surround the css links inclusion code as follows:
	    <!-- build:css css/main.css -->
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="node_modules/bootstrap-social/bootstrap-social.css">
    <link href="css/styles.css" rel="stylesheet">
    <!-- endbuild -->  
<br>
15.	Similarly, open index.html and surround the js script inclusion code as follows:
    <!-- build:js js/main.js -->
    <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="js/scripts.js"></script>
    <!-- endbuild -->
<br>
16.	To build the distribution folder, you can type the following at the prompt:
	npm run build
