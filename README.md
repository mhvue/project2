# Always. Be. On. Time.
User friendly scheduler at your convenience. Stay up to date with your work schedule, your time off requests and your team's schedule. 

<p align="center"><a href="https://mighty-wildwood-15788.herokuapp.com">
<br><img src= "public/images/ABOT.indexImg.png"></p>

Check out the project: https://mighty-wildwood-15788.herokuapp.com

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

## How we authenticate the Sign In and Sign Up 
In this application, we are using Passport. We use this <a href= "https://code.tutsplus.com/tutorials/using-passport-with-sequelize-and-mysql--cms-27537">tutorial</a> as a guide. *NOTE: it is a little outdated in regards Sequalize methods.* 

We have set Local Strategy with Passport to check for email and password from the database. Authentication is done with passport.authenticate() via its function of passport.use().

Passport.use() is configured by setting strategies on how to validate user's information when a user is signing back in or when a user is signing up. 

Our strategy for when users are signing up, is to have Passport check the database with Sequalize ORM methods. If the user is not in database it will add the user. Also, along with bCrypt it will create a hashed password. When users are signing in, we have Passport with Sequalize ORM methods. It will verify the user's email and password from the database. 

If authentication with Passport is successful, users gain access to rest of html pages (such as requesting time off). 

Learn about Passport and bCrypt here:
* <a href="https://www.npmjs.com/package/bcrypt">bCrypt</a>
* <a href="http://www.passportjs.org/" >Passport</a>
* <a href="https://github.com/jaredhanson/passport">Passport Github</a>



## How you can get started: 
1. Clone the repo on your local machine 
<pre><code>git clone https://github.com/mhvue/project2.git </code></pre>
2. Open in your code editor  the cloned repo (I am using Visual Studio Code (VSC) )
3. Run "npm install" in the terminal of VSC to get all the required packages from package-lock.json 
<pre><code>npm install</code></pre>

#### Setting up your database
4. Since we are using Sequalize, make the following model in MySql workbench: 
<pre><code>DROP DATABASE IF EXISTS abot_db;
CREATE DATABASE abot_db; </code></pre>
5. Update your MySQL credentials in config.json.

#### Running the server
6. Run server.js in your terminal of VSC 
<pre><code>node server.js</code></pre>
7. Open the app via localhost (we have ours set as http://localhost:8080)
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
* Express-session 
* Passport.js 
* bCrypt 
* MySQL
* Sequalize

## Motivation 
Learn more about our motivation and possible future developments: https://docs.google.com/presentation/d/1V575YpgOxrLqJHyG1Bb-LuMvrE7aMmrmb8zwXNq5Tto/edit?usp=sharing

## Contributors:
Hallie Weintraub https://github.com/hallieraew <br>
Alicia Forstner https://github.com/forsa9828<br>
Mai Houa Vue https://github.com/mhvue 


