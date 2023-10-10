# Project README

Welcome to our project! This repository contains the source code for an application that focuses on displaying images and managing user interactions. Below is a brief overview of the directory structure and key components of the project.

## Directory Structure

- **pages**: This directory contains the main pages of the application.

  - `index.tsx`: The home page of the application.
  - `favorites.tsx`: Displays images liked by a single user.

- **public**: Assets used throughout the project are stored here.

- **components**: Reusable components used across the project are located here.

  - `Header.tsx`: Component for the application header.
  - `Avatar.tsx`: Component to display user avatars.
  - `PostCard.tsx`: Component representing a post or image card.
  - `index.ts`: Exports of various components for convenient imports.

- **hooks**: Custom hooks for managing application states are placed here. The `context` API is used to provide a centralized state management solution through a single provider.

- **styles**: Common styles are applied in `_App.tsx`.

- **types**: TypeScript type definitions and declarations are organized here to ensure type safety in the codebase.

- **mocks**: Mocked data, simulating database content, is stored here.

- `routes.ts`: An enum is defined here to manage routing logic between the home and favorites pages, providing a unified point for navigation.

## Notable Features

- Utilization of Next.js for static server rendering.
- TypeScript for enhanced type handling in JavaScript code.
- Application-wide styling for consistent UI in `_App.tsx`.
- Custom hooks and context API for efficient state management.
- Mock data in the `mocks` directory to simulate database interactions.
- Centralized routing logic with the `routes.ts` enum.

Feel free to explore the codebase further to understand how different components and functionalities work together to create a seamless user experience. If you have any questions or need assistance, don't hesitate to reach out to our team!

Thank you for checking out our project!
