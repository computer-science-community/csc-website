# Running the application for the first time

1. Run `npm start`
2. Install the needed VS extentions:
   - ESLint
   - Prettier - Code formatter
3. restart VS Code if needed to enable extentions
4. Paste the following into `settings.json`:
   "eslint.alwaysShowStatus": true,
   "editor.formatOnSave": true,
   "[javascript]": {
   "editor.formatOnSave": false
   },
   "eslint.autoFixOnSave": true,
   "prettier.disableLanguages": [
   "js"
   ]
5. follow `csc-backend` ReadMe to set up and run backend
6. run `npm start`

# Running the application

1. follow `csc-backend` ReadMe to start backend
2. run command: `npm start`
