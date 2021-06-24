
![DevMovies Logo](documentation/logo.png)

    
# DevMovies

DevMovies is an application that lists the movies that are high, suggesting several options for those who want to find a new movie. The APP makes the TRAKTTV API to identify the high movies, the TMDB API is also used to search for images.

Searching for movies           |  Choosing a movie to see more
:-------------------------:|:-------------------------:
![Listing movies and filter](documentation/DevMovies1.gif)  |  ![Listing movies and filter](documentation/DevMovies2.gif)


## Badges
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

  
## Features
- Infinity scrollable movies;
- An input to filter the movies list;
- Get all the comics from a specific character;
- Movie thumbnail containing name, poster and rating (stars);




  

## Tech Stack

- React-Native;
- TypeScript
- Redux
- Styled Components
- React Navigation
- React Native Vector Icons
- Axios
- [Redux Promise Middleware](https://www.npmjs.com/package/jest);


For testing purpose:
- [Jest](https://www.npmjs.com/package/jest) - a simple framework to test JavaScript code;
- [React Native Testing Library](https://www.npmjs.com/package/@testing-library/react-native) - a testing library to test React Native components;


## Installation
To run this app you need to satisfy these requirements below:

### Requirements
- Git;
- Node.JS;
- Yarn;
- Android Studio;
- JDK 11;
- Emulator (optional) - you can emulate an Android device using Android Studio (AVD Manager);

If you need help to prepare your development environment I recommend this complete [guide](https://react-native.rocketseat.dev/) created by RocketSeat.
    
### Changing the API Key
By default this app contains a limited API Key from TrakTv and TMDB that has a request limit, if you want to change it you can modify the configuration file on these sites:
- [TraktTV API](https://trakt.docs.apiary.io/#introduction/create-an-app);
- [TMDB](https://developers.themoviedb.org/);

![Set the API keys](documentation/SetMarvelApiKey.png)  

## How to run
Execute this command to run this app for Android

```sh
yarn android
```

You can run this app for iOS but it hasn't been tested yet and may not work perfectly
```
yarn  ios
```

  
## Run Locally

Clone the project

```bash
  git clone https://github.com/lucasmoura-dev/dev-movies
```

Go to the project directory

```bash
  cd dev-movies
```

Install dependencies

```bash
  yarn
```

Execute this command to run this app for Android

```bash
  yarn android
```

You can run this app for iOS but it hasn't been tested yet and may not work perfectly
```bash
  yarn ios
```

## Running Tests

To run tests, run the following command

```bash
  yarn test
```

  
## Appendix

- [Inspiration Design - by Sajjad Mohammadi Nia](https://dribbble.com/shots/15224558-Cinema-Booking-Tickets-App)

## Author

👤 **Lucas Moura**

* Github: [@lucasmoura-dev](https://github.com/lucasmoura-dev)
* LinkedIn: [@lucas-moura-251951120](https://linkedin.com/in/lucas-moura-251951120)
