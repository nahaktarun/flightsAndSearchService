# Welcome to Flight Service

## Project Setup

- Clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variable
    - `PORT=<Any specified port>`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

` "development": {
    "username": "root",
    "password": "<Any password>",
    "database": "Flight_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },`