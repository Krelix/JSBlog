## Single Page Blog based on jQuery, underscore and using RequireJS.

A simple blog engine that (currently) only loads static data from a file.

### Getting started

Use `npm install` to install the dev dependencies (`grunt`, `grunt-contrib-connect` and `grunt-contrib-qunit`). Make sure you have installed grunt-cli globally (`npm install -g grunt-cli`).

Start the server using `grunt connect` which will start a server on port 9000 with keepalive, meaning it'll run until you kill the execution (CTRL+C in the command line). You can configure the port in the Gruntfile.js by changing the `port` valueof the `server` object, under `connect`.

### Basic testing

There is some basis for QUnit testing, but I've not really focused on any of it. So... it's broken for now.

### Roadmap

- Sort by date (desceding)
- Create a database with some posts in it to load stuff.
- Abusing promises... Maybe there is a better way ? (would love some feedback on that)
- Styling, cause right now it's really ugly.
- Administration
- **SPECIAL FEATURE** : Get MD file as input, generate an HTML file.

### Note

Currently can load static data as well as a URL that will contain content to be loaded in the body of the blog post (like a specific HTML page over HTML code in the content of the post). Probably a worthless "feature" but I kinda like that.