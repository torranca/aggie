
# AGGIE: Personal Teaching Assistant

AGGIE is a friendly and professional teaching assistant designed to help educators in elementary schools. It offers assistance in numeracy, literacy, and various topics, tailored to different age levels and types of activities.

## Getting Started

These instructions will help you set up AGGIE on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm (comes installed with Node.js)

### Installation

Follow these steps to get AGGIE up and running:

1. Clone the repository:
   ```sh
   git clone https://github.com/torranca/aggie.git
   cd aggie
   ```

2. Install the necessary packages:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

   This will open AGGIE in your default web browser. If it doesn't open automatically, visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

The main parts of the AGGIE application are organized as follows:

- `public/`: Contains the HTML template and other public assets.
- `src/`: Contains the React components and styles.
  - `App.js`: The main React component.
  - `MainScreen.js`: Displays the main screen with options for Numeracy, Literacy, and Topic.
  - `ActivityScreen.js`: Displays activities or resources based on the selected option.
  - `index.js`: The entry point for the React app.
  - `index.css`: The stylesheet where Tailwind CSS is imported.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.

## Authors

- **Alan Torrance** - *Initial work* - [Torranca](https://github.com/torranca)


