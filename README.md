# What is this?

Librechromecast is a free (as in "freedom") and open source application for casting video files with subtitles from your PC to your TV using a chromecast device.
Is is licensed under the AGPL, meaning it is free today and will be free forever.

## What can I do with it?

You can:

- Cast local videos from your PC to your TV
- Add a subtitle file (warning: only .vtt is supported, if you have a .srt, convert it to .vtt, there are many third party tools over the net)
- Cast Youtube videos to your TV
- Pause/resume, move forwards/backwards, go into a specified timestamp, and stop the media

## Who is this made for?

Most of Librechromcast's functionaly, such as pausing/resuming and casting Youtube videos, can be done from your cellphone already and are there merely for the sake of completeness. The application's big selling point is this: imagine you downloaded a video to your computer, and want to watch it on your TV; furthermore, you want to add subs. Currently, the only options available are propietary or too difficult for the average user (mkchromecast, for example, is a command-line tool). Librechromecast tries to fill that space.

## Supported platforms

This is an electron app, so it should be able to run on every major PC platform. However, I only tested Linux and Windows builds. Below, I offer instructions for building on MacOS, and perhaps someone figures out how to do it on the BSD's. But I don't officialy support them, so you are on your own.

## Build instructions

- git clone 

## How is this thing made?

It has a frontend made using React and Redux, and a backend API using Node (which is really just a wrapper for the Chromecast-API library). This is all packaged for desktop using Electron and Babel. I am open to criticism, suggestions, and PRs. 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
