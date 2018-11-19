# Instructions for running CHT2531 JavaScript Exercises

1. Download or clone the repository.
2. Unzip this.
3. Inside this folder there are a number of files. Here are the ones we are interested in:

* *index.html*. This is the HTML file that is used in practical exercises. This HTML file uses a JavaScript file, exercises.js
* *exercises.js*. Open this in a text editor of your choice. This is where you will write your JavaScript. It already contains some code to get you started. It also contains the exercise questions (in comments, leave these questions commented out).

## To use the history API you must use a web server
To complete the exercises this week you will need to run *index.html* from a web server. 

There are a number of ways to do this.
### Using Web Server for Chrome (easy to do but blocked at the uni)
You can add extension to the chrome browser that will run a web server for you - https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb 

### Using HTTP-SERVER
There is a node.js package *http-server*. To use it, do the following:
* Open a node.js command prompt
* Enter
```
npm install http-server -g
```
* Navigate to the folder where you want to serve web pages from and enter
```
http-server
```
* Open a web browser and enter http://localhost:8080. 
