[![Code Climate](https://codeclimate.com/github/kevinlanzon/mean-chitter/badges/gpa.svg)](https://codeclimate.com/github/kevinlanzon/mean-chitter)

Chitter - A MEAN Twitter Clone
-------------

Using the whole MEAN stack -- Mongo, Express, Angular, and Node -- to build out a simple but robust Twitter clone called Chitter.

- [x] A dynamic front end by using the Angular.js front end framework
- [x] Run a server-side application with authentication services on Node.js
- [x] Model and store data in MongoDB
- [x] Build an API using Express

Screenshot
---
<div align="center">
    <img width="105%" src="/public/images/screen-shot.png">
</div>

View live
-----
[Chitter](https://lanzon-chitter.herokuapp.com/)

###Technologies used

- MongoDB
- Express.js
- Angular.js
- Node.js
- Mongoose
- Passport
- Protractor for e2e testing
- Jasmine-Node unit testing
- HTML
- CSS
- Bootstrap


###Setup

```sh
$ git clone git@github.com:kevinlanzon/mean-chitter.git
$ npm install
```

###How to run

```sh
$ mongod
$ npm start
Visit http://localhost:3000
```

###How to run tests

```sh
$ cd mean-chitter
$ webdriver-manager update
$ npm start
$ protractor conf.js
```
