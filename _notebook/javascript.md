# JavaScript, jQuery, etc

## Blinking

```js
setInterval(function() {
    $('#blink').fadeOut.fadeIn(500);
}, 1000);
```

```js
$("div#startBlink").on('click', function(){
    $self = $(this);
    setInterval(function(){
      $self.fadeOut(1500).fadeIn(1500);
    },1000)
});
```
