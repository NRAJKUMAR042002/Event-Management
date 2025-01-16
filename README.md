# Event-Management
A full-stack event management platform where users can create, manage, and view events. This project features user authentication, event creation, and real-time updates using modern web technologies.
Features
Frontend
User Authentication: Register and log in with email and password. Includes validation and error handling.
Event Dashboard: View a list of all events with their details (e.g., attendees, description, date/time).
Event Creation: Add new events with a form.
Real-Time Updates: See the number of attendees and event changes in real-time using WebSockets.
Responsive Design: Works seamlessly across desktop, tablet, and mobile devices.
Backend
Authentication: Secure authentication using JWT tokens.
Event Management: CRUD operations for events with ownership validation.
Real-Time Communication: Uses Socket.IO for real-time updates.
Database: Stores user and event data in MongoDB Atlas.
Deployment
Frontend: Deployed on Vercel or Netlify.
Backend: Deployed on Render or Railway.app.
Database: MongoDB Atlas (Free Tier).
Image Hosting: Cloudinary (if image support is added in the future).
Live Demo
Frontend: Frontend URL
Backend: Backend URL
(Replace # with your deployed URLs.)
Technologies Used
Frontend
React.js: Component-based UI development.
React Router: For navigation and routing.
Axios: For API requests.
Socket.IO-Client: Real-time communication.
Backend
Node.js: JavaScript runtime for building the backend.
Express.js: Web framework for API and routing.
Socket.IO: Enables real-time updates for attendees.
JWT: Secure token-based authentication.
MongoDB Atlas: Cloud-based NoSQL database.
Setup Instructions
Prerequisites
Node.js and npm installed.
MongoDB Atlas account set up.
Free-tier hosting services like Vercel (for frontend) and Render (for backend).
Backend Setup
Navigate to the server directory:

bash
Copy code
cd server
Install dependencies:

bash
Copy code
npm install
Create a .env file in the server directory:

env
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
Run the server locally:

bash
Copy code
npm run dev
The server will run at http://localhost:5000.

Frontend Setup
Navigate to the client directory:

bash
Copy code
cd client
Install dependencies:

bash
Copy code
npm install
Create a .env file in the client directory:

env
Copy code
REACT_APP_BACKEND_URL=http://localhost:5000
Run the React app locally:

bash
Copy code
npm start
The app will run at http://localhost:3000.

Deployment
Backend
Push your backend code to a GitHub repository.
Deploy the backend to Render or Railway.app:
Connect your GitHub repository.
Add environment variables (e.g., MONGO_URI, JWT_SECRET).
Once deployed, note down the backend URL (e.g., https://your-backend-url.com).
Frontend
Push your frontend code to a GitHub repository.
Deploy the frontend to Vercel or Netlify:
Connect your GitHub repository.
Add the environment variable REACT_APP_BACKEND_URL with the deployed backend URL.
Once deployed, note down the frontend URL (e.g., https://your-frontend-url.com).
Usage
Test User Credentials
Email: testuser@example.com
Password: password123
Features to Try
Register: Create a new user account.
Login: Log in with your credentials.
Create Event: Add a new event.
View Events: See a list of all events.
Real-Time Updates: Open the app in two tabs, and observe real-time attendee updates.
File Structure
Backend (/server)
csharp
Copy code
/server
  /models
    user.js         // User schema
    event.js        // Event schema
  /routes
    auth.js         // Authentication routes
    events.js       // Event management routes
  /controllers
    authController.js // Handles user login/register
    eventController.js // Handles event CRUD
  /middleware
    auth.js         // JWT authentication middleware
  server.js         // Main server file
Frontend (/client)
scss
Copy code
/client
  /src
    /components
      Auth.js         // Authentication (login/register)
      EventDashboard.js // Dashboard for events
      EventForm.js     // Event creation form
    /context
      AuthContext.js  // Manages user authentication state
    /utils
      api.js          // API utility for HTTP requests
    App.js            // Main App component
    index.js          // App entry point
Future Enhancements
Add attendee registration for events.
Implement image upload for events using Cloudinary.
Add search and filter options to the event dashboard.
Add admin functionality for managing users.
License
This project is open-source and available under the MIT License.
