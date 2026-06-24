
# DestiNova Package Management API

A RESTful API for managing travel packages built with Node.js, Express.js, MongoDB, Cloudinary, and Multer.

## Features

* Add New Travel Package
* Get All Packages
* Get Package By ID
* Update Package Details
* Delete Package
* Image Upload using Cloudinary
* MongoDB Database Integration
* Error Handling Middleware

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Cloudinary
* Multer
* Multer Storage Cloudinary
* Dotenv

---

## Project Structure

```bash
project/
│
├── config/
│   ├── db.js
│   └── cloudinary.js
│
├── controller/
│   └── packagecontroller.js
│
├── middleware/
│   ├── httpError.js
│   └── multer.js
│
├── model/
│   └── Package.js
│
├── Routes/
│   └── packageroute.js
│
├── .env
├── server.js
└── package.json
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd project-name
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Run Production Server

```bash
npm start
```

---

## Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

CLOUDINARY_CLOUD=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET_KEY=your_api_secret
```

---

## API Endpoints

### Add Package

**POST**

```http
/api/package/add
```

Form Data:

| Field        | Type   |
| ------------ | ------ |
| packageName  | String |
| price        | Number |
| startDate    | Date   |
| endDate      | Date   |
| duration     | Number |
| destination  | String |
| packageType  | String |
| packageImage | File   |

---

### Get All Packages

**GET**

```http
/api/package/allPackages
```

---

### Get Package By ID

**GET**

```http
/api/package/:id
```

Example:

```http
/api/package/6861abc123456789
```

---

### Update Package

**PATCH**

```http
/api/package/:id
```

You can update:

* packageName
* price
* startDate
* endDate
* duration
* destination
* packageType
* packageImage

---

### Delete Package

**DELETE**

```http
/api/package/:id
```

---

## Package Schema

```javascript
{
  packageName: String,
  price: Number,
  startDate: Date,
  endDate: Date,
  duration: Number,
  destination: String,
  packageImage: String,
  cloudinary_id: String,
  packageType: String
}
```

---

## Image Upload

Images are uploaded directly to Cloudinary using Multer Storage Cloudinary.

Supported formats:

* JPG
* JPEG
* PNG
* WEBP

Maximum file size:

```bash
5 MB
```

---

## Success Response Example

```json
{
  "success": true,
  "message": "new package added"
}
```

---

## Error Response Example

```json
{
  "message": "Package image is required"
}
```

---

## Author

Dharmik Ahir

Backend Developer | Node.js | Express.js | MongoDB
