# Node.js MySQL Flight Booking System - Microservice Architecture

This project is a Flight Booking System built using Node.js and MySQL, following a microservice architecture. It consists of multiple microservices such as authentication, API gateway, booking service, flight and search service, and reminder service. The communication between the microservices is facilitated by RabbitMQ, which acts as the message queue.

## Microservices

1. [Authentication Service](https://github.com/nahaktarun/AuthService)

   - Responsible for user authentication and authorization.
   - Manages user accounts, login, and registration.
   - Generates and verifies JSON Web Tokens (JWT) for secure API access.

2. [API Gateway](https://github.com/nahaktarun/API_Gateway)

   - Serves as the entry point for external requests to the system.
   - Provides a unified API interface for clients to communicate with various microservices.
   - Performs request validation, rate limiting, and routing to the appropriate microservice.

3. [Booking Service](https://github.com/nahaktarun/BookingService)

   - Handles flight bookings and related operations.
   - Allows users to search for available flights, select seats, and make reservations.
   - Manages booking details and communicates with the flight and search service.

4. [Flight and Search Service](https://github.com/nahaktarun/flightsAndSearchService)

   - Manages flight information, including available seats, prices, and schedules.
   - Provides search functionality for users to find flights based on criteria such as origin, destination, and date.
   - Sends notifications to the booking service about flight availability and updates.

5. [Reminder Service](https://github.com/nahaktarun/ReminderService)

   - Sends reminders and notifications to users about upcoming flights, check-in details, and booking updates.
   - Integrates with external notification systems (e.g., email, SMS) to deliver messages.

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

# Flight and Search Service

The Flight and Search Service manages flight information and provides flight search functionality in the Flight Booking System.

## API Endpoints

- **Get all flights**

  ```
  GET /api/flights
  ```

  Retrieves a list of all available flights.

  Response:

  ```json
  [
    {
      "flightId": "12345",
      "origin": "New York",
      "destination": "London",
      "departureTime": "2023-07-10T08:00:00Z",
      "arrivalTime": "2023-07-10T14:00:00Z",
      "price": 500,
      "availableSeats": 150
    },
    {
      "flightId": "67890",
      "origin": "London",
      "destination": "Paris",
      "departureTime": "2023-07-11T10:00:00Z",
      "arrivalTime": "2023-07-11T12:00:00Z",
      "price": 200,
      "availableSeats": 100
    }
  ]
  ```

- **Get flight details by flight ID**

  ```
  GET /api/flights/:flightId
  ```

  Retrieves details of a specific flight by flight ID.

  Response:

  ```json
  {
    "flightId": "12345",
    "origin": "New York",
    "destination": "London",
    "departureTime": "2023-07-10T08:00:00Z",
    "arrivalTime": "2023-07-10T14:00:00Z",
    "price": 500,
    "availableSeats": 150
  }
  ```

- **Search for flights**

  ```
  POST /api/flights/search
  ```

  Searches for available flights based on criteria.

  Request Body:

  ```json
  {
    "origin": "New York",
    "destination": "London",
    "date": "2023-07-10"
  }
  ```

  Response:

  ```json
  [
    {
      "flightId": "12345",
      "origin": "New York",
      "destination": "London",
      "departureTime": "2023-07-10T08:00:00Z",
      "arrivalTime": "2023-07-10T14:00:00Z",
      "price": 500,
      "availableSeats": 150
    },
    {
      "flightId": "54321",
      "origin": "New York",
      "destination": "London",
      "departureTime": "2023-07-10T12:00:00Z",
      "arrivalTime": "2023-07-10T18:00:00Z",
      "price": 450,
      "availableSeats": 120
    }
  ]
  ```

## Database

The Flight and Search Service interacts with the MySQL database to store and retrieve flight information. The necessary database tables and their structure can be found in the `database` folder.

Ensure that you have set up the database connection details correctly in the configuration file of the Flight and Search Service.

## RabbitMQ Integration

The Flight and Search Service can integrate with RabbitMQ, the message queue system, to send notifications and updates to other microservices, such as the Booking Service. This allows real-time communication and synchronization between different components of the Flight Booking System.

Make sure to configure the RabbitMQ connection details in the configuration file of the Flight and Search Service if integration with RabbitMQ is required.

## Setup and Configuration

To set up and run the Flight and Search Service, follow these steps:

1. Install Node.js and MySQL if they are not already installed.

2. Clone the repository:

   ```
   git clone https://github.com/your-username/flight-search-service.git
   ```

3. Install the dependencies:

   ```
   cd flight-search-service
   npm install
   ```

4. Set up the MySQL database by creating the required tables. Refer to the SQL scripts in the `database` folder for table creation.

5. Configure the database connection details in the configuration file (`config.js`) of the Flight and Search Service.

6. Configure the RabbitMQ connection details in the configuration file (`config.js`) of the Flight and Search Service if integration with RabbitMQ is required.

7. Start the Flight and Search Service:

   ```
   npm start
   ```

The Flight and Search Service should now be running and ready to handle flight information retrieval and search operations.

## Contributing

Contributions to the Flight and Search Service are welcome. If you find any issues or want to add new features, please open an issue or submit a pull request. Ensure that your code follows the established coding style and is well-documented.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

We would like to acknowledge the following resources and libraries that contributed to the development of the Flight and Search Service:

- Node.js: https://nodejs.org/
- MySQL: https://www.mysql.com/
- RabbitMQ: https://www.rabbitmq.com/
- Other dependencies mentioned in the `package.json` file.
