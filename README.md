# MERN Stack Authorization App

This project is a MERN (MongoDB, Express, React, Node.js) stack application that provides user authentication and authorization features. It includes a frontend built with React and Vite, and a backend built with Express and MongoDB.

## Features

- User registration and login
- JWT-based authentication
- Api validation with express-validator
- Protected routes with React Router and higher-order components
- Context API for state management
- Axios for API requests
- UI Form validation with Yup and React Hook Form
- Tailwind CSS for styling

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

## Getting Started

### 1. Clone the repository

In your terminal, run the following command:

```sh
git clone https://github.com/YerrouHamza/Authorization_App-MERN.git
cd Authorization_App-MERN
```

### 2. Set up the backend

#### A. Navigate to the API directory:

```sh
cd api
```

#### B. Install the dependencies:

```sh
npm install
```

#### C. Create a `.env` file in the root of the `api` directory with the following content:

```sh
SERVER_PORT=8080 // or any other port you prefer
DB_URL=mongodb://localhost:27017/auth_mern_app // or your MongoDB connection string
JWT_SECRET='!@3$5rndm-veryLONGsuperSECRETkey_xYZ@789' // or any other secret key
```

#### D. Start the backend server:

```sh
npm run startDev
```

### 3. Set up the frontend

#### A. Navigate to the client directory:

```sh
cd UI
```

#### B. Install the dependencies:

```sh
npm install
```

#### C. Start the frontend development server:

```sh
npm run dev
```

### 4. Open the application

Open your browser and go to `http://localhost:3000` to view the application.

## Database Setup

1. Ensure MongoDB is installed and running on your machine or use a cloud instance.
2. The database connection URL is specified in the .env file in the API directory. By default, it is set to mongodb://localhost:27017/auth_mern_app.
3. the schema is created automatically when the server is started. for changing the schema, you can modify the users.js file in the models directory.
