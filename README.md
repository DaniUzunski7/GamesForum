📘 Functional Guide
1. 🎯 Purpose of the Application
GamesForum is a community‑driven web application where users can create discussions, share opinions, and explore trending games. The platform allows gamers to interact through posts, comments, likes, and personal profiles.
The purpose of the application is to provide a centralized space for gaming enthusiasts to exchange ideas, review games, and stay updated on popular titles.

2. 🧭 Main User Flows
Flow 1: User Registration & Login
User navigates to the Register or Login page

User enters required credentials

Firebase Authentication validates the data

Upon success, the user is redirected to the Home page with personalized access

Flow 2: Creating a New Discussion (Theme)
User clicks “New Discussion”

User fills out the form (title, content, game info)

System validates the input

Discussion is saved in Firebase

User is redirected to the Theme Details page

Flow 3: Browsing & Interacting With Discussions
User opens the Home or Themes page

System loads all discussions from Firebase

User can:

Open a discussion

Comment on it

Like it

System updates the discussion in real time

Flow 4: Viewing Top Games
User navigates to Top Games

System displays the top 10 games of the year

Pagination allows browsing through multiple pages

Flow 5: User Profile Management
User opens the Profile page

System loads stored user information

User can edit profile details

Changes are saved to Firebase

3. ⚙️ Core Features Explained
Feature 1: User Authentication
Built with Firebase Authentication

Supports registration, login, and logout

Stores user session in Local Storage for persistence

Feature 2: Create & Manage Discussions
Users can create new game‑related topics

Each discussion includes:

Title

Description

Game details

Author information

Discussions are stored in Firebase Firestore

Feature 3: Comments & Likes
Users can comment on any discussion

Comments appear instantly using Firebase real‑time updates

Users can like posts; likes are counted and displayed

Feature 4: Top Games Page
Displays curated list of top 10 games

Includes pagination for easy navigation

Uses Angular components for dynamic rendering

Feature 5: User Profile
Displays user information (email, username, etc.)

Allows editing profile details

Updates stored in Firebase

Feature 6: Theme Details Page
Shows full discussion content

Displays comments and like count

Allows users to interact directly with the post

4. 🖱️ How the User Interacts With the System
Interface
Clean, modern UI built with Angular

Dark theme with light blue highlights

Navigation through Angular Router

Responsive layout for desktop and mobile

Inputs
Text fields for login, registration, and discussion creation

Buttons for liking, commenting, and navigation

Editable profile fields

Outputs
Dynamic lists of discussions

Real‑time comments and likes

User profile information

Top games list with pagination

Feedback
Error messages for invalid forms

Success messages after creating discussions or updating profiles

Loading indicators during data fetches

5. 📂 Project Structure (Simplified)
Code
GamesForum/
│-- src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   ├── user-profile/
│   │   │   ├── new-theme/
│   │   │   ├── theme-details/
│   │   ├── services/
│   │   │   ├── auth.service.ts
│   │   │   ├── theme.service.ts
│   ├── assets/
│   │   ├── images/
│   ├── index.html
│-- package.json
│-- angular.json
│-- README.md
6. 🚀 Summary
GamesForum is a fully functional Angular application that enables users to engage in gaming discussions, share opinions, and explore trending games. With Firebase powering authentication and data storage, the platform provides a smooth and interactive experience for all users. The application supports user‑generated content, real‑time interactions, and personalized profiles, making it a complete community hub for gamers.

<!-- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->

 🕹️ GamesForum

Welcome to GamesForum! This is a dynamic web application where users can create discussions, share reviews, and stay updated on the latest games. The project is built using Angular and Firebase for a seamless and interactive experience.


🚀 FEATURES

User Authentication: Register and log in to access personalized features.

Create Discussions: Start discussions about your favorite games.

Top Games Page: View the top 10 games of the year with pagination.

Comments & Likes: Engage with discussions by commenting and liking posts.

User Profile: View and edit your profile information.

Theme Details Page: Detailed view for each game discussion with comments.



🛠️ TECHNOLOGIES USED

Frontend: Angular 18

Backend: Firebase

Styling: CSS with dark tones and light blue highlights

Icons: Font Awesome

Routing: Angular Router

State Management: Local Storage

📂 PROJECT STRUCTURE

lua
Copy code
GamesForum/

│-- src/

│   │-- app/

│   │   │-- components/

│   │   │   │-- home/

│   │   │   │-- login/

│   │   │   │-- register/

│   │   │   │-- user-profile/

│   │   │   │-- new-theme/

│   │   │   │-- theme-details/

│   │   │-- services/

│   │   │   │-- auth.service.ts

│   │   │   │-- theme.service.ts

│   │-- assets/

│   │   │-- images/

│   │-- index.html

│-- README.md

│-- package.json


⚙️ SETUP INSTRUCTIONS

Clone the Repository:

bash

Copy code

git clone https://github.com/DaniUzunski7/GamesForum.git

cd GamesForum

Install Dependencies:

bash

Copy code

npm install

Run the Project:

bash

Copy code

ng serve

Open in Browser:

Navigate to http://localhost:4200.


🔐 FIREBASE CONFIGURATION

Create a Firebase Project at Firebase Console.

Add your Firebase configuration to src/environments/environment.ts:

typescript

Copy code

export const environment = {
  firebaseConfig: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  },
  production: false
};
Install Firebase:

bash
Copy code
npm install firebase

📝 HOW TO USE THE APPLICATION

Register a New User:

Go to the Register Page and create a new account.

Login:

Use your credentials to log in.

Create a Discussion:

Navigate to "New Discussion" and fill out the form to start a discussion.

View Discussions:

Browse existing discussions and comment on them.

Edit Profile:

Visit the User Profile page to edit your personal information.

🐞 TROUBLESHOOTING

Common Issues:

Angular Forms Not Working: Ensure FormsModule is imported in the respective module.

Firebase Errors: Double-check your Firebase configuration in environment.ts.

📸 Screenshots

Home Page:

Discussion Page:

User Profile:

📜 LICENSE

This project is licensed under the MIT License.

🤝 CONTRIBUTING

Contributions are welcome! Feel free to fork the repository and submit a pull request.

Fork the repository.

Create a new branch: git checkout -b feature-branch.

Make your changes.

Commit your changes: git commit -m "Add new feature".

Push to the branch: git push origin feature-branch.

Submit a pull request.

📧 CONTACTS

Author: Dani Uzunski
GitHub: DaniUzunski7
Email: dani.pleven@icloud.com
