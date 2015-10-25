# Some HTML tags

## Telling the browsers we are using HTML5
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <!--some boilerplate (meta info)-->
        <meta charset="UTF-8">
        <title>Document</title>
    </head>

    <body>
        <!--content-->
    </body>
</html>
```

==

## Sementic tags
- article
- nav
- header
- footer
- Compare to: div that is non-semantic and multi-purpose

==

## Creating a navigation list

```html
<nav>
    <ul>
        <li></li>
        <li></li>
    </ul>
</nav>
```

==

## HTML `<hgroup>` tag
- represents a group of headings
- http://www.w3.org/TR/html-markup/hgroup.html
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup

```html
<!---->
<hgroup>
    <h1>Title</h1>
    <h2>Subtitle</h2>
</hgroup>
```

==

## HTML `<figure>` tag
- mark up a photo in a document
- http://www.w3schools.com/tags/tag_figure.asp

```html
<figure>
  <img src="img_pulpit.jpg" alt="The Pulpit Rock" width="304" height="228">
    <figcaption>caption</figcaption>
</figure>
```

==

## One-sided tags
- E.g. `<br />`, `<hr>`, etc

==

## meta
- `<meta name="..." content="...">`
- provides metadata about the HTML document.
    + keywords for search engines
    + etc
- http://www.w3schools.com/tags/tag_meta.asp

==

## pre
- `<pre>`
- Preformatted text
- Displayed in a fixed-width font (usually Courier)
- Preserves both spaces and line breaks.
- http://www.w3schools.com/tags/tag_pre.asp

### Creating tables with preformatted text
- Can make simple tables quickly
- Preformatted text is displayed by browsers in a monospace font in which each letter takes up the same amount of space
```html
<pre>
Time   Saturday   Sunday
====   ========   ========
7:30   Breakfast  Study
8:00   something  something
</pre>
```

==

## table

### Making row groups
- Row groups must be entered in the following order:
    + thead
    + tfoot
    + tbody
- A table can contain multiple `<tbody>`s

```html
<table>
    <thead>
        table rows
    </thead>
    <tfoot>
        table rows
    </tfoot>
    <tbody>
        table rows
    </tbody>

</table>
```

### Making column groups
- Enables us to assign a common format to all of the cells within a given column

```html
<colgroup>
 <col class="col-time" />
 <col class="cols-large-room" span="4" />
 <col class="cols-small-room" span="3" />
</colgroup>
```

```css
/* Column groups */

.reservation-info table col.timeColumn {
    background-color: #DDD;
}

.reservation-info table col.cols-small-room {
    background-color: #f5eafa;
}

.reservation-info table col.cols-large-room {
    background-color: #fff6df;
}
```

### Adding a table summary
- For non-visual browsers, such as aural browsers
- Includes a summary of a tables's contents
```html
<table summary="Lists which conference rooms are available and
                which are being used.
                8:00 a.m. to 5:00 p.m. (eastern time)">
<caption>Eastern time zone (UTC - 5:00)</caption>
```

## input
- Used to get information from users

