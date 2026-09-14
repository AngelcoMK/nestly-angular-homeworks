# Nestly - Homework 2

## About the project

This is the second homework for the Angular Academy.

In this homework, I extended the Nestly project from Homework 1 by adding multiple pages and Angular routing.

The application now has a Home page, a Stays page, stay details, and a Not Found page.

## Features

* Home page
* Stays page with available stays
* Stay details page
* Dynamic route for stay ID
* Not Found page
* Wildcard route for invalid URLs
* Navigation between pages
* Active navigation link
* Redirect from `/` to `/home`
* Lazy loading with `loadComponent`
* Reused components from Homework 1

## Angular concepts used

* Angular Router
* Routes
* `RouterOutlet`
* `RouterLink`
* `RouterLinkActive`
* Route parameters
* Lazy loading with `loadComponent`
* Wildcard routes
* Redirect routes
* Standalone components
* Component inputs and outputs
* Custom pipe
* Attribute directive
* Content projection

## Routes

| Route        | Description                       |
| ------------ | --------------------------------- |
| `/`          | Redirects to Home                 |
| `/home`      | Home page                         |
| `/stays`     | Shows all available stays         |
| `/stays/:id` | Shows details for a selected stay |
| `**`         | Not Found page                    |

## Stay details

The stay details page uses the ID from the URL.

For example:

```text
/stays/1
```

The application finds the stay with that ID and displays its information.

If the ID does not exist, for example:

```text
/stays/999
```

the application displays a "Stay not found" message.

## Not Found page

Invalid URLs are handled with a wildcard route.

For example:

```text
/anything
```

will display the Not Found page.

## Running the project

Install dependencies:

```bash
npm install
```

Start the Angular development server:

```bash
npm start
```

Then open the local address shown in the terminal.

## Homework goal

The main goal of this homework was to extend the first Nestly project with Angular routing and multiple pages while reusing the components and features created in Homework 1.
