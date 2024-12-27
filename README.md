# Taskify

Taskify is a feature-rich To-Do List application built using the MERN stack. It provides users with a clean and intuitive interface to manage their tasks effectively. This project focuses on responsive design, robust authentication, and user-friendly functionality.

## Features

### Authentication
- Login with email and password.
- Signup with name, email, and password.
- Secure authentication using JWT tokens (access and refresh tokens) stored in cookies.
- Profile includes userID, name, email, and associated tasks.

### To-Do Functionality
- **Task Fields**:
  - Title (string)
  - Description (string)
  - Due Date (DD-MM-YYYY)
  - Priority (High, Medium, Low)
  - Status (Completed or Pending)
  - userID (to associate tasks with users)
- **CRUD Operations**:
  - Add new tasks.
  - Update task details (title, description).
  - Delete tasks.
  - Change task status (Completed <-> Pending).
  - Modify or extend the due date.
  - Change task priority.
- **Sorting Options**:
  - Sort tasks by Due Date, Priority, and Status.

### Additional Features
- Fully responsive for mobile screens.
- Unit tests and integration tests for API endpoints.

## Tech Stack

### Frontend
- JavaScript
- ReactJS
- Context API
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### Authentication
- JWT for access and refresh tokens
- Bcrypt for password hashing

### API Integration
- Axios for API requests

## Installation

1. Clone the repository:
   ```bash
   git clone
   cd taskify
   ```

2. Install dependencies:
   - For the backend:
     ```bash
     cd backend
     npm install
     ```
   - For the frontend:
     ```bash
     cd ../frontend
     npm install
     ```

3. Set up environment variables:
   - Create a `.env` file in the backend directory with the following variables:
     ```env
     MONGO_URI=your-mongodb-uri
     JWT_SECRET=your-jwt-secret
     REFRESH_TOKEN_SECRET=your-refresh-token-secret
     ```

4. Start the development servers:
   - Backend:
     ```bash
     cd backend
     npm run dev
     ```
   - Frontend:
     ```bash
     cd ../frontend
     npm start
     ```

5. Open the application:
   - The frontend will be accessible at `http://localhost:3000`.
   - The backend API will run at `http://localhost:5000`.

## Folder Structure

```
Taskify/
|-- backend/
|   |-- controllers/
|   |-- models/
|   |-- routes/
|   |-- middleware/
|   |-- .env
|   |-- server.js
|-- frontend/
|   |-- src/
|       |-- components/
|       |-- context/
|       |-- pages/
|       |-- App.js
|       |-- index.js
|   |-- public/
|-- README.md
```

## Roadmap

1. **Authentication**:
   - Implement login, signup, and logout functionality.
   - Include secure token-based authentication.
2. **To-Do Features**:
   - Build task management CRUD operations.
   - Add sorting and filtering options.
3. **UI/UX Enhancements**:
   - Ensure mobile responsiveness.
   - Implement dark/light mode.
4. **Testing**:
   - Write unit tests and integration tests for backend APIs.
5. **Deployment**:
   - Host the frontend and backend on a cloud platform (e.g., Vercel, Heroku).

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for any bugs or enhancements.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- Inspiration: Personal need for an efficient task management app.
- Tech Stack Documentation: MongoDB, ReactJS, Node.js, Express.js.

---

Feel free to reach out for any suggestions or queries!
