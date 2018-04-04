# Phase 2, Day 1
Demo app with basic REST API.
1. Model CRUD using Sequelize, Postgres
2. Controller CRUD
3. Routing
4. Sign Up User
5. Sign In User and Authentication Token User
6. Deploy to Heroku


# REST API with Authentication
List of user routes:

Route                                   | HTTP   | Description
----------------------------------------|--------|---------------------------------------
<font color="red">/api/signup</font>     | POST   | Sign up with new user info
<font color="red">/api/signin</font>     | POST   | Sign in while get an access token based on credentials
<font color="red">/api/users</font>     | GET    | Get all the users info (admin only)
<font color="red">/api/users/:id</font> | GET    | Get a single user info (admin and auhenticated user)
<font color="red">/api/users</font>     | POST   | Create a user (admin only)
<font color="red">/api/users/:id</font> | DELETE | Delete a user (admin only)
<font color="red">/api/users/:id</font> | PUT    | Update a user with new info (admin and authenticated user)

# Usage
With only npm:

```
npm install
npm start
npm run dev
```

Access the website via <font color="red">```http://localhost:3000```</font> or API via <font color="red">```http://localhost:3000/api```</font>