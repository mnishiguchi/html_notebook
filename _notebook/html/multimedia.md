# Multimedia
- Displayed within a web page in a fashion similar to an inline image
- **the HTML5 multimedia**  Many browsers now include built-in support for audio and video files

## plug-ins
- Used when the browser does not have a multimedia feature or capability
- Some common plug-ins for video and audio clips
    + Windows Media Player
    + QuickTime
    + Adobe Flash Player

==

## Digital audio
- Use audio or embed tags
- **amplitude and frequency**
- **sampling rate**
    - Measured in kilohertz (kHz)
- **sample resolution** (bit depth)
    - Three commonly used: 8, 16, 32bit 
- **bit rate** 
    - Total size can be expressed in terms of the bit rate
    - the number of bits of data required for each second of sound
    - e.g. Typical CD's bit rate: 1411 Kbps
- **file compression formats**
    - Currently three file formats are supported by the browsers that support HTML5
        + Most common: MP3
        + others:      Ogg Vorbis, WAV
    - e.g. MP3s can achieve near-CD-quality sound at bit rate of 192 to 320 Kbps

### the HTML5 audio tag
- not supported by older browsers

### the embed tag
- Embed plug-ins
- Can be nested within the audio element so that if the browser does not recognize the audio tag, it will attempt to load the clip using the embedded element
- Disadvantages: Relies on users to have a certain piece of software installed in addition to a browser. 

### Audio controls
- The appearance of the audio controls varies from browser to browser. For a uniform look, we must create our own using form element along with a JavaScript program to manage hte actions of the control buttons

### MIME types
- Multipurpose Internet Mail Extentions
- Embedded objects are not limited to audio and video files

==

## Digital video
- a seris of single images or frames that are played in rapid succession
- **aspect ratios** (width-to-height ratio)
    - many are 4:3, some 1.85:1 or 2.39:1
    - 160x120px
    - 320x240px
    - 640x480px
    - 1280x720px (online movie sites)
- **frame rate** 
    - commonly expressed in frames per second(fps) 
    - 24fps (DVD)
    - 10-15fps (web)
- **video bit rate**
    - the amount of date that has to be processed by the video player each second
    - defined in megabits per second (mbps) or kilobits per second (kbps)
- **bandwidth**
    - Must be large enough to accommodate the amount of information processed each second to smoothly play the video 

### File format and Codecs
- **Codec**
    - the software that compresses and decompresses a media clip
    - each codec is stored within a file called a container file
    - should not confuse the video file format with the codec of the clip ot contains
    - https://en.wikipedia.org/wiki/Video_file_format   

### the HTML5 video element
- Before HTML5, there was no standard for showing videos on a web page.
- Before HTML5, videos could only be played with a plug-in (like flash).
- The HTML5 <video> element specifies a standard way to embed a video in a web page.
- http://www.w3schools.com/html/html5_video.asp

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>
```

- Note: For browsers that don't support the HTML5 video element, we must nest an embedded object, using the object element

### the object element
- Introduced in HTML4
- supported by all browsers
- defines an embedded object within an HTML document
- can be used in place of the embed element
- used to embed plug-ins (like Java applets, PDF readers, Flash Players) in web pages.
- Can be used with almost any type of contenet:
    - sound
    - video clips
    - graphic images
    - PDF files
    - the content of other web pages
- [HTML4](http://www.w3schools.com/tags/tag_object.asp)
- [HTML Object Element](http://www.w3schools.com/html/html_object.asp)
- **attributes**
    - data: the source of the file used in the object
    - form: the name of the form that the object belongs to (HTML5) 
    - name: a unique name for the object
    - type: the MIME type of the data within the object
    - usemap: associates the object with a client-side image map
- **param**
    - Most objects use parameters that define houw user interact with the object
    - http://www.w3schools.com/tags/tag_param.asp

```html
<object data="horse.wav">
  <param name="autoplay" value="true">
</object>
```

- Must provide URL twice
    - Because browsers differ on whether they use the data attribute of the param element

```html
<object data="overture.mp3" type="audio/mpeg"
        height="20" width="250">
  <param name="src" value="overture.mp3">
</object>
```

==

### SWF
- https://en.wikipedia.org/wiki/SWF
- an abbreviation for small web format, an Adobe Flash file format
- used for multimedia, vector graphics and ActionScript


## Embedding other objects

### inserting inline images
- 

### embedding an HTML file
- 





