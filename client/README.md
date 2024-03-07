# mRooms Client

This directory contains the client-side code for the mRooms project, built using React with Vite. Below is the directory structure and information about various components and screens.

## Project Structure

```markdown
client/
|-- public/
|   |-- index.html
|   |-- favicon.ico
|-- src/
|   |-- components/
|   |   |-- ErrorComponent.js
|   |   |-- LoaderComponent.js
|   |   |-- NavbarComponent.js
|   |   |-- RoomComponent.js
|   |   |-- SuccessComponent.js
|   |-- screens/
|   |   |-- AdminScreen.js
|   |   |-- BookingScreen.js
|   |   |-- HomeScreen.js
|   |   |-- LandingScreen.js
|   |   |-- LoginScreen.js
|   |   |-- ProfileScreen.js
|   |   |-- RegistrationScreen.js
|   |-- App.js
|   |-- index.js
|   |-- ...
|-- .gitignore
|-- package.json
|-- vite.config.js
|-- ...
```

- **public/**: Contains static assets and the main HTML file.
- **src/**: Contains the React application source code.
  - **components/**: Reusable UI components.
  - **screens/**: Different screens representing various parts of the application.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **package.json**: Dependency configuration and scripts for the client.
- **vite.config.js**: Configuration file for Vite.

## Available Scripts

In the project directory, you can run the following scripts:

- **Development server:**

  ```bash
  npm run dev
  ```

- **Build for production:**

  ```bash
  npm run build
  ```

- **Linting:**

  ```bash
  npm run lint
  ```

- **Preview production build:**

  ```bash
  npm run preview
  ```

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **React Router DOM**: Declarative routing for React.
- **Vite**: Next-generation frontend tooling for React development.
- **Ant Design (antd)**: A popular React UI library.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **Bootstrap**: Frontend component library.
- **Moment**: Parse, validate, manipulate, and display dates.
- **React Bootstrap**: Bootstrap components built with React.
- **React Spinners**: Loading spinners for React.
- **React Stripe Checkout**: React components for Stripe Checkout.

## Development Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mRooms.git
   ```

2. Navigate to the client directory:

   ```bash
   cd client
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

Access the application at [http://localhost:3000](http://localhost:3000) in your web browser.

Feel free to explore and customize the code to fit your specific requirements.

## Deployment

The application has been deployed on Vercel and can be accessed at [mrooms-ashy.vercel.app](https://mrooms-ashy.vercel.app).