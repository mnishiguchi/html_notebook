/*
   New Perspectives on HTML
   Tutorial 6
   Case Problem 4

   Millennium Computers JavaScripts

   Author: Masatoshi Nishiguchi
   Date:   10/21/2015

   Filename:         custom.js
   Dependencies:     jQuery, moment.js
*/

// Keep on updating the current time
$( document ).ready(function() {
  setInterval(function() {
      $("#time-now").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
  }, 1000);
});
