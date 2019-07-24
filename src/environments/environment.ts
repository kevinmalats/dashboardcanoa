// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080',
  baseUrl: 'http://192.168.1.16:8080'
  // apiUrl: 'https://apicanoa.herokuapp.com',
  // baseUrl: 'https://apicanoa.herokuapp.com'
  // socketPath: '/socket.io/'
};