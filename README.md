  <h3 align="center">City Weather - Server</h3>
    <p align="center">
<a href="https://github.com/PhilipBDev/MERN-Weather-App-CLIENT">View Client Repository</a>
</p>

<p>
Due to the server running on a free tier of Heroku, please allow roughly 60 seconds for the website to display properly. After about a minute, refresh the page and the navbar should be displayed at the top of the page.
</p>

  <p align="center">
    <br />
    <a href="https://city-weather-app-1.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/PhilipBDev/MERN-Weather-App-SERVER/issues">Report Bug</a>
    ·
    <a href="https://github.com/PhilipBDev/MERN-Weather-App-SERVER/issues">Request Feature</a>
    </p>

<p align="center">
  <a href="https://city-weather-app-1.netlify.app/">
    <img src="images/preview.png">
  </a>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#resources">Resources</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

A simple weather application using the MERN stack and OpenWeatherMap API. Makes use of React Context, Fetch, Axios, and JWT to create a functional user registration and log in system that will immediately display the weather for your city upon logging in.

Learning my way around React and React Hooks was the most challenging part of this project. The file structure is a bit messy since I kept implementing new concepts I've learned. I couldn't decide between using a custom React hook for fetch or to use Axios, so I used both for different reasons, though in the future Axios seems to be the way to go for the time being.

Another issue was having the user's city show up after logging in, through I solved this with React Context and a simple page refresh. Although simple, countless hours were spent trying to understand what React has to offer.

### Built With

- [React](https://reactjs.org/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Styled-Components](https://styled-components.com/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Get a free API Key at [Current Weather Data](https://openweathermap.org/api)
2. Clone the repo
   ```sh
   git clone https://github.com/PhilipBDev/MERN-Weather-App-SERVER.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create an ENV file with the following attributes using your own MongoDB connection string and JWT Secret Key:
   ```sh
   MDB_CONNECT_STRING=
   JWT_SECRET=
   ```

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/PhilipBDev/MERN-Weather-App-SERVER/issues) for a list of proposed features (and known issues).

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Your Name - [@PhilipBDev](https://twitter.com/PhilipBDev) - PhilipBDev@gmail.com

Project Link: [https://github.com/PhilipBDev/MERN-Weather-App-SERVER](https://github.com/PhilipBDev/MERN-Weather-App-SERVER)

<!-- RESOURCES -->

## Resources

- [Netlify](https://www.netlify.com/)
- [Heroku](https://www.heroku.com/)
