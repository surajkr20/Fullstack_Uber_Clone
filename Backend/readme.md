# User Registration API

## Endpoint

`POST /users/register`

## Description

This endpoint registers a new user and returns a JWT token along with the user object if successful.

## Request Body

Send a JSON object with the following fields

- **fullname**
  - **firstname** required, minimum 3 characters
  - **lastname** optional, minimum 3 characters if provided
- **email** required, must be a valid email address
- **password** required, minimum 5 characters

### Example

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

## Responses

### Success

Status code 201  
Returns a JSON object with a token and user data

```json
{
  "token": "jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Validation Error

Status code 400  
Returns a JSON object with an errors array

```json
{
  "errors": [
    {
      "msg": "invalid email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### Other Errors

Status code 500  
Returns a JSON object with an error message

```json
{
  "error": "Error message"
}
```
