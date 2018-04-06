# My App Name
Demo App with basic REST API
Link : <https://thawing-dawn-46800.herokuapp.com/>

## REST API
List of basic routes:

Route | HTTP | Description
--- | --- | ---
/api/hello?name={name} | GET | Print hello, {name} !

List of user routes:

| Route | HTTP | Description |
 --- | --- | ----
 /api/users | GET | Get all the users
 /api/users/:id | GET | Get a single user
 /api/users | POST | Create a user
 /api/users/:id | DELETE | Delete all user
 /api/users/:id | PUT | Update a user with new info
 /api/users/:id | PATCH | Update a user with specific new info

List of filter routes:

Route | HTTP | Description
--- | --- | ---
/api/users?name="{name}" | GET | Get {name} match in users
/api/users?name="{na}" | GET | Get {na} like in users