//declare films globally
let films;

//declare variable for elements from the HTML document
let filmList;
let filmDetails;
let titleElem;
let yearElem;
let durationElem;
let backBtn;

function doAjax(url,callback)
{
	fetch(url).then(function(response) {
		return response.json();
	}).then(function(json) {
		callback(json)
	});
}

function showFilmList(data)
{
	films=data
	films.forEach(function(film){
	    console.log(film.title);
	});
}


function init(){
	filmList =document.querySelector("#film-list");
	filmDetails = document.querySelector("#film-details");
	titleElem = document.querySelector("#title");
	yearElem = document.querySelector("#year");
	durationElem = document.querySelector("#duration");
	backBtn = document.querySelector("#backBtn");
	doAjax("./data/films.json",showFilmList);
}

init()

/*
1. Modify the code so that the list of films is displayed in the HTML page instead of the console. The init() function has already assigned the <ul id="film-list"> to the variable filmList. You just need to populate this with a list of film titles See: https://github.com/CHT2531/js-dom-recap/blob/master/notes.md#inserting-multiple-elements for a similar example.

2. Make each film title clickable i.e. add a click event listener to each of the list elements. When clicked, a simple console message should be displayed. See https://github.com/CHT2531/js-dom-recap/blob/master/notes.md#events for an example of event handling.

3. Now use a closure so that when a film is clicked, the specific details of the film are shown in the console e.g. if the user clicks on Get Out, the console shows 'Get Out was made in 2017'. See https://github.com/CHT2531/functional-programming/blob/master/notes.md#closures---associating-data-with-dynamically-generated-elements for a similar example.

4. Instead of displaying the film details in the console, show the details in the HTML page. Again the init() function has set up variables that you can use.

5. To give the impression of moving between different pages, we want to hide the film details div when the page loads. When the user clicks on a film, we want to show this div and hide the list of films. Have a look at using the hide method of the classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList.

6. See if you can get the back button to do the opposite i.e. hide the film details and show the list of films again.

7.  Finally have a think about using the history API so that the user can use the back button with the app.
*/
