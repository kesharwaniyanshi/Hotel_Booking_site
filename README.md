
# Hotel Booking Site

This is a MERN stack website for hotel booking.

## Project Structure

The project is divided into two main parts:
- `client`: Frontend built with React and Vite
- `server`: Backend built with Node.js and Express

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js
- npm
- MongoDB

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kesharwaniyanshi/Hotel_Booking_site.git
   cd Hotel_Booking_site
   ```

2. Install dependencies for both client and server:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Set up environment variables:
   - In the `server` folder, create a `.env` file and add:
     ```
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET_KEY=your_jwt_secret
     ```
   - In the `client` folder, create a `.env` file and add:
     ```
     VITE_APP_URI_API=http://localhost:5000 # or your backend URL
     ```

## Running the Application

1. Start the server:
   ```bash
   cd server
   nodemon server.js
   ```

2. In a new terminal, start the client:
   ```bash
   cd client
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` (or the port Vite is running on)


## Features

1. User Authentication
   - Secure SignIn and SignUp functionality
   - JSON Web Token (JWT) based authentication
   - Password encryption for enhanced security

2. Role-Based Access Control
   - User roles: Guest, Registered User, and Admin/Host
   - Admin panel for hotel owners and site administrators

3. Multi-Page Architecture
   - Intuitive navigation between different sections of the website
   - Responsive design for seamless experience across devices

4. Database Integration
   - MongoDB integration for efficient data storage and retrieval
   
5. Review and Rating System
   - Allow users to leave reviews and ratings for hotels
   - Display average ratings and recent reviews

10. Responsive Design
    - Mobile-friendly interface
    - Consistent user experience across various screen sizes

## Technologies Used

- Frontend: React, Vite
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)

