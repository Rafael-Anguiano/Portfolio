# Portfolio

## Description
This is my ***Portfolio***, a *website* to introduce my self, specifyng some projects, works and ways to contact me.
 - Made in React using Javascript, HTML and CSS.
 - Based on a Youtube tutorial.
 - Used to learn more about React and CSS.

---

## Installation
To install this repository correctly follow the next steps.

First of all, in the terminal put the next code to clone this repository:

```sh
    git clone https://github.com/Rafael-Anguiano/Portfolio.git
    cd Portfolio/
```

The next step is install the dependencies and node-modules.

```sh
    npm install
```

Once you have installed the dependencies, you are ready to start simulating and editing some code. To run this app run the next command in the terminal (Be sure you are in the correct directory).

```sh
    npm start
```

---
## Firebase

To make a deploy of a website on Firebase we need to configure some things.

1.  First of all, we need to install firebase tools globaly using npm.
```sh
npm install -g firebase-tools
```

2.  Now, let´s login into firebase in out terminal using the next command.

```sh
firebase login
```
> If the command didn´t work, you can execute it using the property `--interactive` as:

```sh
firebase login --interactive
```
> Or in any case do a `logout` before.


 3.  Now we pass to configure and setup the connection of our project and the firebase hosting
```sh
firebase init
```
> You can use it as `firebase init hosting` to skip the steps of selecting the hosting services.

4.  Now is better to make a ***build*** before to make a deploy of our application, for this we need to run the next command: 

```sh
npm run build
```

5. Finally, we are ready to do a deploy using the next command:
```sh
firebase deploy
```
> En el deploy encontraremos 2 links que nos servirán y serán donde estará nuestra applicación.

---

## Notes:
 - There's no notes for now.

---

## Developed By:
 Rafael de Jesús Anguiano Suárez del Real (September 2021)

