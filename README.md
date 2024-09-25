

**Project** is a [Next.js](https://nextjs.org/) application built using TypeScript, and implements various rendering methods such as Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR), but with next-intl it is problem to generate Static Site Generation (SSG) pages separetly so it will generate now all pages in Static Site Generation (SSG).
Problem is not solved because of less of time, but you can see functionality in each page.
There are also many omissions and incomplete parts, but I think it's enough for chechikng skills before interview.

## Demo
[Project](https://nextjs-14-ten-smoky.vercel.app/)

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)

## Features

- Server-Side Rendering (SSR)
- Static Site Generation (SSG)
- Incremental Static Regeneration (ISR)
- TypeScript for static typing
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- [React Query](https://react-query.tanstack.com/) for data fetching and caching
- Multilingual support with i18n
- Unit testing with Jest and React Testing Library

## Technologies

- **Next.js** (v14)
- **React** (v18)
- **TypeScript**
- **Redux Toolkit**
- **React Query**
- **SASS/CSS Modules**
- **Jest** for unit testing

## Available Scripts

- **`dev`**: Runs the app in development mode.
- **`build`**: Builds the app for production.
- **`start`**: Starts the production server.
- **`lint`**: Runs ESLint for code linting.
- **`test`**: Runs Jest tests.

## Environment Variables

To run this project, you'll need to set up the following environment variables in a `.env.local` file:

```bash
NEXT_PUBLIC_API_URL=https://jsonplaceholder.typicode.com
