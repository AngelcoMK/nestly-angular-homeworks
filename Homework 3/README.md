# Homework 3 - Nestly HTTP & API

This homework continues the Nestly Angular application from the previous homework.

The main goal was to replace the hardcoded stay data with real data from the provided NestJS API using Angular HttpClient.

## Features

- Load stays from the backend API
- Display all available stays
- Filter and display Superhost stays
- Load a single stay by ID
- Stay details page
- Loading state while data is loading
- Error message when the API is unavailable
- Not found state for invalid stay IDs
- Favorite stays functionality kept on the client side
- Existing routing and reusable components are preserved

## Angular Concepts Used

- HttpClient
- provideHttpClient()
- Services
- Dependency Injection
- Observables
- subscribe()
- Signals
- API requests
- Error handling
- Route parameters
- Standalone components

## API

The application uses the provided Nestly backend API.

Base API:

http://localhost:3000/api

Stays endpoint:

http://localhost:3000/api/stays

The backend must be running locally for the stay data to load.

## Run the Angular Application

Install dependencies:

npm install

Start the application:

ng serve

Open:

http://localhost:55027/