# Navbar links

```js
  function run( $rootScope, $route ) {

    var baseTitle = " | Wok";

    $rootScope.$on( "$routeChangeSuccess", function() {

      // Set page title.
      if ( $route.current.title ) {

        window.document.title = $route.current.title + baseTitle;

      }

      // Remove the active class from the previously active nav-items.
      var navLinkEl = angular.element( document.querySelector( '.nav-link.active' ) );
      navLinkEl.removeClass( "active" );

      // Set the active nav-item.
      // console.table( $route.current.originalPath );
      var navLinkEl = angular.element( document.querySelector( '.nav-link.' + $route.current.originalPath.substring( 1 ) ) );
      navLinkEl.addClass( "active" );
    });

  } // end run
```
