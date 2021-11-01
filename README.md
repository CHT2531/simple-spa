# A Simple Single Page App (SPA)
This repository contains a simple SPA. There is a single HTML page, but by some clever use of CSS and JavaScript the app feels a like it features two separate pages. The reason for doing this is simple - the user moves between 'pages' faster which improve the user experience. JavaScript frameworks e.g. React, Angular, Vue.js are often based around the SPA model.

## Running the example
* Download the example
* Run the example in a browser (it uses the fetch() API so it will need to be on a web server or it won't work)
* Have a look at the code. Like previous examples we have looked at the DOM is used to dynamically inject content into the HTML page and change the content of existing elements. For example:

  ```javascript
  populationEl.textContent = country.population;
  ```

  To give the impression that the user has moved to a different page, CSS is used to hide or show different ```<div>``` elements. There is just a single CSS class ```hide``` which is added or removed from elements to hide or show them. For example:

  ```javascript
  listDiv.classList.add("hide");
  detailsDiv.classList.remove("hide");
  ```

Now try the following:
* Comment out the CSS in index.html. Re-run the example, see how the app really is just a single page.
* Like with the previous example, can you make some changes to the JSON file.

## The History API
One problem with SPAs is that they 'break' the web. The user thinks they have moved to a different page when they haven't, as a result, the back/forward buttons in the browser no longer work like the user expects them to. One way around this problem is to use the History API. using JavaScript we can artificially create browser history entries e.g.
```
history.pushState({"colour":"red"}, "Red page", "red.html");
```
The call to ```pushState()``` passes three parameters
* Data (an object) to store as part of the history entry. In this example ```{"colour":"red"}```.
* A title for the page. In this example ```"Red page"```.
* A URL to display in the browser. in this example ```red.html```.

We also need to know when the user has clicked the back button. We can listen for this *popstate* event, and update the page accordingly. For example:

```
window.addEventListener('popstate', function(evnt) {
	//changes page to red
	document.body.style.backgroundColor=(evnt.state.colour);
});

```

If you change the branch to *solutions*, you can see a version of this simple SPA that makes use of the History API to provide a better user experience. The following links provide some additional information on the History API:-
* https://css-tricks.com/using-the-html5-history-api/
* https://developer.mozilla.org/en-US/docs/Web/API/History_API 
