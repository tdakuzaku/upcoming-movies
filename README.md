# Upcoming Movies

This a webapp for cinephiles and movie hobbyists. In this first version, the app has the following features:

* List of upcoming movies
* View movie details
* Search for movies by title

### Prerequisites

* NPM
* Docker + Docker Compose

### Installing

Just run the command:

```
docker-compose up
```

On the first run, Docker will build the server (might take some minutes), install the dependencies and then start the server.

## Running the server tests

After the server is up, run any of the commands:

```
npm run test
```
Or
```
npm run coverage
```

### Updating the Client

The frontend client will be separated into another project, but for now it's as subdirectory served static from the server.

```
cd client/ && npm run build
```

## Deployment
```
git push heroku master
```

## Built With

* [NodeJS](http://nodejs.org/) - Backend app server
* [VueJS](https://vuejs.org/) - Frontend framework
* [BootstrapVue](https://bootstrap-vue.js.org//) - Bootstrap components for VueJs
