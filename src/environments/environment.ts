// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: true,  
  apiurl: {
  baseUrl: 'https://ghibliapi.herokuapp.com/films',
  fourS_8081_Url: 'http://127.0.0.1:8081/api/photo',   /*    4S_image_showroom  Nodejs run at localhost */
  fourS_Url: 'http://192.168.20.27:3001/api/photo',    /* node_tedious Nodejs run at 192.168.20.27 */
  fourS_3001_Url : 'http://localhost:3001/api/photo',  /*    node_tedious Nodejs run at localhost */
  emp_Url : 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations'
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
