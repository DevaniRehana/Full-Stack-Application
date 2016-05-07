CSE 5335 - WEB DATA MANAGEMENT 

PROJECT 1

NAME: REHANA DEVANI

UTA ID: 1001100807

NET ID: rxd0807

               What server framework did you choose and why?
---------------------------------------------------------------------------
   
     I chose Node.js framework for the following reasons:
   
1. Node.js is Javascript. So the same language can be used on the backend and frontend.
   This breaks down the boundaries between backend and frontend.

2. Node.js enables high throughput and application scalability due to asynchronous, 
   event-driven processing.

3. Inexpensive to test/deploy using services like Heroku(Pay per resources).

4. Unified programming language and datatype(JavaScript and JSON).

5. It is lightweight and efficient, perfect for data-intensive real time applications 
   that run across distributed systems.

6. It is fast because Node.js is a JavaScript runtime that uses the V8 engine developed
   by Google for use in Chrome.

7. Code re-usability is achieved as the same code can be used on both sides of the stack.



                What client framework did you choose and why?
---------------------------------------------------------------------------------- 
     
     I chose JQuery as client framework for the following reasons:
   
1. JQuery uses simple, clean and powerful syntax. Five lines of JQuery are equivalent to
   25 lines of conventional Javascript code. This means smaller files and faster loading 
   pages. Hence it saves lot of time.

2. Easy implementation for web developers in comparison to other applications.

3. JQuery is cross-browser friendly. It is currently the most popular JavaScript library
   and works in all browsers.

4. JQuery is free, open-source software.

5. JQuery lets you develop AJAX templates with ease. Actions can be performed on the pages
   without requiring entire page to be reloaded. Data can be retrieved from server in the
   background without worrying about how the web page behaves.

6. JQuery is search engine optimized. Everything in JQuery is set up as text. Hence it is  
   completely readable to search engines, exposing its keyword rich content.

7. JQuery makes web pages more exciting, interactive, cleaner, and more user friendly.

8. JQuery is supported by any mobile device whose web browser supports JavaScript.

9. Large software companies, like Microsoft, supports using jQuery in their applications,
   such as Visual Studio, as evidence of their support of jQuery’s superior product. 

10. Web page elements display even if JavaScript is disabled in the browser.

11. Detailed documentation and useful examples for using JQuery on its website.



              What aspect of the implementation did you find easy, if any,   and why?
------------------------------------------------------------------------------------

* Performing AJAX call to RESTful web services available on server-side framework was 
  easy for me as I used JQuery for client-side framework and JQuery simplifies AJAX.
  Using AJAX with JQuery, data can be retrieved from the server without refreshing the 
  page and without worrying about how the web page behaves.

  
  
             What aspect of the implementation did you find hard, if any,   and why?
  -------------------------------------------------------------------------------------
*  I had a hard time displaying dots on Google Maps even after including latitude and 
   longitude values in JSON data. But I later figured out how to use multiple markers to
   display locations and assigning close values to locations helped as I could view the 
   markers without zooming in and out the map.



          What components OTHER than your client and server framework did you install,
           if any, and if so, what is their purpose for your solution?
—-----------------------------------------------------------------------------------

* Other than client and server framework Express.js was used. It is a Node.js framework.

* If we use Express.js framework, we don’t have to repeat same code over and over again.
 
* Node.js is a low level I/O mechanism which has an HTTP module.

* If you just use a HTTP module, a lot of work like parsing the payload, cookies, storing
  sessions, selecting the best route based on regular expressions will have to be re-
  implemented. 

* With express.js, it is already there for you to use it.

* In this project, I had to write a small REST API on server-side. Using Express.js, it 
  took 5 - 10x less time and less lines of code.



         What Ubuntu commands are required to deploy and run your server?
------------------------------------------------------------------------------------- 
PREPARING AND SETTING UP THE SAMPLE APP

// Logging in to heroku from command prompt by entering Email and Password
- $ heroku login

// Command to clone the sample application
- $ git clone https://github.com/heroku/node-js-getting-started.git
- $ cd node-js-getting-started

DEPLOYING THE APP ON HEROKU

// Creating an app on heroku which prepare Heroku to receive your sample code
- $ heroku create

 // Deploying the code
- $ git push heroku master

// To ensure that atleast one instance of the app is running
- $ heroku ps:scale web=1

// Command to open the website to visit the app
- $ heroku open

// To view information about the running app
- $ heroku logs —-tail

// To start the application locally
- $ heroku local web

// Manages the set of repositories ("remote") whose branches you track
- $ git remote -v

// Adds file's content to the index
- $ git add .

// It commits or saves the changes made
- $ git commit -m “Demo”

// It pushes the code to Heroku after committing
- $ git push heroku master

// Pushing an existing repository to github from command line
- git remote add origin https://github.com/DevaniRehana/cse5335-rxd0807.git
- git push -u origin master

