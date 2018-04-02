# My App Name
Demo App with basic REST API

## REST API
List of basic routes: 

| **Route** | **HTTP** | **Description** |
| --- | --- | --- |
| <span style="color:red">/api/hello?name={name}</span>| GET | Print Hello, ```{name}``` ! |

List of user routes:

| **Route** | **HTTP** | **Description** |
| --- | --- | --- |
|  ``` diff - /api/users``` | GET | Get all the users |
|  ```/api/users/:id ``` | GET | Get a single user |
|  ```/api/users``` | POST  | Create a user |
|  ```/api/users:id ``` | DELETE | Delete a user |
|  ```/api/users/:id ``` | PUT | Update a user with new info |
|  ```/api/users/:id ``` | PATCH | Update a user with specific new info |

| **Route** | **HTTP** | **Description** |
| --- | --- | --- |
|  ```/api/users?name="{name}" ``` | GET | Get  ```{name} ``` match in users|
|  ```/api/users?name="{na}" ``` | GET | Get  ```{na} ``` match in users|

Usage
with only npm:
```
npm install
npm start
npm run dev
```

Access the website via ```http://localhost:3000``` or API via
```http://localhost:3000/api```


