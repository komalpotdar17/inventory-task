This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Inventory and Order Management System

This project is a simplified inventory and manufacturing unit management system implemented using React with Next.js. It features functionalities for managing orders, items, and inventory, showcasing proficiency in frontend development, array/object manipulation, and user interface design.

## Features

- **Order List Page:**
  - Display a list of orders with details such as ID, customer name, status, and item count.
  - Filter orders by status (Pending, Completed).
  - Sort orders by customer name and item count.
  
- **Order Details Page:**
  - Show detailed information about a specific order, including items in the order, their quantities, and stock availability.
  - Implement a button to mark an order as completed, updating its status accordingly.
  
- **Inventory Management Page:**
  - Display a list of all items with their current stock levels.
  - Filter items by stock availability (In Stock, Out of Stock).
  - Implement functionality to add new items to the inventory, edit existing items, and delete items.
  
- **Styling and UX:**
  - Utilize Tailwind CSS for responsive and user-friendly interface design.
  - Incorporate components like modals, notifications, and loading indicators for enhanced user experience.

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository:**

   git clone <repository-url>
   cd inventory-task

2. **Install Dependencies:**

   npm install

3. **Run the Development Server:**

   npm run dev

Open http://localhost:3000 to view the project in your browser.

## Technologies Used

- **Next.js**: React framework for server-rendered applications.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **JSON**: Data storage and manipulation using JSON files.

## Folder Structure `inventory-task/`

- **pages/**: Next.js page components
  - `index.js`: Main page (Home)
  - **orders/**
    - `[id].js`: Dynamic order details page
    - `index.js`: Orders list page
  - `inventory.js`: Inventory management page
  - ... Other pages as per project requirements
  
- **components/**: React components
  - `OrderItem.js`: Component for rendering individual order items
  - ... Other components used across pages
  
- **data/**: JSON data files (orders.json, items.json, etc.)
  - `orders.json`
  - `items.json`
  
- **styles/**: Global styles (e.g., Tailwind CSS, custom CSS)
  - `globals.css`
  
- **public/**: Static assets (images, fonts, etc.)
  - ...
  
- `README.md`: Project overview, setup instructions, and documentation
- ...
