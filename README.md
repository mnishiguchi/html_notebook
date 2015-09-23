# html_practice_code

## Some useful websites
- [HTML Element Reference](http://www.w3schools.com/tags/default.asp)
- [Best Online WYSIWYG HTML Editor](http://bestonlinehtmleditor.com/)
- [The World Wide Web Consortium](W3C.org)
- [Markup validatior](http://validator.w3.org/)
- [Bad design examples](wepagesthatsuck.com)
- [wayback machine](http://archive.org/web/) - to look up old websites
- [backlink watch](http://backlinkwatch.com/) - to see a website’s incoming links

## Creating HTML documents
### with Notepad
- save a document as html (The default format is txt)

### with MS Word
- save a document as html filtered (The html format has a lot of noise all over the place)

### with a WYSIWYG HTML Editor
- [Best Online WYSIWYG HTML Editor](http://bestonlinehtmleditor.com/)
- Edit a document just like MS Word, then the editor automatically convert it to html.
- Cut and paste to a new document on a text editor and save it as html.

## HTML misc.

### One-sided tags
- E.g. `<br />`, `<hr>`, etc

### SGML
The language that this Web browser uses, Hypertext Markup Language (HTML), is an example of an SGML-based language. There is a document type definition for HTML (and reading the HTML specification is effectively reading an expanded version of the document type definition). In today's distributed networking environment, many documents are being described with the Extensible Markup Language (XML) which is a data description language (and a document can be viewed as a collection of data) that uses SGML principles.
http://searchsoa.techtarget.com/definition/SGML

### meta
- `<meta name="..." content="...">`
- provides metadata about the HTML document.
    + keywords for search engines
    + etc
- http://www.w3schools.com/tags/tag_meta.asp

### pre
- `<pre>`
- Preformatted text
- Displayed in a fixed-width font (usually Courier)
- Preserves both spaces and line breaks.
- http://www.w3schools.com/tags/tag_pre.asp

### image map
- [Easy Imagemap Generator](http://imagemap-generator.dariodomi.de/)
- [Image maps examples](https://www.google.com/search?q=image+maps+example)
- http://www.w3schools.com/tags/tag_map.asp

#### How to create a image map
1. Create `<map name="map_name"></map>`
2. Inside `<map></map>`, create `<area shape="" coord=""  href="" alt="">`
3. Apply the image map to an image. `<img ... usemap="#map_name">` 

#### HTML <area> shape Attribute
- **rect**:   Defines a rectangular region
- **circle**: Defines a circular region
- **poly**:   Defines a polygonal region

### Absolute path vs Relative path
#### Absolute path
- From the top

#### Relative path
- From where you are

