# Animation
- https://css-tricks.com/animations-the-angular-way/

## Swapping images
- http://stackoverflow.com/a/24751641/3837223

==

## Navigation menu with ng-animate
- http://ng.malsup.com/#!/css-animations-for-ng-hide_ng-show

### 1. Load the ng-animate module
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0-rc.2/angular-animate.min.js"></script>
```

### 2. Inject the ng-animate module into the app module
```js
  angular
    .module( "app", [
      "ngRoute",
      "ngAnimate"
    ]);
```

### 3. Define a CSS class for animation
```css
.ng-hide-add, .ng-hide-remove {
    /* ensure visibility during the transition */
    display: block !important; /* yes, important */
}
.cssSlideUp {
    transition: .5s linear all;
    height: 250px;
}
.cssSlideUp.ng-hide {
    height: 0;
}
/*
.cssFade {
    transition: 0.5s linear all;
    opacity: 1;
}
.cssFade.ng-hide {
    opacity: 0;
}
*/

```

### 4. Find the navigation element and add the animation class at run-time.
```js
// ...
    function AppNavbarController( $route, $location, $window, $scope ) {

      var breakpoint = 480;

      // Store the reference to the angular element of the navigation menu.
      var navElem;

      var animationClass = "cssSlideUp";

      var vm  = this;

      vm.pages = [];      // path:  The "#" paths, e.g., "#/about".
                          // title: The same as the page title.
      vm.activeTab;       // The name of the active tab.
      vm.isMobile;        // The current display type.
      vm.isVisibleMenu;   // The visibility of hamburger button.

      // Expose the public methods.
      vm.toggleMenu = toggleMenu;


      // ---
      // PUBLIC METHODS
      // ---


      /**
       * Toggles the nav menu with animation effect.
       */
      function toggleMenu() {

        addAnimation();

        // Toggle the visibility.
        vm.isVisibleMenu = ! vm.isVisibleMenu;

      };


      // ---
      // PRIVATE METHODS
      // ---


      /**
       * Sets the state of the navbar according to the current screen width.
       */
      function handleResizing() {

        // Update the state.
        vm.isMobile      = ( $window.innerWidth < breakpoint ) ? true : false;
        vm.isVisibleMenu = ( vm.isMobile ) ? false : true;

        removeAnimation();

      } // end handleResizing


      /**
       * Sets up animation.
       */
      function addAnimation() {

        // If not done already, find the nav element and
        if ( ! navElem ) {

          navElem = angular.element( document.querySelector( '#app-navbar--nav' ) );

        }

        // Add the animation class.
        navElem.addClass( animationClass );

      } // end addAnimation


      /**
       * Removes animation.
       */
      function removeAnimation() {

        if ( navElem && navElem.hasClass( animationClass ) ) {

          navElem.removeClass( animationClass );

        }

      // ...

    } // end AppNavbarController
// ...
```




