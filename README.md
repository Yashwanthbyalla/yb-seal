# SEAL - Scroll Effect Animation Library
This is a light weight Scroll Effect Animation Library.


Lightweight, performance focused (**2.8 kb**) scroll effect animation library, written in Typescript and compiled to JavaScript. No dependencies!

**Seal** (_Scroll Effect Animation Library_) was created to provide a lightweight solution for animating elements upon scroll. It's based on DOM objects which gives amazing performance in terms of checking the element's presence in the viewport.

## Demos
- [SEAL - Scroll Effect Animation Library](https://yashwanthbyalla.github.io/yb-seal-demo/)
- [MAC - Multi Avatar Cluster](https://yashwanthbyalla.github.io/yb-seal-mac-demo/)
### 🚀 [Demo](https://yashwanthbyalla.github.io/yb-seal-demo/)

## Table of Contents
- [Install](#install)
- [Usage](#usage)
- [Options](#options)
- [Animations](#animations)

## Install

```sh
# Usage with NPM
$ npm install yb-seal

```

Load it with your favorite module loader or use as a global variable

```js
// ES6 modules
import seal from 'yb-seal';

or
// CommonJS modules
var seal = require('yb-seal');

or
//simply add below line in angular.json file under scripts array:

"node_modules/yb-seal/src/index.js"

```

To better make use of Tree shaking, there is no need to import the entire package. For instance, if you are intended to use 'Multi Avatar Cluster', then just import 'yb-mac.css' and vice versa.

```scss
@import '~yb-seal/src/yb-seal.css';
@import '~yb-seal/src/yb-mac.css';

or

// add below line in angular.json file under styles array:
"node_modules/yb-seal/src/yb-seal.css"
"node_modules/yb-seal/src/yb-mac.css"

```

## Usage

In HTML, add a `yb-seal` class to make sure it tracks the respective element and behave accordingly with the scroll. Along with this add the animation name as value, for example:

```html
<div class="yb-seal yb-seal-slide-right"></div>
```

It will look for all classes with a `yb-seal` class and launch it's respective animation based on viewport scroll.

## Options
In **seal** you can easily change animation's duration, delay and timing functions by adding a proper `yb-seal` attributes:
- `yb-seal-duration` - changes duration of the animation (enter value in seconds)

For example:
```html
<div
    class="yb-seal yb-seal-slide-right" yb-seal-duration="2"
></div>
```

- `yb-seal-delay` - delays the animation for the transition effect (enter value in seconds)

For example:
```html
<div
    class="yb-seal yb-seal-slide-right" yb-seal-delay="2"
></div>
```

- `yb-seal-timing` - specifies the speed curve of the transition effect

For example:
```html
<div
    class="yb-seal" yb-seal-timing="ease" yb-seal-timing-width="500"
></div>
```
Below are the possible values:
- `ease` - specifies a transition effect with a slow start, then fast, then end slowly (this is default)
- `ease-in` - specifies a transition effect with a slow start
- `ease-out` - specifies a transition effect with a slow end
- `ease-in-out` - specifies a transition effect with a slow start and end
- `linear` - specifies a transition effect with the same speed from start to end

- `yb-seal-timing-width` - It can be any number which upon hovering the element should be assigned with

## Animations
The library supports several animations:
- `yb-seal-slide-up`
- `yb-seal-slide-down`
- `yb-seal-slide-right`
- `yb-seal-slide-left`
- `yb-seal-zoom-in`
- `yb-seal-zoom-out`
- `yb-seal-flip-left`
- `yb-seal-flip-right`
- `yb-seal-flip-up`
- `yb-seal-flip-down`


## Usage for MAC [Multi Avatar Cluster]

Use 'yb-mac-container' class to initiate the effects from the library. [Check the corresponding demo for better clarity of the usage]

```html
<div class="yb-mac-container">
    <img src="./images/alarm.png" alt="Alarm">
    <img src="./images/asteroid.png" alt="Asteroid">
    <img src="./images/memory.jpg" alt="Memory">
    <img src="./images/tricky.png" alt="Brain">
</div>
```
