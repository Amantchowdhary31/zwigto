                                                                  Zwigito

# Order Management Web Application

## Description
This is a full-stack web application built using Express, MongoDB, React, Vite, and JavaScript. The application allows users to place orders, track their status, and make payments. On the admin side, users can manage the inventory by adding new items to the product list.

## Features
- **User Side**: 
  - Place orders and track order status.
  - Secure payment processing.
- **Admin Side**:
  - Add and manage product listings.
  - View and manage orders.

## Installation

### Prerequisites
- Node.js
- MongoDB

### Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com//project-name.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd project-name
    ```

3. **Install server-side dependencies:**
    ```bash
    cd server
    npm install
    ```

4. **Install client-side dependencies:**
    ```bash
    cd ../client
    npm install
    ```

5. **Set up environment variables:**
   - Create a `.env` file in the `server` directory and add the necessary environment variables (e.g., MongoDB URI, payment gateway keys).

6. **Start the server:**
    ```bash
    cd ../server
    npm start
    ```
   The server will run on `http://localhost:4000`.

7. **Start the client:**
    ```bash
    cd ../client
    npm run dev
    ```
   The client will run on `http://localhost:3000`.

## Usage
- Open your browser and navigate to `http://localhost:3000` to access the user interface.
- Admin functionality is accessible through the `/admin` route.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project's coding style and is well-documented.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

## Contact
For any inquiries, please contact [your-email@example.com](amantch2@gmail.com).

## Acknowledgements
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
