# RaRN: Ra React Native boilerplate.

## Feature

- Native screen navigation performance  
  `react-native-navigation`

- Global state management and simplified  
  `react-redux` and `@reduxjs/toolkit`

- Svg file suppport for icon  
  `react-native-svg`

- Styling component easily  
  `styled-components`

## Installation

### Step 1

clone rarn into your project directory with a new name.

- via ssh  
  `git clone git@github.com:rawewhat/rarn.git <PROJECT_NAME>`
- via https  
  `git clone https://github.com/rawewhat/rarn.git <PROJECT_NAME>`

### Step 2

clean up project to make it yours.

- change directory to newly created project directory  
  `cd <PROJECT_PATH>`

- change project name and Android package name  
  `npx react-native-rename "<NEW_PROJECT_NAME>" -b <NEW_BUNDLE_IDENTIFIER>`

- install dependencies using yarn  
  `yarn install`

- install iOS dependency  
  `cd ios && pod install && cd ..`

### Step 3

change to new git repository.

- cleanup previous git history  
  `rm -rf .git`

- initialize new git repository  
  `git init`

- add your own git remote repository  
  `git remote add origin [NEW_REPOSITORY_URL]`

## Example

```
git clone https://github.com/rawewhat/rarn.git NewAppName

cd NewAppName

npx react-native-rename "New App Name" -b com.company_name.new_app_name

rm -rf .git

git init

git remote add origin git@github.com:company-name/new-app-name.git
```

Enjoy!!!

## Structure

```
├── assets
│   ├── img // .jpg, .png, .gif
│   ├── raw // .ttf, .json or any files
│   └── svg // .svg
├── elements
│   ├── color.js // color resource
│   ├── style.js // reusable css style
│   └── theme.js // theme object
├── resources
│   ├── arrays.js // static array data
│   ├── configs.js // configuration object
│   ├── constants.js // constant variable
├── screens // screen components
└── services
    ├── helpers // function require dependency
    ├── slices // redux slice
    └── utils // pure javascript function
```

- NOTICE:  
  for redux slice, please take a look at [@reduxjs/toolkit](https://redux-toolkit.js.org)

## License

This project is released under the [MIT License](https://github.com/rawewhat/rarn/blob/master/LICENSE).
