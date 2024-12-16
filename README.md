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
