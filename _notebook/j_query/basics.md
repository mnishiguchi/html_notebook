# jQuery basics

## .on( events [, selector ] [, data ], handler )
- attaches one or more event handlers for the selected elements and child elements.
- http://api.jquery.com/on/
- http://www.w3schools.com/jquery/event_on.asp
- To remove event handlers, use the off() method

```javascript
$("button").on("click", function() {
  alert("clicked!")
})
```
