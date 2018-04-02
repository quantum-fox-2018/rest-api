# REST - API
a simple rest api with express and MVC

## Basic Routes

Route list:

| Route         | HTTP           | Description  |
| ------------- |:--------------:| ------------:|
| ```/api/signup```      | POST | Sign up with new user info |
| ```/api/signin```      | POST | Sign in while get an access token based on credentials |
| ```/api/users```      | GET | Get all the users info (admin only) |
| ```/api/users/:id```      | GET | Get a single user info (admin and authenticated user) |
| ```/api/users```     | POST | Create a user (admin only) |
| ```/api/users/:id ```     | DELETE | Delete a user (admin only) |
| ```/api/users/:id```      | PUT | Update a user with new info (admin and authenticated user) |

## Usage

With only npm:

```
npm install
npm start / nodemon start

```

You need adding .env file for secret key. Example:

```
SECRET='funnykitten'
```

Access the website via http://localhost:3000 or API via http://localhost:3000/api
