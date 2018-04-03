# REST API
Demo app with basic REST API

List of routes:

**Route** | **HTTP** | **Description**
--------- | -------- | ---------------
/api/signup | POST | Create a user
/api/signin | POST | Sign in
/api/users | GET | Get all the users (for admin only)
/api/users/:id | GET | Get a single user (for admin only)
/api/users:id | PUT | Update a user with new info
/api/users:id | DELETE | Delete a user

## Usage
With only npm:

```
run 'npm install'
configure config.json
run 'sequelize db:create'
run 'sequelize db:migrate'
run 'npm start'

```

Access the website via ```http://localhost:3000``` or API via ```https://whispering-journey-92706.herokuapp.com/```.
