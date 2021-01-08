# Running the application for the first time

1. Run `npm install`
2. Install the needed VS extentions:
   - ESLint
   - Prettier - Code formatter
3. Paste the following into `settings.json`:
   "eslint.alwaysShowStatus": true,
   "editor.formatOnSave": true,
   "[javascript]": {
   "editor.formatOnSave": false
   },
   "eslint.autoFixOnSave": true,
   "prettier.disableLanguages": [
   "js"
   ]
4. Restart VS Code if needed to enable extentions
5. Follow `csc-backend` ReadMe to set up and run backend
6. Run `npm start`

# Running the application

1. Follow `csc-backend` ReadMe to start backend
2. Run command: `npm start`
