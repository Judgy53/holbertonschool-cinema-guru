# holbertonschool-cinema-guru
In this project, we learned how to implement an app in React.

Covered Topics:
- Manage state and props in a react component
- Use React hooks to achieve certain behavior
- Implement a design with JSX and CSS (React)
- Implement a frontend app with React

**Requirements**

- Class components are not allowed
- A README.md file, at the root of the folder of the project, is mandatory
- Try to use ES6 features

**Setting up the backend**

- Installing `docker`
    - This [link](https://docs.docker.com/engine/install/ubuntu/ "link") has all the steps needed for installing docker depending on your system.
- Installing `docker-compose`
    - Official [documentation](https://docs.docker.com/compose/install/ "documentation") for installing docker-compose
- Make sure that docker is running before proceeding
- Cloning and running the backend server
    - Clone this [repository](https://github.com/atefMck/holbertonschool-cinema-guru-API "repository") on your local machine
    - `cd` into the repository folder and run the following commands:
        - `docker-compose build --no-cache --force-rm`
        - `docker-compose up`
        - After running the above command you should get an output similar to this indicating that the backend and db are running. ![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2022/4/af62bcfe76602df6a97d54316323e74d7763d666.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20241022%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241022T065425Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=f61dbc6bca71ec73f5f57bf245cfebe31c946dfb23fbab0564e94d3cda969c4d)

**Notes**

- You’ll be adding the base url before each API route mentioned in the tasks: `http://localhost:8000/`
- The [repository](https://github.com/atefMck/holbertonschool-cinema-guru-API "repository") contains detailed information about each route in the API
- The React and friends versions to use :
    - “react-dom”: “^17.0.2”
    - “react-router-dom”: “^6.2.2”
    - “react-scripts”: “5.0.0”

**Table of Contents**
- [0. Cloning the Figma project](#0-cloning-the-figma-project)
- [1. Setting up the workspace](#1-setting-up-the-workspace)

## 0. Cloning the Figma project
Create an account in [Figma](https://www.figma.com/ "Figma") if you don’t have one and open [this project](https://www.figma.com/design/RPc247kHDXz5QeFNUM3Gs6/Holbertonschool---Cinema-Guru?node-id=0-1&node-type=canvas "this project") and “Duplicate to your Drafts” to have access to all design details.

If you can’t access it, please find here the [Figma file](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/misc/2022/4/935f3c7ad00396b900ddffbea78c6fab61f1d7a8.fig?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20241022%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241022T075315Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=d987c351ec7be601fd39676ec5236babd38675a9f31c5b06e19e8c3a75e3bf15 "Figma file").

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2022/4/58de24af3384ecb909b6df472d9f284fa781963d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20241022%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20241022T065425Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=6c89cbb5e76700d21765e19c55258f29f81204f6396807e06268166ecaf47f84)

**_All the components designs that we will be working on could be found in the Figma file._**

## 1. Setting up the workspace
In this project, we will use the `yarn` package manager instead of npm.
- Using `yarn create` create your React app.
- Remove all the unnecessary files and their respective imports. `src/App.test.js`,`src/reportWebVitals.js`, `src/setupTests.js`, `src/logo.svg`
- Make sure your App component returns an empty `div` with `className="App"`

**Packages**

This is the list of packages we will need throughout this project:
- `@fortawesome/fontawesome-svg-core 6.1.0`
- `@fortawesome/free-solid-svg-icons 6.1.0`
- `@fortawesome/react-fontawesome 0.1.18`
- `axios 0.26.1`
- `lodash 4.17.21`
- `normalize.css 8.0.1`

Install them and make sure they’re added as dependencies.

**Project Structure**

This will be the general folder structuring.
- `public/`
- `src/`
    - `assets/`
    - `components/`
    - `routes/`

**_Make sure all your source files are under the repository root and not under a subdirectory._**

**Repo:**
- File: `README.md, package.json, public/, src/assets/, src/components, src/routes, src/App.js`
