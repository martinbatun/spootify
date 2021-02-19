// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// test
// https://projects.propublica.org/nonprofits/api/v2/search.json?page=2&order=revenue&sort_order=desc

export const environment = {
  production: false,
  url: ' https://api.spotify.com/v1/',
  CLIENT_ID: '4e9ed303a8ce4ad0a0cd8ef0216e23b4',
  CLIENT_SECRET: 'e469767cbfe147528164f277a77f2b86',
  // REDIRECT_URI: 'https://spotify-sunwise.netlify.app'
  REDIRECT_URI: 'http://localhost:4200/welcome'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
