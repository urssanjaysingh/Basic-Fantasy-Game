## Live Demo

[Live Demo of the Application](https://basic-fantasy-game-5vnj.onrender.com/)

## Project Overview

This project is a fantasy team management game where users can create and manage their teams by selecting players. Built with the MERN stack, it includes a Node.js and Express.js backend, a MongoDB database, and a React frontend.

## Approach

### Backend Development

1. **Models**:

    - **Player Model**: Defined using Mongoose with fields for `name`, `points`, and `position`. This model is used to store player information.
    - **Team Model**: Also defined with Mongoose, featuring a `name` and an array of player references (ObjectId). This allows each team to be associated with multiple players.

2. **API Endpoints**:

    - **POST /players**: Adds a new player. Validates input to ensure all fields are provided.
    - **GET /players**: Retrieves all players. Returns an error if no players are found.
    - **POST /teams**: Creates a new team. Validates the team name, ensures players are provided as an array, and checks for a maximum of 11 players.
    - **GET /teams/:id**: Retrieves a specific team by its ID, populating the player details.

3. **Error Handling**:
    - Implemented custom error handling using a `CustomError` class to manage different error scenarios effectively.

### Frontend Development

1. **Components**:

    - **PlayersList**: Fetches and displays all players in a table format. It handles loading states and displays success or error messages using toast notifications.
    - **TeamForm**: Provides a form for users to create a team. Users can enter a team name and select players from a list. It handles displaying all players correctly and includes validations for input.
    - **TeamDisplay**: Retrieves and displays a specific team by ID, showing the team's name, player details, and total points.

2. **State Management**:

    - Used React hooks (useState and useEffect) to manage local component state, including loading states and form data.

3. **User Interface**:

    - Designed to be clean and responsive, ensuring a good user experience across various devices.
    - Implemented toast notifications to provide immediate feedback on actions and errors.

4. **Error Handling**:
    - Incorporated error handling in API requests to ensure users receive feedback if something goes wrong.

## Challenge Faced

-   **Displaying Players in TeamForm**:
    -   The main challenge was ensuring that all players were displayed correctly in the `TeamForm` component. This involved fetching the player data, managing the state for selected players, and ensuring the UI updated appropriately when players were selected or deselected. Careful attention was required to manage the checkbox states and handle the form submission without errors.
