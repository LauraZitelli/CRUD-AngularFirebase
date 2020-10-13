// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {//firebaseConfig é a chave de autenticação pra utilizar o serviço do Google
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyB2MC4NmH2taVji6ZPfKH6Y3EgPM05eCKw",
    authDomain: "teste-d84d0.firebaseapp.com",
    databaseURL: "https://teste-d84d0.firebaseio.com",
    projectId: "teste-d84d0",
    storageBucket: "teste-d84d0.appspot.com",
    messagingSenderId: "351628889193",
    appId: "1:351628889193:web:3ada6f414e5204314626f8"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
