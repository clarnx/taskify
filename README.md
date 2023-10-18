# Taskify

A minimalistic todo application built with ReactJS using Create React App.

![Demo](demo.gif)

## Features

- Add task, preview more task details, copy task details to clipboard, and delete tasks
- Mark tasks as completed or Mark tasks as in-progress
- Add task category, and delete task category
- Search tasks (All, Active, Completed, Task Name, Description, Category, Priority, Status)
- Basic task statistics,
- Responsive design

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your system.

### Installing

1. Clone the repository to your local machine:

```bash
git clone https://github.com/clarnx/taskify.git
```

2. Navigate to the project directory:

```bash
cd taskify
```

3. Install the required dependencies:

```bash
npm install
```

### Running the Application

To start the application, use the following command:

```bash
npm start
```

This will run the app in development mode.
Open http://localhost:3000 to view it in your browser.

### Building for Production

To build the app for production, use:

```bash
npm run build
```

This will create an optimized build in the build directory.

### Usage

Add a new task by typing in the input field and pressing Enter.
Edit a task by clicking on it.
Mark a task as completed by clicking the checkbox.
Delete a task by clicking the delete button.
Filter tasks by clicking on the buttons at the bottom (All, Active, Completed).
Clear completed tasks by clicking the "Clear Completed" button.
Contributing
Feel free to open issues or submit pull requests for any improvements or bug fixes.

### Acknowledgments

This project was bootstrapped with Create React App.
UI was designed using Boostrap 5 customized with SCSS and React Bootstrap
State management used was Zustand
