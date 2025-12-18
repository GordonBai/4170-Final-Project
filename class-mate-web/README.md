# Class-Mate: Study Partner Matching System

### COMSW 4170 UI/UX Final Project 
### Team 19: Yihan Bai, Tianrui Fang, Erin Ge, Xiao Lu

A full-stack web application that helps students with similar studying habits find their study partners. The system uses Firebase for backend services and React for the frontend interface.

## Features

- **Dashboard**: View and manage study groups
- **Preference Questions**: Set your study preferences (group size, atmosphere, location, time)
- **Group Management**: Find new groups and manage existing study groups

## Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (version 14.0 or higher)
- **npm** (version 6.0 or higher) - comes with Node.js

You can verify your installation by running:
```bash
node --version
npm --version
```

## Instructions to Run the Program

1. **Navigate to the project directory:**
   ```bash
   cd class-mate-web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   This will install all required packages listed in `package.json`.

3. **Start the development server:**
   ```bash
   npm start
   ```
   The application will automatically open in your browser at `http://localhost:3000`.

4. **Build for production (optional):**
   ```bash
   npm run build
   ```
   This creates an optimized production build in the `build` folder.

5. **Run tests (optional):**
   ```bash
   npm test
   ```

## Tools and Technologies Used

### Frontend Framework
- **React** (v19.2.3): JavaScript library for building user interfaces
- **React DOM** (v19.2.3): React renderer for web browsers
- **React Router DOM** (v7.10.1): Declarative routing for React applications

### Backend Services
- **Firebase** (v12.7.0): Google's platform for building web and mobile applications
  - **Cloud Firestore**: NoSQL database for storing user preferences and group data
  - **Firebase App**: Core Firebase SDK

### Development Tools
- **React Scripts** (v5.0.1): Build toolchain for Create React App
- **Web Vitals** (v2.1.4): Library for measuring web performance metrics

### Testing Libraries
- **@testing-library/react** (v16.3.1): Testing utilities for React components
- **@testing-library/jest-dom** (v6.9.1): Custom Jest matchers for DOM elements
- **@testing-library/user-event** (v13.5.0): Simulates user interactions in tests
- **@testing-library/dom** (v10.4.1): Core testing utilities for DOM

### Styling
- **CSS3**: Custom CSS for component styling
- **Google Fonts**: Inter and Roboto font families

## Project Structure

```
class-mate-web/
├── public/          # Static files
├── src/
│   ├── components/ # React components
│   │   ├── Dashboard.js
│   │   ├── Dashboard.css
│   │   ├── PreferenceQuestions.js
│   │   └── PreferenceQuestions.css
│   ├── App.js      # Main application component with routing
│   ├── App.css     # Global application styles
│   ├── firebase.js # Firebase configuration
│   └── index.js    # Application entry point
├── package.json     # Project dependencies and scripts
└── README.md        # This file
```

## Acknowledgments

This project uses the following third-party libraries and resources:

### Libraries and Frameworks
- **React** - Copyright (c) Facebook, Inc. and its affiliates. Licensed under MIT License.
  - Website: https://reactjs.org/
  
- **React Router** - Copyright (c) React Training. Licensed under MIT License.
  - Website: https://reactrouter.com/
  - GitHub: https://github.com/remix-run/react-router

- **Firebase** - Copyright (c) Google LLC. Licensed under Apache License 2.0.
  - Website: https://firebase.google.com/
  - Documentation: https://firebase.google.com/docs

### Fonts
- **Inter** - Designed by Rasmus Andersson. Licensed under SIL Open Font License 1.1.
  - Source: https://fonts.google.com/specimen/Inter

- **Roboto** - Designed by Christian Robertson. Licensed under Apache License 2.0.
  - Source: https://fonts.google.com/specimen/Roboto

### Development Tools
- **Create React App** - Copyright (c) Facebook, Inc. Licensed under MIT License.
  - Website: https://create-react-app.dev/

- **Testing Library** - Copyright (c) Kent C. Dodds and contributors. Licensed under MIT License.
  - Website: https://testing-library.com/

## Firebase Configuration

This application requires Firebase configuration. The Firebase config is located in `src/firebase.js`. Ensure your Firestore security rules allow read/write access to the `preferences` collection for testing purposes.

For production, update your Firestore security rules in the Firebase Console to implement proper authentication and authorization.

## License

This project is created for educational purposes as part of COMSW 4170 UI/UX Final Project at Columbia University.