# LO:GO Frontend

## Overview
**LO:GO** landingpage is a demonstrational project developed in VueJs framework. Even if the scope of the demo is to deliver a single page, it was developed to be maintabable and scalable in a hypotetic production environment.
It features a coherent design system, responsive styling, animations, and interaction for better user experience.

To develop the given designs, the following packages were included:
- [Vue3 + Vite](https://github.com/vuejs/create-vue) ( + [`vite-svg-loader`](https://www.npmjs.com/package/vite-svg-loader) for SVGs imports & [`vue3-carousel`](https://ismail9k.github.io/vue3-carousel/) for sliders)
- [Scss](https://sass-lang.com/) 
- [Gsap](https://greensock.com/) (+ [`ScrollTrigger`](https://greensock.com/scrolltrigger/) & [`ScrollToTarget`](https://greensock.com/scrolltoplugin/) plugins)
- [Axios](https://axios-http.com/)

Throught the code, it is possible to encounter `@DEMO`: these are helpful comments! (i.e. explanations, production environment equivalent, next steps, etc.)

## Project structure
### **[Assets](src/assets)**
This folder contains the organized static assets for the project, divided by _graphics_, _images_, _icons_ and _styles_. [/styles/base._scss](/src/assets/styles/_base.scss) contains pre-processor variables, mixins and utils
### **[Components](src/components)**
This folder contains all the vue components used in the project. [/base](src/components/base/) subfolder contains "atomic" level elements, such as logo, icons, navigation and so on.
### **[Helpers](/src/helpers/)**
This folder contains helpful reusable functions and data services, to easily manage data.

## How to test
In order to test the project it is necessary to locally clone this repository. First of all, make sure to have installed [Node.js](https://nodejs.org/).

1. Clone in local folder this repository via GitHub (i.e. `git clone <repository_url> `)
1. Run the following commands, to install the dependencies and run the local server (which features hot-reload)
    ```sh
    cd logo_frontend
    npm install
    npm run dev
    ```
1. The landing page will now be available to be tested on local `localhost`