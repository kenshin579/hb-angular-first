// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAthBs4TqSezrtchuT6xxsqYohqmx6Uj0I",
    authDomain: "angular-ex-be9ea.firebaseapp.com",
    databaseURL: "https://angular-ex-be9ea.firebaseio.com",
    projectId: "angular-ex-be9ea",
    storageBucket: "angular-ex-be9ea.appspot.com",
    messagingSenderId: "865734028275"
  }
};
