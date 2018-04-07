# rest-api
simple rest api with express and MVC

# My App Name

Demo app with basic REST API.

#### LINK : ``https://mighty-everglades-73943.herokuapp.com/``

# REST API:

List of basic routes:

**Route**| **HTTP** | **Description**
------------ | ------------- | -------------
/api/hello?name={name} | GET | Print hello, {name} !

List of user routes:

**Route** | **HTTP** | **Description**
------------ | ------------- | -------------
/api/users   | GET | Get all the users
/api/users/:id | GET | Get a single user
/api/users | POST | Create a user
/api/users/:id | DELETE | Delete a user
/api/users/:id | PUT | Update a user with new info
/api/users/:id | PATCH | Update a user with specific new info

List of filter routes:

**Route** | **HTTP** | **Description**
------------ | ------------- | -------------
/api/users?name="{name}"  | GET | Get {name} match in users
/api/users?name="{na}" | GET | Get {na} like in user

### **Usage**
With only npm:

```
npm install
npm start
npm run dev
```

Access the website via ``http://localhost:3000`` or API via
``http://localhist:3000/api``.
