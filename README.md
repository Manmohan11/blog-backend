# Blog Backend

## Setup Instructions

### Prerequisites
- Node.js
- Docker (for PostgreSQL and pgAdmin)

### Installation
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.

### Environment Variables
Create a `.env` file in the root directory and add the following:
```plaintext
DB_USERNAME=username
DB_PASSWORD=password
DB_NAME=DB-Name
DB_HOST=localhost
DB_PORT=5432
```

### Running the Server
- Run `npm run dev` to start the server in development mode.
- The server will run on `http://localhost:3000`.

### Future Enhancements
- Add authentication middleware
- Implement more routes
- Add tests
