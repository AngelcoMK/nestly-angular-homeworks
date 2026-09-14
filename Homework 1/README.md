# Nestly - Homework 1

## About the project

Nestly is a simple Angular application for displaying available stays.

This project was created as the first homework for the Angular Academy. The goal was to practice the basic Angular concepts by building a small application with reusable components and dynamic data.

## Features

- Display a list of available stays
- Stay cards with images and information
- Stay title and location
- Price per night
- Rating and number of guests
- Superhost badge
- Favorite button
- Reusable components
- Custom pipe for shortening descriptions
- Custom directive for highlighting stay cards

## Angular concepts used

- Standalone components
- Component inputs
- Component outputs
- Signals
- `@for` and `@if` control flow
- Property binding
- Event binding
- Attribute binding
- Custom pipes
- Attribute directives
- Content projection
- Angular `CurrencyPipe`

## Project structure

The main parts of the application are:

### Stay model

The `Stay` interface defines the structure of a stay.

Each stay contains information such as:

- `id`
- `title`
- `location`
- `price`
- `rating`
- `imageUrl`
- `guests`
- `superhost`
- `description`

### Stay data

The application uses a local list of stays stored in the project.

This data is used to display the stay cards on the page.

### Stay Card component

The `StayCardComponent` is a reusable component used to display one stay.

It receives a stay through an input and emits an event when the favorite button is clicked.

### Badge component

The `BadgeComponent` is a small reusable component used for displaying the `SUPERHOST` badge.

It also uses content projection so that the text can be provided from the parent component.

### Truncate pipe

The custom `TruncatePipe` is used to shorten long descriptions so that the cards stay compact.

### Highlight card directive

The custom `HighlightCardDirective` is used to add a visual highlight effect to the stay cards.

## Running the project

Install the dependencies:

```bash
npm install
