# 🧑‍💻 User Authentication API Documentation

---

## 📌 1. **User Registration**

### **Endpoint**

```
POST /users/register
```

### **Description**

Registers a new user. Returns a JWT token and user information if successful.

### **Request Body**

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

#### 🔹 Fields

| Field              | Type   | Required | Description                      |
| ------------------ | ------ | -------- | -------------------------------- |
| fullname.firstname | string | ✅ yes    | Minimum 3 characters             |
| fullname.lastname  | string | ❌ no     | Minimum 3 characters if provided |
| email              | string | ✅ yes    | Must be a valid email            |
| password           | string | ✅ yes    | Minimum 5 characters             |

---

### ✅ **Success Response**

**Status:** `201 Created`

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

### ❌ **Validation Error**

**Status:** `400 Bad Request`

```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### ⚠️ **User Already Exists**

**Status:** `400 Bad Request`

```json
{
  "message": "User with this email already exists"
}
```

### ❗ **Server Error**

**Status:** `500 Internal Server Error`

```json
{
  "error": "Something went wrong"
}
```

---

## 🔐 2. **User Login**

### **Endpoint**

```
POST /users/login
```

### **Description**

Logs in an existing user. Returns a JWT token and user info if credentials are valid.

### **Request Body**

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### 🔹 Fields

| Field    | Type   | Required | Description           |
| -------- | ------ | -------- | --------------------- |
| email    | string | ✅ yes    | Must be a valid email |
| password | string | ✅ yes    | Minimum 5 characters  |

---

### ✅ **Success Response**

**Status:** `200 OK`

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

### ❌ **Validation Error**

**Status:** `401 Unauthorized`

```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### ⚠️ **Invalid Credentials**

**Status:** `401 Unauthorized`

```json
{
  "message": "Invalid email or password"
}
```

### ❗ **Server Error**

**Status:** `500 Internal Server Error`

```json
{
  "error": "Something went wrong"
}
```

---

## 🙍‍♂️ 3. **Get User Profile**

### **Endpoint**

```
GET /users/profile
```

### **Description**

Returns the authenticated user's profile. Requires a valid JWT in a cookie or `Authorization` header.

---

### ✅ **Success Response**

**Status:** `200 OK`

```json
{
  "_id": "user_id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

### ⚠️ **Unauthorized**

**Status:** `400 or 401`

```json
{
  "message": "Unauthorized person"
}
```

---

## 🚪 4. **User Logout**

### **Endpoint**

```
GET /users/logout
```

### **Description**

Logs out the authenticated user by clearing and blacklisting the JWT token. Requires authentication.

---

### ✅ **Success Response**

**Status:** `200 OK`

```json
{
  "message": "Logged out"
}
```

### ⚠️ **Unauthorized**

**Status:** `400 or 401`

```json
{
  "message": "Unauthorized"
}
```