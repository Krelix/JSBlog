## Simple Phaser Template with RequireJS

This is based on the Phaser RequireJS template. However, I wanted to separate phaser and its libs. It requires to track a little bit more what happens, manually add the PIXI dependency, but it gives (in my opinion) more control on what you want in your game.

The goal is to have a nice template that has as much as possible set up to use later as a basis for any projects.

### Getting started

Use `npm install` to install the dev dependencies (`grunt`, `grunt-contrib-connect` and `grunt-contrib-qunit`). Make sure you have installed grunt-cli globally (`npm install -g grunt-cli`).

Start the server using `grunt connect:server` which will start a server on port 9000 with keepalive, meaning it'll run until you kill the execution (CTRL+C in the command line). You can configure the port in the Gruntfile.js by changing the `port` valueof the `server` object, under `connect`.

The project contains basic assets obtained from http://www.photonstorm.com/phaser/tutorial-making-your-first-phaser-game and is ready to be used. 

### Basic testing

Currently, there is a basic testing folder that contains an `index.html` that loads QUnit and loads the rest with RequireJS. In the main.js, we check that the libraries loaded correctly through a few tests (to see if lib objects are defined) and if we can create a new game.

### Enhancing this template

I'll probably come back to this and use it as a basis for some projects, but if you have ways to enhance it, feel free to send pull requests or report/discuss any issues.

### Roadmap

- Merge PIXI and Phaser (can't use Phaser otherwise... Was mostly to figure out RequireJS)
- Add a basic testing framework and folder structure

