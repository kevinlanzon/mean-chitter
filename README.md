Building Chitter, a MEAN Twitter Clone
-------------

🚧 IN PROGRESS 🚧

Using the whole MEAN stack -- Mongo, Express, Angular, and Node -- to build out a simple but robust Twitter clone called Chitter.

- A dynamic front end by using the Angular.js front end framework
- Run a server-side application with authentication services on Node.js
- Model and store data in MongoDB
- Build an API using Express

###Technologies used (so far)

- Angular.js
- Express.js
- HTML
- CSS
- Protractor for e2e testing
- local-server (static web server for testing)

###Setup

```sh
$ git clone git@github.com:kevinlanzon/mean-chitter.git
$ npm install
$ Run bower install
```

###How to run

```sh
$ lserver
Visit http://localhost:8000/app/main.html
```

###How to run tests

```sh
$ cd mean-chitter
$ webdriver-manager update
$ lserver
$ protractor conf.js
```
