# SEAL - Scroll Effect Aanimation Library
This is a light weight Scroll Effect Animation Library.


Lightweight, performance focused (**2.3 kb**) scroll effect animation library, written in Typescript and compiled to JavaScript. No dependencies!

**Seal** (_Scroll Effect Animation Library_) was created to provide a lightweight solution for animating elements upon scroll. It's based on DOM objects which gives amazing performance in terms of checking the element's presence in the viewport.


## Table of Contents
- [Install](#install)
- [Usage](#usage)
- [Animations](#animations)

## Install

```sh
# Usage with NPM
$ npm install seal

```

Load it with your favorite module loader or use as a global variable

```js
// ES6 modules
import seal from 'seal';

// CommonJS modules
var seal = require('seal');
```

And remember to add styles

```scss
// Webpack
@import '~seal/src/y-seal.css';
```

## Usage

In HTML, add a `y-seal` class to make sure it tracks the respective element and behave accordingly with the scroll. Along with this add the animation name as value, for example:

```html
<div class="y-seal y-seal-slide-right"></div>
```

Then simply add below line in angular.json file under scripts array:

```js
"node_modules/seal/src/index.js"
```

It will look for all classes with a `y-seal` class and launch it's respective animation based on viewport scroll.

## Animations
In **seal** you can easily change animation's classes, by adding a proper `y-seal` classes:
- `y-seal-duration` - changes duration of the animation (enter value in seconds)

For example:
```html
<div
    class="y-seal y-seal-slide-right" y-seal-duration="2"
></div>
```

The library supports several animations:
- `y-seal-slide-up`
- `y-seal-slide-down`
- `y-seal-slide-right`
- `y-seal-slide-left`
- `y-seal-zoom-in`
- `y-seal-zoom-out`
- `y-seal-flip-left`
- `y-seal-flip-rightt`
- `y-seal-flip-up`
- `y-seal-flip-bottom`
