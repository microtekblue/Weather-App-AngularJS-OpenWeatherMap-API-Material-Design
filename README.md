# Weather App: AngularJS 1.7.8, OpenWeatherMap API, Angular Material Design
This Weather App uses AngularJS 1.7.8 + OpenWeatherMap API + Material Design to show any city world wide current temperature and 5 day forecast temperature.

### How to Run

1. Clone Project
2. Run 'npm install'
3. Run 'npm start'


### Demo

https://www.webdesigndevelopment.ca/github/weather-app/

### Screenshots

![Brampton Celsius](https://www.webdesigndevelopment.ca/github/weather-app/images/brampton-C.JPG)

![Brampton Fahrenheit](https://www.webdesigndevelopment.ca/github/weather-app/images/brampton-F.JPG)

![Mississauga Celsius](https://www.webdesigndevelopment.ca/github/weather-app/images/forecast-mississauga-C.JPG)

![Mississauga Fahrenheit](https://www.webdesigndevelopment.ca/github/weather-app/images/forecast-mississauga-F.JPG)

# Setup used: `angular-seed` — the seed for AngularJS apps

### Install Dependencies

We have two kinds of dependencies in this project: tools and AngularJS framework code. The tools
help us manage and test the application.

* We get the tools we depend upon and the AngularJS code via `npm`, the [Node package manager][npm].
* In order to run the end-to-end tests, you will also need to have the
  [Java Development Kit (JDK)][jdk] installed on your machine. Check out the section on
  [end-to-end testing](#e2e-testing) for more info.

We have preconfigured `npm` to automatically copy the downloaded AngularJS files to `app/lib` so we
can simply do:

```
npm install
```

Behind the scenes this will also call `npm run copy-libs`, which copies the AngularJS files and
other front end dependencies. After that, you should find out that you have two new directories in
your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/lib` - contains the AngularJS framework files and other front end dependencies

*Note copying the AngularJS files from `node_modules` to `app/lib` makes it easier to serve the
files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].

