# EduQuest

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The EduQuest is a web application designed to provide users with information about various competitive exams. The portal features a user-friendly interface where users can browse through recommended and popular exams, and get detailed information about each exam.

## Features

- **Homepage**: Displays recommended and popular exams.
- **Info Page**: Provides detailed information about each exam.
- **404 Page**: Displays an error message for non-existent routes.
- **Navbar**: Persistent navigation across pages.
- **Footer**: Persistent footer with additional information.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Routing**: React Router
- **State Management**: Local state within React components

## Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/rajanarahul93/EduQuest.git
   ```

2. **Navigate to the project directory:**

   ```
   cd EduQuest
   ```

3. **Install dependencies:**

   ```
   npm install
   ```

4. **Start the development server:**

   ```
   npm start
   ```

5. **Open your browser and go to:**

   ```
   http://localhost:3000
   ```

## Usage

- **Homepage**: Lists recommended exams with an option to view all exams.
- **Info Page**: Detailed information about each exam.
- **404 Page**: Displays a message when a non-existent route is accessed.

## Folder Structure

```
EduQuest/
├── public/
│   ├── index.html
│   └── Images
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Foot.js
│   │   └── Card.js
|   |   └──InterestCard.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── InfoPage.js
│   │   └── Error.js
│   |
│   └── recent_exams.js
│   └── recommend_exams.js
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── app.css

```

## Components

### Navbar

Persistent navigation bar across all pages.

### Foot

Persistent footer across all pages.

### Card

Component to display individual exam details.


### recent_exams.js

Contains an array of objects representing recent exams.

### recommend_exams.js

Contains an array of objects representing recommended exams.

## Contributing

1. **Fork the repository.**
2. **Create a new branch:**

   ```sh
   git checkout -b feature-branch
   ```

3. **Make your changes and commit them:**

   ```sh
   git commit -m 'Add some feature'
   ```

4. **Push to the branch:**

   ```sh
   git push origin feature-branch
   ```

5. **Submit a pull request.**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
