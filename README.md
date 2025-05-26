# Shopping List

## What is Shopping List?

This application enables users to manage a shopping list by adding items along with desired quantities. Users can edit or remove items, and all input is validated during both item creation and editing to ensure data integrity. Initially the app generates 5-10 random items to the shopping list, these items are named `Item <id_of_item>`

The application is developed using React.js, TypeScript, and Redux.js. The user interface is built with Shadcn-UI and styled using Tailwind CSS.

Unit tests are implemented using Vitest, a fast and lightweight testing framework that is compatible with Jest syntax and designed to work seamlessly with Vite-based applications.

Follow the instructions below to quickly set up the repository or run unit tests.

### Key Features:

-   **Item Management**: Add, edit, and delete shopping list items with quantity tracking.
-   **Input Validation**: Ensures all user inputs are valid when adding or editing items.
-   **State Management with Redux**: Efficient and predictable state handling using Redux.js.
-   **Modern UI**: Built with Shadcn-UI components for a consistent and clean design.
-   **Tailwind CSS Styling**: Utility-first styling for rapid and responsive UI development.
-   **Type-Safe Development**: Implemented with TypeScript to reduce bugs and improve code quality.
-   **Component-Based Architecture**: Reusable and modular React components for maintainability.
-   **Quick Setup and Testing**: Includes setup instructions and unit testing support for development ease.

---

## How to Set Up the Project Locally

### Prerequisites

-   **Node.js** version 18.x, 20.x, or 22.x+
-   **npm** version 9 or higher _(bundled with Node.js)_
-   **Git** (to clone the repository)

### Cloning the repository

1. Clone the repository into a new directory.

    ```shell
    git clone https://github.com/0mppula/leaddesk-shopping-list.git
    ```

2. Install the required dependencies

    ```shell
    npm i
    ```

### Start the app

```shell
npm run dev
```

---

## Available commands

Running commands with npm `npm run [command]`

| command | description                                                                                      |
| :------ | :----------------------------------------------------------------------------------------------- |
| `dev`   | Starts a development instance of the app                                                         |
| `lint`  | Runs ESLint to check for errors and warnings. Errors will fail the build, but warnings will not. |
| `test`  | Runs Vitest (compatible with Jest) to execute unit tests.                                        |

---

## Technologies

-   **React.js**: A declarative, component-based JavaScript library for building user interfaces.
-   **TypeScript**: A statically typed superset of JavaScript that enhances code quality and developer experience.
-   **Redux Toolkit**: A modern and efficient way to manage application state in Redux.
-   **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs directly in your markup.
-   **Shadcn UI**: A collection of accessible and customizable UI components built with Radix and Tailwind CSS.
-   **React Hook Form**: A performant, flexible library for handling forms and validation in React.
-   **Zod**: TypeScript-first schema declaration and validation library used for form validation.
-   **Vite**: A fast build tool and development server that optimizes performance and DX.
-   **Vitest**: A fast testing framework designed for Vite, compatible with Jest syntax and easy to set up for unit testing.

### UI

-   **UI Library**: shadcn-ui
-   **UI Styling**: tailwindcss (v4.1.7)
-   **Icons**: lucide-react (v0.511.0)
-   **CSS Utility**: clsx (v2.1.1)
-   **Class Variance Management**: class-variance-authority (v0.7.1)

---

## Why These Technologies

This project was designed with simplicity, scalability, and modern best practices in mind. Here's why these tools and libraries were chosen:

-   React.js: Enables a component-based architecture, making it easy to build, reuse, and manage UI components efficiently.

-   TypeScript: Provides strong typing and tooling, reducing bugs during development and enhancing IDE support.

-   Redux Toolkit: Simplifies Redux boilerplate and offers best-practice patterns out of the box for predictable state management.

-   Tailwind CSS: Promotes rapid UI development using utility classes, reducing the need for custom CSS and improving consistency.

-   Shadcn UI: Offers accessible and well-designed UI components that integrate seamlessly with Tailwind and Radix primitives.

-   React Hook Form + Zod: Combines performant form handling with schema-based validation for better UX and maintainability.

-   Vite: Delivers fast development startup and optimized builds, improving both dev speed and production performance.

-   clsx & class-variance-authority: Help manage conditional class names and variant styling patterns cleanly and declaratively.

These tools were selected to create a modern and maintainable frontend experience while keeping development velocity high and code complexity low.

---

## License

This project is licensed under the MIT License.

<div>
    <a href="https://www.omarkraidie.com/projects">
        <img src="https://img.shields.io/badge/✨%20portfolio-1b1b1b?style=for-the-badge" />
    </a>
    <a href="https://www.linkedin.com/in/omarkraidie/">
        <img src="https://img.shields.io/badge/LinkedIn-%230073b1?style=for-the-badge&logo=linkedin&logoColor=white" />
    </a>
</div>
