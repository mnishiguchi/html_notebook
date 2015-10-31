# Generating random background colors on button click

```js
    $(".color").click(function() {
      // Generate random values for RGB
      var red   = Math.floor(Math.random() * 255);
      var green = Math.floor(Math.random() * 255);
      var blue  = Math.floor(Math.random() * 255);

      // Prepare a CSS RGBA value as a string
      var randomRGBA = 'rgba(' + red + ',' + green + ',' + blue + ',1)';

      // Set the backbround to a new color
      $("body").css("background", randomRGBA);
    });
```
