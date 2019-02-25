## Setup

Run `yarn` to install all dependencies

## Start mqtt broker (optional)
In case you do not already have an mqtt broker run `yarn broker` to start a simple broker on localhost. By default, the broker runs on [http://localhost:8080](http://localhost:8080) which can be edited in `config.js`<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Start web app
Run `yarn start` to setup the web app, open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Build for production 

Run `yarn build` thois will build the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Eject

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time by running `yarn eject`. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.