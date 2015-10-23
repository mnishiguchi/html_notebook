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


$( document ).ready(function() {

  alert("--- SPECIAL DISCOUNT ---\nIf you order within 10 minutes from now, I will give you 20% discount.");

  // Record visit time
  var visitTime = moment();

  // Keep on updating the current time
  setInterval(function() {
      $("#time-now").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
  }, 1000);

  // Show how much time has passed
  setInterval(function() {
      $("#time-elapsed").text(visitTime.toNow(true) + " passed...");
  }, 60000);

});
