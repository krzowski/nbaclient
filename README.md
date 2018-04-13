# NBA Client 

----
## about the project
NBA Client is a React app that allows users to get day-by-day schedule and scores, mark their favorite teams, and view recent and incoming games for each team. 

It uses Google's Firebase to authenticate users and to store user data about their favorite teams, and implements persistent authentication to keep user logged in across different sessions.

NBA Client was created using the following libraries: 

* react-router, react-router-dom
* redux, react-redux + redux-thunk
* axios
* moment.js
* firebase


---
Note: as it is a pet project, NBA Client accesses an open [thesportsdb API](https://www.thesportsdb.com/) to get the NBA data, but the range of data is limited. 
Unfortunately there is no public API to get NBA standings/full team schedules/box scores/full playoffs schedule that would allow [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). Due to this fact playoffs box score espn links also won't work.


---
## try it out
visit [project's website](http://oldakowski.eu/nbaclient/) and try any of the test credentials:

* email: dummy@example.com, password:qwerty
* email: dummy2@example.com, password:qwerty
* email: dummy3@example.com, password:qwerty
* email: dummy4@example.com, password:qwerty

or create your own account!

----
## local setup

download the code:

    git clone https://github.com/krzowski/react-nbaclient.git

Navigate to root folder and install node modules with:

    cd react-nbaclient/ && npm install

start server with:

    npm start
