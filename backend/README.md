# Backend API Documentation

This document provides an overview of the backend part of the Nuxt and Express application.

## Overview

The backend is built using Express.js and serves as the API for the application. It handles requests from the frontend and communicates with the database if necessary.

## Project Structure

- `src/app.ts`: Entry point of the Express application.
- `src/controllers/index.ts`: Contains the `IndexController` class for handling requests.
- `src/routes/index.ts`: Sets up the routes for the Express application.
- `src/types/index.ts`: Defines custom types for requests and responses.

## Installation

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To start the Express server, run the following command:
```
npm start
```

The server will be running on `http://localhost:3000` by default.

## API Endpoints

- `GET /`: Returns a welcome message or index data.

## Development

For development, you can use the following command to run the server with automatic restarts on file changes:
```
npm run dev
```

## Testing

To run tests, use:
```
npm test
```

## License

This project is licensed under the MIT License.