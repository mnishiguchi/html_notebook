# Navbar

## Navbar animation

```html
  <div id="navbar">
    <div class="container">
      <hgroup>
        <!-- Hamburger button -->
        <button type="button" id="hamburger">&#9776;</button>

        <!-- Logo -->
        <h1 id="logo">
          <a href="/#/home">
            Wok
          </a>
        </h1>
      </hgroup>

      <!-- Nav links -->
      <nav>
        <ul>
          <li>
            <a href="/#/home" class="nav-link home">
              Home
            </a>
          </li>
          <li>
            <a href="/#/restaurant" class="nav-link restaurant">
              Restaurant
            </a>
          </li>
          <li>
            <a href="/#/karaoke" class="nav-link karaoke">
              Karaoke
            </a>
          </li>
          <li>
            <a href="/#/online-order" class="nav-link online-order">
              Online Order
            </a>
          </li>
        </ul>
      </nav>
    </div><!-- /.container -->
  </div><!-- /.navbar -->
```


```js
  (function toggleNavbarAnimation(){

    // Wait until DOM is loaded and then execute.
    document.addEventListener( "DOMContentLoaded", function( event ) {

      // Find elements.
      var hamburger = document.querySelector( "#hamburger" );
      var nav       = document.querySelector( "#navbar nav" );

      // Apply the slide up animation defined in CSS to the navigation when
      // the hamburger is clicked.
      hamburger.addEventListener( 'click', function() {
        nav.classList.toggle( "cssSlideUp" );
      });

      // Remove the animation when:
      // - mouse leaves the naviagation
      // - the navigation is clicked, or
      // - the window size is resized.
      nav.addEventListener( 'mouseleave', function() {
        nav.classList.remove( "cssSlideUp" );
      });
      nav.addEventListener( 'click', function() {
        nav.classList.remove( "cssSlideUp");
      });
      window.addEventListener( 'resize', function() {
        nav.click();
      });
    });

  })();
```

```css
#logo {
  font-size: 2.5em;
  letter-spacing: -1px;
  color: white;
  cursor: default;  /* Default cursor instead of the finger pointing */
  height: 60px;
  line-height: 60px;
  margin: 0;
}
#navbar {
  position: relative; /* This is to make CSS transition smooth? */
  background: #333;
  color: white;
  display: block;
  overflow: hidden;  /* This is to prevent the margin collapsing? */
}
#navbar nav {
  /* ensure visibility during the transition */
  display: block !important; /* yes, important */
  height: 0;
}
#navbar nav.cssSlideUp {
  transition: .1s linear all;
  height: 168px;
}
#navbar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}
#navbar li {
  display: inline-block;
  width: 100%;
  border-top: 1px solid #999;
}
#navbar li a {
  display: block;
  vertical-align: middle;
  width: 100%;
  line-height: 40px;
  height: 40px;
  padding: 0 12px;
  color: white;
  transition: color 0.6s, background 0.6s;
}
#navbar li a.active {
  background: none;
  color: white;
  cursor: default;  /* Default cursor instead of the finger pointing */
  background: #6d84b4;
}
#navbar li a:hover {
  background: #293e6a;
  color: white;
}
#navbar li a.active:hover {
  background: #6d84b4;
}
#hamburger {
  position: absolute;
  right: 12px;
  top: 20px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border-radius: 5px;
}
#hamburger:hover {
}
/* Remove the default underline associated with links. */
#logo a,
#logo a:hover,
#navbar nav li a,
#navbar nav li a.active,
#navbar nav li a:hover,
#navbar nav li a.active:hover {
  text-decoration: none;
}
```

==

## Hamburger animation (three bars => X)

```html
  <div id="navbar">

    <div class="container">
      <hgroup>
        <!-- Logo -->
        <h1 id="logo">
          <a href="/#/home">
            Wok'n'Roll
          </a>
        </h1>

        <!-- Hamburger button -->
        <div id="hamburger">
          <div class="inner">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </div>
      </hgroup>

      <!-- Nav links -->
      <nav>
        <ul>
          <li>
            <a href="/#/home" class="nav-link home">
              Home
            </a>
          </li>
          <li>
            <a href="/#/restaurant" class="nav-link restaurant">
              Restaurant
            </a>
          </li>
          <li>
            <a href="/#/karaoke" class="nav-link karaoke">
              Karaoke
            </a>
          </li>
          <li>
            <a href="/#/online-order" class="nav-link online-order">
              Online Order
            </a>
          </li>
        </ul>
      </nav>
    </div><!-- /.container -->
  </div><!-- /.navbar -->
```

```css
 /* Outer */
#hamburger {
  background: #999;
  position: absolute;
  top:0;
  right:20px;
  display: inline-block;
  height: 60px;
  width: 60px;
  float: right;
  background: white;
  cursor: pointer;
}

/* Inner */
#hamburger .inner {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 15px;
  left: 15px;
}

/* Bars */
#hamburger .inner .bar {
  display: block;
  width: 30px;
  height: 6px;
  position: absolute;
  left: 0;
  right: 0;
  background: #333;
  transition: all .3s ease-out;
}
#hamburger .inner .bar:first-child {
  top: 0;
}
#hamburger .inner .bar:nth-child(2),
#hamburger .inner .bar:nth-child(3) {
  top: 12px;
}
#hamburger .inner .bar:last-child {
  top: 24px;
}

/* Active hamburger */
#hamburger.active .inner .bar:first-child {
  top: -15px;
  opacity: 0;
}
#hamburger.active .inner .bar:last-child {
  top: 51px;
  opacity: 0;
}
#hamburger.active .inner .bar:nth-child(2) {
  transform-origin: center;
  transform: rotate( 45deg );
  background: red;
}
#hamburger.active .inner .bar:nth-child(3) {
  transform-origin: center;
  transform: rotate( -45deg );
  background: red;
}
```

```js
  ( function() {

    // Store elements.
    var hamburger;
    var logo;
    var nav;

    // Wait until DOM is loaded and then execute.
    document.addEventListener( "DOMContentLoaded", function( event ) {

      // Find elements.
      hamburger = document.querySelector( "#hamburger" );
      nav       = document.querySelector( "#navbar nav" );
      logo      = document.querySelector( "#logo" );

      // Apply the slide up animation defined in CSS to the navigation when:
      // - the hamburger is clicked.
      hamburger.addEventListener( 'click', toggleNavbarAnimations );

      // Remove the animation when:
      // - the mouse leaves the naviagation
      // - the navigation is clicked
      // - the logo is clicked
      // - the window size is resized
      nav.addEventListener( 'mouseleave', removeNavbarAnimations );
      nav.addEventListener( 'click',      removeNavbarAnimations );
      logo.addEventListener( 'click',    function() { nav.click(); });
      window.addEventListener( 'resize', function() { nav.click(); });
    });
    function toggleNavbarAnimations() {
      nav.classList.toggle( "cssSlideUp" );
      hamburger.classList.toggle( "active" );
    }
    function removeNavbarAnimations() {
      nav.classList.remove( "cssSlideUp" );
      hamburger.classList.remove( "active" );
    }
  })();
```
