# Always. Be. On. Time.
User friendly scheduler at your convenience. Stay up to date with your work schedule, your time off requests and your team's schedule. 

<p align="center"><a href="https://mighty-wildwood-15788.herokuapp.com">
<br><img src= "public/images/ABOT.indexImg.png"></p>

## How it works:

Simply login and you have access to:

<p align="center">Submit availability<br>
<br><img src= "public/images/avail.png" width = "400"></p>

<p align="center">View you and your team's availability in ascending order of dates<br>
<br><img src= "public/images/schedule.png"></p>

<p align="center">Request off<br>
<br><img src= "public/images/requestoff.png" width = "400"></p>

### Don't have an account? 
Just click Sign Up and you can create an account.
<p align="center">
<br><img src= "public/images/signUp.png" width = "400"></p>

Mobile friendly and you will *always be on time!*

## How is the Sign In or Sign Up secure?  
In this application, we are using Passport to check users's email and password from the database. This type of authentication is called Local Strategy from Passport. Authentication is done with the use of passport.authenticate() via its function of passport.use().

Passport.use() must be configured first by setting _stratagies_ that will tell passport how to validate user's information. 

When new users are signing up, Passport will check the db (in this application via Sequalize ORM methods) and if not already in db, with bCrypt, can hashed the created password for security purposes. 

Passport allows users to gain access to pages that only a registered user can see (such as requesting time off). 


Check it out here: https://mighty-wildwood-15788.herokuapp.com/ 


## How to get started: 
1. Clone the repo on your local machine 
2. Open in your code editor  the cloned repo (I am using Visual Studio Code (VSC) )
3. Run "npm install" in the terminal of VSC to get all the packages from package-lock.json 

#### Setting up your database
4. Since we are using Sequalize make the following model in MySql workbench: 
<pre><code>DROP DATABASE IF EXISTS abot_db;
CREATE DATABASE abot_db; </code></pre>
5. Make sure your MySQL credentials are in config.json.

#### Running the server
6. Run server.js in your terminal of VSC 
7. Open the app via localhost (this application have it set as http://localhost:8080)
8. You are free to explore, add, and make it your own! 


## Technologies used

### Front End 
* HTML
* CSS
* JQuery
* Bootstrap
* Moment.js 
### Back End 
* Node.js
* Express
* Express-session -middleware to handle session generation
* Passport.js http://www.passportjs.org/ 
* bCrypt https://www.npmjs.com/package/bcrypt 
* MySQL
* Sequalize

Learn more about our motivation and possible future developments: https://docs.google.com/presentation/d/1V575YpgOxrLqJHyG1Bb-LuMvrE7aMmrmb8zwXNq5Tto/edit?usp=sharing

## Contributors:
Hallie Weintraub https://github.com/hallieraew <br>
Alicia Forstner https://github.com/forsa9828<br>
Mai Houa Vue https://github.com/mhvue 


