# Homework 5 - Nestly Signal Store

This homework continues the Nestly Angular application from the previous homeworks.

The main goal was to move the stays list state, loading, search, and Superhost filtering into one NgRx Signal Store.

## Features

- Load stays from the backend API
- Search stays using the backend API
- Filter Superhost stays
- Display loading state
- Display API errors
- Display the total number of stays
- Keep store state when navigating between pages
- Favorite stays functionality preserved
- Existing routing and stay details functionality preserved

## NgRx Signal Store

The application uses one root-level StaysStore.

The store manages:

- stays
- isLoading
- error
- search
- superhostOnly

## Concepts Used

- NgRx Signal Store
- signalStore()
- withState()
- withComputed()
- withMethods()
- withHooks()
- patchState()
- rxMethod()
- computed signals
- Angular Signals
- HttpClient
- RxJS
- Dependency Injection

## API

The application uses the provided Nestly backend API.

Base API:

http://localhost:3000/api

Stays endpoint:

http://localhost:3000/api/stays

The backend must be running locally for stay data to load.

## Run the Application

Install dependencies:

npm install

Start the Angular application:

ng serve