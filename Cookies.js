//Getting a single value from cookie
var favoriteCookie = $cookies.get('CookieName');

//Assign a single value to the cookie
$cookies.put('CookieName', Value for Cookie);

//Setting an object to a cookie
var anyObject = {
        currentUser: {
          username: "testUN",
          superSecretNumber: 55,
          authdata: authdata
        }
      };
$cookies.putObject('cookieName', anyObject);

//Getting the cookie object back
var cookieWithObject = $cookies.getObject('cookieName');

//get the value from the cookie object
var username = cookieWithObject.currentUser.username;
var userNumber = cookieWithObject.currentUser.superSecretNumber;
var authdata = cookieWithObject.currentUser.authdata;
