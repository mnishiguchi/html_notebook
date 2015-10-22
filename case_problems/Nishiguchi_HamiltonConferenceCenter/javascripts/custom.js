/*
   New Perspectives on HTML
   Tutorial 5
   Case Problem 4

   Hamilton Conference Center JavaScripts

   Author: Masatoshi Nishiguchi
   Date:   10/14/2015

   Filename:         custom.js
   Dependencies:     jQuery, moment.js
*/

// Default date
var schedulingDate = moment("20170411", "YYYYMMDD");

// Set the default date
$( document ).ready(function() {
    $("#scheduling-date").text(schedulingDate.format("dddd, MMMM Do"));

    // The day before button
   $('#date-before').click(function() {
      $("#scheduling-date").text(schedulingDate.subtract(1, "days").format("dddd, MMMM Do"));
   });

   // The day after button
   $('#date-after').click(function() {
      $("#scheduling-date").text(schedulingDate.add(1, "days").format("dddd, MMMM Do"));
   });
});

// Keep on updating the current time
$( document ).ready(function() {
  setInterval(function() {
      $("#time-now").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
  }, 1000);
});
