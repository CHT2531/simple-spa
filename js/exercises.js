//creating an array of film objects, really these would come from Ajax
class Film
{
	constructor(id,title, year,duration){
		this.id = id;
		this.title = title;
		this.year = year;
		this.duration = duration;
	}
}
let films=[]
films.push(new Film(1,"Get Out","2017",117));
films.push(new Film(2,"Jaws","1975",124));
films.push(new Film(3,"Winter's Bone","2010",100));
films.push(new Film(4,"The Incredibles","2004",115));

//get hold of elements from the HTML document
const navList =document.querySelector("#nav");
const contentDiv = document.querySelector("#content");
const titleElem = document.querySelector("#title");
const yearElem = document.querySelector("#year");
const durationElem = document.querySelector("#duration");
const backBtn = document.querySelector("#backBtn");

function showFilm(evnt){
	let id = evnt.target.getAttribute("data-id")-1;
	console.log(films[id].year)
	titleElem.textContent=films[id].title;
	yearElem.textContent=films[id].year;
	durationElem.textContent=films[id].duration;
	contentDiv.classList.remove("hide");
	navList.classList.add("hide");
	history.pushState(film,null, film.id);
}
films.forEach(function(film){
	let liElem = document.createElement("li");
	let link = document.createElement("a");
	link.setAttribute("data-id",film.id);
	let txt = document.createTextNode(film.title);
	link.appendChild(txt);
	liElem.appendChild(link);
	navList.appendChild(liElem);
	link.addEventListener("click",showFilm,false);
})

function goBack(){
	navList.classList.remove("hide");
	contentDiv.classList.add("hide");
	history.pushState(null,null,"list");
}

function doHistory(evnt) {
	if(evnt.state){
		//show a film's details
		let film=evnt.state
		titleElem.textContent=film.title;
		yearElem.textContent=`Year of release:${film.year}`;
		durationElem.textContent=`Duration:${film.duration}mins`;
		navList.classList.add("hide");
		contentDiv.classList.remove("hide");
	}else{
		//show the list of all films 
		contentDiv.classList.add("hide");
		navList.classList.remove("hide");
	}
	
}

backBtn.addEventListener("click",goBack,false);

//this event is triggered when the back button is hit
window.addEventListener('popstate', doHistory,false);

//Q1. Using a forEach loop output a list of the films in the HTML page (use the <ul> with an id of 'nav')

//Q2. Make each film title into a hyperlink. When clicked, the title of the film should be displayed in the console.log

//Q3. Instead of displaying the title of the film in the console.log display the full film details inside the 'content' div. Have a look at the textContent property - https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent for advice on changing the text of elements.

/*
Q4. We can give the impression of moving to a different page by hiding and showing the 'nav' and 'content' elements.
The HTML page already features a '.hide' class.
When the user clicks on a film hide the list of films
When the user clicks the back button hide the film details
Have a look at the classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList for advice on adding/removing classes using JavaScript.
*/

//Q5. Finally have a think about using the history API so that the user can use the back button with the app.
