# Stylesheet

- Note: Enter the style names in alphabetical order so that we can make our stylesheets easier to manage

## Precedence
- The stylesheet that is loaded last has precedence over stylesheets loaded earlier

### the order in which styesheets are interpreted
[ACCESSED LAST]
1. author's inline styles
2. author's embedded stylesheet
3. author's external stylesheet
4. user-defined styles
5. browser's nternal stylesheet
[ACCESSED FIRST]

## Colors

### RGB triplet
- Describes 256^3(16.7million) possibe colors, which is a greater number of colors than the human eye can distinguish.
- The format
    + `#FFFF00`
    + `rgb(255, 255, 0)`
    + `rgb(100%, 65%, 0%`

### HSL color values
- Describes colors based on hue, saturation and lightness
- [wikipedia](https://en.wikipedia.org/wiki/HSL_and_HSV)

#### Hue
- the tint of the color and is based on the color's **location on the color wheel**
- ranges 0..360 degrees, where { 0: red, 120: green, 240: blue }

#### Saturation:
- Measures the **intensity** of the color
- ranges 0..100%, where  where { 0%: no color, 100%: full color }

#### Lightness:
- Measures the **brightness** of the color
- ranges from 0..100%, where { 0%: black, 100%: whilte }

### Opacity values in CSS3
- Specified using either of the folllowing `rgba` and `hsla` color values
- Set the transparency of the color as a decimal
- Ranges from 0.0 up to 1.0, where { 0.0: completely transparent, 1.0: completely opaque }

## Progressive enhancement
- Placing code conforming to older standards before newer properties
- E.g., Older browsers that do not support CSS3 will ignore the RGBA

## Contextual selectors

- `*`: Matches any element in the hierarchy
- `e`: Matches any element e in the hierarchy
- `e1, e2, ...`: Matches the group of elements e1, e2, ...
- `e f`: Matches any element f that is a descendent of an element e
- `e>f`: Matches any element f that is a direct child of an element e
- `e+f`: Matches any element f that is immediately preceeded by a sibling element e
- `e~f`: Matches any element f that is a sibling to an element e

## Attribute selectors

- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
- [w3schools](http://www.w3schools.com/css/css_attribute_selectors.asp)

