# mRooms Server

This directory contains the server-side code for the mRooms project, built with Node.js and Express. Below is the directory structure and information about various routes and configuration files.

## Project Structure

```markdown
server/
|-- routes/
|   |-- bookingsRoutes.js
|   |-- roomsRoutes.js
|   |-- usersRoutes.js
|-- models/
|   |-- userModels.js
|   |-- roomModels.js
|   |-- ...
|-- index.js
|-- package.json
|-- ...
```

- **routes/**: Contains route files for bookings, rooms, and users.
- **models/**: Contains model files for users, rooms, etc.
- **index.js**: Main entry point for the server.
- **package.json**: Dependency configuration and scripts for the server.

## Available Endpoints

- **Rooms Routes (/api/rooms):**
  - `GET /rooms`: Retrieve a list of all rooms.
  - `GET /rooms/:id`: Retrieve details of a specific room.
  - `POST /addroom`: Add a new room.

- **Users Routes (/api/users):**
  - `POST /register`: Register a new user.
  - `POST /login`: Login and authenticate a user.
  - `GET /getusers`: Retrieve a list of all users.

- **Bookings Routes (/api/bookings):**
  - `POST /register`: Register a new booking.
  - `POST /getbookingsbyid`: Retreive all bookings of a users.
  - `POST /bookings/cancelbooking`: Cancel a booking from a user bookings.
  - `GET /register`: Retreive all bookings.

## Configuration

- **Express and MongoDB Connection:**

  The `index.js` file sets up the Express server, connects to MongoDB using Mongoose, and configures routes.

- **CORS Configuration:**

  CORS (Cross-Origin Resource Sharing) is enabled using the `cors` middleware.

- **Database Connection:**

  The server connects to a MongoDB Atlas database with the provided connection string.

## Deployment

The server has been deployed on Render and can be accessed at [https://mrooms.onrender.com](https://mrooms.onrender.com).

## Dependencies

- **Express**: Web application framework for Node.js.
- **Mongoose**: MongoDB object modeling tool.
- **CORS**: Middleware to enable CORS in Express.
- **Stripe**: Payment processing library for handling payments.
- **UUID**: Library for generating unique identifiers.

## Development Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mRooms.git
   ```

2. Navigate to the server directory:

   ```bash
   cd server
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the server:

   ```bash
   npm start
   ```

The server will be running at [http://localhost:8080](http://localhost:8080).

Feel free to explore and customize the code to fit your specific requirements.