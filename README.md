# rest-api
REST API with MVC architecture

### AGRHA REST-api

Demo App with basic REST API for user with jsonwebtoken

### REST-api

List of user routes:

| Routes                | HTTP          | Description                             |
| ---------------------:|:-------------:| ---------------------------------------:|
| /api/users            | GET           |    Get all the users                    |
| /api/users/:id        | GET           |    Get a single user                    |
| /api/users/           | POST          |    Create a user                        |
| /api/users/:id        | DELETE        |    Delete a user                        |
| /api/users/:id        | PUT           |    Update a user with new info          |

Usage

With only npm:

npm install
nodemon bin/www (install nodemon globally 1st)
test using insomnia

access the website via http://localhost:3000 or API via http://localhost:3000/api