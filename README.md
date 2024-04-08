<<<<<<< HEAD
# URL Shortener Service

A simple URL Shortener service built using Node.js, Express, and MongoDB. This service allows users to shorten long URLs for easier sharing and redirects users to the original URLs when accessing the shortened versions.

## Getting Started

### Prerequisites

- Node.js (latest stable version recommended)
- npm (comes with Node.js)
- MongoDB (local installation or MongoDB Atlas account)

### Installation

1. **Clone the Repository**

   Clone this repository to your local machine using:

git clone https://github.com/reecen30/UrlShortner/tree/PR_UrlShortener

cd UrlShortner

2. **Install Dependencies**

Inside the project directory, install the required npm packages:
npm install

3. **Set Up Environment Variables**

Create a `.env` file in the root directory and add the following variables:
PORT=5000
MONGODB_URI=<your-mongodb-uri>

Replace `<your-mongodb-uri>` with your MongoDB connection URI.
Replace `<your-mongodb-uri>` with your choice of PORT.

### Running the Application

- **Development Mode**

Run the application in development mode with:
npm run dev

- **Production Mode**

For production, start the application with:
npm start

## API Usage

### Endpoints

- **POST /shorten**: Shorten a URL.

- **Request Body Example**:

  ```json
  {
    "originalUrl": "https://www.google.com"
  }
  ```

- **Response Example**:

  ```json
  {
    "originalUrl": "https://www.google.com",
    "shortUrl": "abc123"
  }
  ```

- **GET /:shortUrl**: Redirect to the original URL.

Access the shortened URL in a browser or with a tool like curl/postman to be redirected to the original URL.

### Error Handling

- **404 Not Found**: Returned if the shortened URL does not exist.
- **400 Bad Request**: Returned if the URL provided for shortening is invalid.

## Running Tests

Run the automated tests for this project with:
npm test
=======
# UrlShortner
UrlShortner
>>>>>>> 57f1d53844035405cedec244e555097693a554fc
