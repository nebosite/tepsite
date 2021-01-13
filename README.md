# Tepsite

This is a demo of a simple React/Typescript web site.

## How do dev locally

* Install:

  * node v12 or later
  * git
  * vscode (or your favorite code editor)

* Clone the repo: `git clone https://github.com/nebosite/tepsite.git`

* Setup the project:

  ```
  cd tepsite
  npm install
  ```

* Run the site locally:  `npm start`

## Directory Structure

* public - raw files go here
  * favicon.ico - custom site icon
* src - all the code is under this folder.   
  * <u>index.tsx</u> - this file is the starting point for the code
  * <u>AppRoot.tsx</u> - this file sets up the menu structure
  * components - definitions for custom components
  * models - If we get fancy and need to keep user state, keep it here
  * pages - Pages are components where menu items land

## Deploy the Site

Easy, just run `npm run deploy` and whatever is on your machine will show up on the public site. 