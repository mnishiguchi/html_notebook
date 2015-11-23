# Exercises - forms (p419)

1. creating a form with the name registration that accesses the CGI script at www.redbllpizza.com/cgi-bin/registration using the POST method
```html
<form id="registration"
      name="registration"
      action="www.redbllpizza.com/cgi-bin/"
      method="post">
  ...
</form>
```

2. `<input type="text" id="lastName" name="lastNmae">`
- [type](http://www.w3schools.com/tags/att_input_type.asp)
- id   - Identifies the control field itself
- name - Specifies the name of an <input> element

3. Creating a field set containing the legend text Contract Information
```html
<form>
    <fieldset>
        <legend>Contract Information</legend>
        <input type="text" id="contract-info" name="contract-info">
    </fieldset>
</form>
```

4. Creating an input box for the data field custPassword that will prevent the text of the user's password from being displayed on the screen as it is typed
```html
<input type="password"
       name="custPassword">
```

5. associating a field label with a control element (Two ways)

**Option A**
```html
<label for="street">Street address</label>
<input type="text"
       id="street"
       name="street">
```

**Option B**
```html
<label>
    Street address
    <input type="text"
           id="street"
           name="street">
</label>
```

6. Creating a field label with the text User Name that is associated with the input box with the id userinput

```html
<label>
    User Name
    <input type="text"
           id="userinput"
           name="userinput">
</label>
```

7. Creating an input box for the country field with the default text United States
- value - Specifies the default value for an input field

```html
<input type="text"
       id="country"
       name="country"
       value="United States">
```

8. Creating an input box for the socialSecurity field. Use HTML attributes to set the width of the box to 11 characters and to display the placeholder text nnn-nn-nnnn

```html
<input type="password"
       id="socialSecurity"
       name="socialSecurity"
       placeholder="nnn-nn-nnnn">
```
