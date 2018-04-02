#  My REST-API

### Demo REST API with express and MVC

A RESTful API is an application program interface (API) that uses HTTP requests to GET, PUT, POST and DELETE data. This program will demonstrating REST API using Express

## This program will be using :

1. Express
2. Sequelize
3. PostgreSQL

## The Routes

### list of routes :

Route | HTTP | Description
------------ | ------------- | ---------------------
`/api/signup` | POST | Sign up with new user info
`/api/signin` | POST | Sign in while get an access token based on credentials
`/api/users` | GET | Get all the users info (admin only)
`/api/users/:id` | GET | Get a single user info (admin and authenticated user)
`/api/users` | POST | Create a user (admin only)
`/api/users/:id` | DELETE | Delete a user (admin only)
`/api/users/:id` | PUT | Update a user with a new info (admin and authenticated user)


## Usage

### with only npm :

```
npm install
npm start
npm run dev
```
