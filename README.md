# Covid Area Alerts
<img src="https://img.shields.io/badge/node-v14.5.4-brightgreen"/> <img src="https://img.shields.io/badge/npm-v6.14.10-brightgreen"/> <img src="https://img.shields.io/badge/expo_cli-v4.1.6-brightgreen"/> <img src="https://img.shields.io/badge/aws_cli-v2.1.24-brightgreen"/>

## Background
This app tells you the restrictions on your current local authority area, it will
also alert you when moving across local authority boundaries.

## Prerequisites 
Application uses [Expo](https://docs.expo.io/get-started/installation/) and [AWS Amplify](https://docs.amplify.aws/cli) please ensure you have the CLI tool installed
We are using the AWS CLI v2 so recommend that [Python3](https://www.python.org/downloads/) is installed.
```
npm install -g expo-cli
npm install -g @aws-amplify/cli
```

Please use the matching Node version, we recommend using [NVM](https://github.com/nvm-sh/nvm)
Run from the root directory:
```
nvm use
```

## Setup
```
git clone https://github.com/Scottish-Tech-Army/covid-area-app.git

expo install
```

## Run
You can run the bundler independently or target specific platform
```
expo start
```

```
yarn run ios  
yarn run android

```

### Real devices
If you have a real device you can install the Expo app from the App/Play store and 
then scan the QR code from the bundler app.

## Tests
TBC

## Development
Create feature branches from `develop`, squash and merge after PR.

Release branch will be created when ready to push a version to `master`

### Adding dependencies
Please ensure you use `expo install <package>` to ensure the correct compatible version gets installed.
Do not use `npm install` for any packages in this project.

## Team
TBC

