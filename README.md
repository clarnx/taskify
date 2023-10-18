# Taskify

A minimalistic todo application built with ReactJS using Create React App.

![Demo](demo.gif)

## Features

- Add task, preview more task details, copy task details to clipboard, and delete tasks.
- Mark tasks as completed or Mark tasks as in-progress.
- Add task category, and delete task category.
- Search or filter tasks (All, Active, Completed, Task Name, Description, Category, Priority, Status).
- Basic task statistics.
- Responsive design.
- Light and Dark Mode.

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

- Add a new task by clicking on the floating action button on the bottom right.
- View more task details by clicking on the arrow in box icon on the task card.
- Mark a task as completed by clicking the green check icon on task card.
- Copy task to clipboard by clicking on the clipboard icon on task card.
- Delete a task by clicking on the delete icon on task card.
- Filter tasks by using the search input based on a search query.
- View all categories by navigating to the category route by clicking on Category link in the navbar.
- On the category page add a category by typing text in input and then hit enter.
- Delete a category by clicking on the delete icon on task card.

### Acknowledgments

This project was bootstrapped with Create React App.
UI was designed using Boostrap 5 customized with SCSS and React Bootstrap.
State management used was Zustand.
