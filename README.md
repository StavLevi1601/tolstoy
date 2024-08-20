# Full-Stack Metadata Fetcher

This is a simple full-stack application that allows users to input a list of URLs, fetch metadata (title, description, and an image) for each URL, and display the results on the front-end.

## Technologies Used

- **Front-End:**
  - **React**: A JavaScript library for building user interfaces.
  - **Vite**: A fast build tool and development server for modern web projects.
  - **JavaScript**: The programming language used for both client-side and server-side development in this project.
  - **Styled Components**: For styling React components using a CSS-in-JS approach.
- **Back-End:**
  - **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
  - **Express**: Fast, unopinionated, minimalist web framework for Node.js.
  - **Open Graph Scraper (ogs)**: A library to scrape Open Graph metadata from URLs.
- **Testing:**
  - **Playwright**: End-to-end testing framework to ensure the application works as expected.

## Features

- Users can input at least 3 URLs.
- Fetches metadata (title, description, image) for each URL.
- Displays metadata in a visually appealing card format.
- Handles errors gracefully, displaying error messages for invalid URLs.
- Implements rate limiting on the server to handle up to 5 requests per second.
- Secured against common web vulnerabilities using `helmet` and other best practices.

## Installation and Setup

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or higher)
- pnpm

### Clone the Repository

## Install Dependencies:

- git clone https://github.com/yourusername/metadata-fetcher.git
- cd metadata-fetcher

## Client

- cd client
- pnpm install

## Server

- cd server
- pnpm install

## Start the Backend Server:

cd server
pnpm run dev
This will start the server on http://localhost:3000.

Start the Frontend Development Server:

cd client
pnpm run dev
Visit http://localhost:5173 in your browser to access the application.

Building the Application

To create a production build of the frontend:

## Running Tests

To run the test suite:

- cd client
  -pnpm run playwright test

```bash


```
# tolstoy
