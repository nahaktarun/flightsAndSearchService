# Welcome to Flight Service

## Project Setup

- Clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variable
  - `PORT=<Any specified port>`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```{"development": {
    "username": "root",
    "password": "<Any password>",
    "database": "Flight_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }}
```

- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequalize db:create`

- Then execute `npx sequelize db:migrate`

## DB Design

- A flight belongs to an airplane but one airplane can be used in multiple flights
- A City has many airports but one airport belongs to a city
- One airport can have many flights, but flight belongs to one airport.

![DB Design](./docs/Db%20design%20flight.jpg "DB design")


## API calls