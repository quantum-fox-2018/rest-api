# My App Name
Demo app with basic REST API.

## REST API
List of basic routes:


| Route                  | HTTP | Description           |
| ---------------------- | ---- | --------------------- |
| /api/hello?name={name} | GET  | Print hello, {name} ! |


| Route | HTTP | Description |
| --- | --- | --- |
| /api/hello?name={name} | GET  | Print hello, {name} ! |


List of user routes:

| Route | HTTP | Description |
| --- | --- | --- |
| /api/users | GET | Get all the users |
| /api/users/:id | GET | Get a single user |
| /api/users | POST | create a user |
| /api/users/:id | DELETE | Delete a user |
| /api/users/:id | PUT | Update a user with new info |
| /api/users/:id | PATCH | Update a user with specific new info |

List of filter routes:

| Route | HTTP | Description |
| --- | --- | --- |
| /api/users?name="{name}" | GET | Get {name} match in users |
| /api/users?name="{na}" | GET | Get {na} like in users |


## Usage

With only npm:

```
npm install
npm start
npm run dev
```


Access the website via [http://localhost:3000](https:www.google.com) or API via [http:localhost:3000/api](www.google.com)


- ![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `#f03c15`

```diff
+ this will be highlighted in green
- this will be highlighted in red
```

BlockQuotes
> Fitrul mau menguasai dunia


Horizontal Rule
***

1. orderedlist
* unorderedlist
