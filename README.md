# MaxCX-landing_page
Implementation of a clean, responsive Landing Page using HTML, CSS, SASS, JavaScript and jQuery.

## Use Live Server while evaluating this project

I have used a popular VSCode extension called **Live Server** by *Ritwick Dey* to locally host the project files while developing this Landing Page.

This means that if *"index.html"* file is directly opened in the browser, it won't load the "carousel element" into the document since **I have used the fetch() API** in JavaScript to load the JSON User Review Data dynamically into the DOM of the Carousel. So if it shows an error like :-

> script.js:70 Fetch API cannot load file:///C:/app/js/reviews.json. URL
> scheme must be "http" or "https" for CORS request.

inside the console, its because the fetch() API is unable to load the JSON file using simple FTP protocol. It needs to load it using `http://`.

**So while running this project on your local machine, please use the Live Server extension or any other local server to host the files, otherwise the carousel won't be visible.**

The JSON file is hosted at http://127.0.0.1:5500/app/js/reviews.json at the time of using the Live Server.

Thank You!
