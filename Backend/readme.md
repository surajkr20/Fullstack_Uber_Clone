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
| fullname.firstname | string | ✅ yes   | Minimum 3 characters             |
| fullname.lastname  | string | ❌ no    | Minimum 3 characters if provided |
| email              | string | ✅ yes   | Must be a valid email            |
| password           | string | ✅ yes   | Minimum 5 characters             |

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
| email    | string | ✅ yes   | Must be a valid email |
| password | string | ✅ yes   | Minimum 5 characters  |

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

# 🧑‍💻 Captain Authentication API Documentation

---

## 🚗 5. **Captain Registration**

### **Endpoint**

```
POST /captains/register
```

### **Description**

Registers a new captain (driver) with vehicle details. Returns a JWT token and captain information if successful.

### **Request Body**

```json
{
  "fullname": {
    "firstname": "Ali",
    "lastname": "Khan"
  },
  "email": "ali.khan@example.com",
  "password": "yourpassword",
  "vehicle": {
    "color": "white",
    "plate": "ABC1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### 🔹 Fields

| Field               | Type   | Required | Description                     |
| ------------------- | ------ | -------- | ------------------------------- |
| fullname.firstname  | string | ✅ yes   | Minimum 3 characters            |
| fullname.lastname   | string | ✅ yes   | Minimum 3 characters            |
| email               | string | ✅ yes   | Must be a valid email           |
| password            | string | ✅ yes   | Minimum 5 characters            |
| vehicle.color       | string | ✅ yes   | Minimum 3 characters            |
| vehicle.plate       | string | ✅ yes   | Minimum 5 characters            |
| vehicle.capacity    | number | ✅ yes   | Minimum value 1                 |
| vehicle.vehicleType | string | ✅ yes   | Must be one of: car, bike, auto |

---

### ✅ **Success Response**

**Status:** `201 Created`

```json
{
  "token": "jwt_token",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "Ali",
      "lastname": "Khan"
    },
    "email": "ali.khan@example.com",
    "vehicle": {
      "color": "white",
      "plate": "ABC1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### ❌ **Validation Error**

**Status:** `400 Bad Request`

```json
{
  "errors": [
    {
      "msg": "vehicle color must be atleast 3 characters",
      "param": "vehicle.color",
      "location": "body"
    }
  ]
}
```

### ⚠️ **Captain Already Exists**

**Status:** `400 Bad Request`

```json
{
  "message": "captain already exist"
}
```

### ❗ **Server Error**

**Status:** `500 Internal Server Error`

```json
{
  "error": "Something went wrong"
}
```

## 🚗 6. **Captain Login**

### **Endpoint**

```
POST /captains/login
```

### **Description**

Logs in an existing captain. Returns a JWT token and captain info if credentials are valid.

### **Request Body**

```json
{
  "email": "email@gmail.com",
  "password": "yourpassword"
}
```

#### 🔹 Fields

| Field    | Type   | Required | Description           |
| -------- | ------ | -------- | --------------------- |
| email    | string | ✅ yes   | Must be a valid email |
| password | string | ✅ yes   | Minimum 5 characters  |

---

### ✅ **Success Response**

**Status:** `200 OK`

```json
{
  "token": "jwt_token",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "suraj",
      "lastname": "kumar"
    },
    "email": "email@example.com",
    "vehicle": {
      "color": "white",
      "plate": "ABC1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### ❌ **Validation Error**

**Status:** `401 Unauthorized`

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

### ⚠️ **Invalid Credentials**

**Status:** `401 Unauthorized`

```json
{
  "message": "invalid email or password"
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

## 🚗 7. **Get Captain Profile**

### **Endpoint**

```
GET /captains/profile
```

### **Description**

Returns the authenticated captain's profile. Requires a valid JWT in a cookie or `Authorization` header.

---

### ✅ **Success Response**

**Status:** `200 OK`

```json
{
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "suraj",
      "lastname": "Kumar"
    },
    "email": "suraj@example.com",
    "vehicle": {
      "color": "white",
      "plate": "ABC1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### ⚠️ **Unauthorized**

**Status:** `400 or 401`

```json
{
  "message": "unauthorized captain"
}
```

---

## 🚗 8. **Captain Logout**

### **Endpoint**

```
GET /captains/logout
```

### **Description**

Logs out the authenticated captain by clearing and blacklisting the JWT token. Requires authentication.

---

### ✅ **Success Response**

**Status:** `200 OK`

```json
{
  "message": "logout successfully"
}
```

### ⚠️ **Unauthorized**

**Status:** `400 or 401`

```json
{
  "message": "unauthorized"
}
```