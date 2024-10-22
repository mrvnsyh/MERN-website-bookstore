## Bookstore Inventory Management System

This web application helps bookstore owners efficiently manage their inventory by allowing users to perform CRUD operations on book data, with user authentication through Firebase, including login options via Google and Facebook.

## Features

- **CRUD Operations:**
  - Add, view, update, and delete book records.
  - Manage book details such as title, author name, image URL, PDF link, description, and category.

- **User Authentication:**
  - Secure authentication using Firebase.
  - Login options via Google and Facebook for easy access.

- **Responsive Design:**
  - Built with **TailwindCSS** for a clean and modern user interface that works on all devices.

- **Smooth Navigation:**
  - Integrated **Swiper.js** for a seamless browsing experience through book categories and featured items.

## Technology Stack

- **Frontend:**
  - **ReactJS**: JavaScript library for building user interfaces.
  - **TailwindCSS**: Utility-first CSS framework for rapid UI development.
  - **Swiper.js**: For implementing responsive sliders.
  - **Vite.js**: Build tool for fast development and hot reloading.
  - **PostCSS**: Tool for transforming CSS with JavaScript plugins.
  - **ESLint**: For identifying and reporting on patterns in JavaScript code.

- **Backend:**
  - **Express.js**: Web framework for Node.js to build APIs.
  - **MongoDB**: NoSQL database for storing book data.
  - **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
  - **Nodemon**: For automatically restarting the server during development.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/bookstore-inventory.git

2. Navigate to the project directory:

    ```bash   
    cd bookstore-inventory

3. Install dependencies:
   
    ```bash 
    npm install

4. Set up environment variables: Create a .env file in the root directory and add your Firebase credentials and MongoDB connection string.

5. Run the application:

  ```bash
  npm run dev

