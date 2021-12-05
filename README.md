# Save-Note --ReactJS 17.0.2

- This application allows user to save important notes in their browser's storage.
- Each note has its own properties like pen color and background color that can be customized.
- Notes will be saved until you delete them or **clear browser data**.
- Check it out: [Save Note](https://notes-bd1e0.web.app)
## Project Structure

```
Save-Note
    |
    +---node_modules    <-- all the libraries and dependencies that you install using the command "npm install"
    |
    +---src
    |   |
    |   +---Components  <-- All components used are listed here
    |   |   +---Container.jsx   <-- Container component for all notes
    |   |   +---Main.jsx    <-- Parent component for container component
    |   |   +---Notes.jsx   <-- Note component contains individual note info and functions
    |   |
    |   +---styles  <-- Contains styled components
    |   |   +---Note.styled.js  <-- Extended Material UI card component for customizations
    |   |
    |   +--Utils    <-- Other utilities
    |   |   +---Colors.js   <-- Config file for background/foreground colors
    |   |
    |   +--index.js <-- Rendering file
    |
    +---.gitignore <-- ignore few files/folders
    |
    +---package.json    <--- contains all the npm dependencies of our application
```

## Getting Started

Clone the application using the following command:

```
git clone https://github.com/VnyK-vhr/Save-Note.git
```

## Setup
1. Move into the root directory i.e **Save-Note** and install the dependencies with the following command: 
```
npm install
```

2. Start the server with the following command: 
```
npm start
```