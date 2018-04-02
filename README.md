# My App Name
Demo app with basic REST API.

# rest-api
List of basic routes:

| Route                  | HTTP | Description           |
|------------------------|------|-----------------------|
| /api/hello?name={name} | GET  | Print hello, <font color="red">{name}</font> ! |

List of user routes:

Route                                   | HTTP   | Description
----------------------------------------|--------|---------------------------------------
<font color="red">/api/users</font>     | GET    | Get all the users
<font color="red">/api/users/:id</font> | GET    | Get a single user
<font color="red">/api/users</font>     | POST   | Create a user
<font color="red">/api/users/:id</font> | DELETE | Delete a user
<font color="red">/api/users/:id</font> | PUT    | Update a user with new info
<font color="red">/api/users/:id</font> | PATCH  | Update a user witch spesific new info

List of filter routes:

Route                                             | HTTP | Description
--------------------------------------------------|------|----------------------------------------------------
<font color="red">/api/users?name="{name}"</font> | GET  | Get <font color="red">{name}</font> match in users
<font color="red">/api/users?name="{na}"</font>   | GET  | Get <font color="red">{na}</font> match in users

# Usage

With only npm:

```
npm install
npm start
npm run dev
```

Access the website via <font color="red">```http://localhost:3000```</font> or API via <font color="red">```http://localhost:3000/api```</font>