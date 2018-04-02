# My App Name
Demo app with basic REST API

## REST API
List of basic routes:

**Route**|**HTTP**|**Description**
---|---|---
<font color="red">/api/hello?name={name}</font>|GET|Print hello, <font color="red">{name}</font> !

List of user routes:

**Route**|**HTTP**|**Description**
---|---|---
<font color="red">/api/users</font>|GET|Get all the users
<font color="red">/api/users/:id</font>|GET|Get a single user
<font color="red">/api/users</font>|POST|Create a user
<font color="red">/api/users/:id</font>|DELETE|Delete a user
<font color="red">/api/users/:id</font>|PUT|Update a user with new info
<font color="red">/api/users/:id</font>|PATCH|Update a user with specific new info

List of filter routes:

**Route**|**HTTP**|**Description**
---|---|---
<font color="red">/api/users?name="{name}"</font>|GET|Get <font color="red">{name}</font> match in users
<font color="red">/api/users?name="{na}"</font>|GET|Get <font color="red">{na}</font> like users
