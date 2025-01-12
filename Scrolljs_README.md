<p align="center">
  <img src="https://github.com/Charmingdc/ScrollJs/blob/0dd4bd3f4113ba3e67ee2f0af75252fde3b43bf9/docs/images/scrollJs.svg" width="140px" height="140px" alt="ScrollJs icon" />
</p>

<h1 align="center"> ScrollJs </h1>
<p align="center"> ScrollJs is a lightweight and easy to use javascript library that allows you to add scroll triggered animations (AOS) with optional callback functions and also lazy load your images to make your website more optimize.
</p>

<p align="center">
While other scroll triggered animation library offer predefined animation classes not giving full control and how you want your animations to display, ScrollJs allows you to use your already styled animation class.
</p>

# Installation 

## Browser
A simple and fast way to get started is to include this script on your page

``` html
<script src="https://cdn.jsdelivr.net/gh/Charmingdc/ScrollJs@main/scroll.min.js"></script>
```
This will create the global variable `ScrollObserver`

## Module
``` bash
$ npm install @charmingdc/scrolljs
```


### CommonJs
``` js
const ScrollObserver = require('@charmingdc/scrolljs')
```

### ES2015
``` js
import ScrollObserver from '@charmingdc/scrolljs'
```

<br />

# Usage

Installation provides us with the constructor function `ScrollObserver` Calling this function returns the ScrollObserver instance, the “brain” behind the magic.
> ScrollObserver employs the singleton pattern; no matter how many times the constructor is called, it will always return the same instance. This means we can call it anywhere, worry-free.

There’s a lot we can do with this instance, but most of the time we’ll be using the observer() method to create animation. Fundamentally, this is how to use ScrollObserver:

`HTML`
``` html
<div class='card'>
 Demo Card
</div>
```

<br />

`CSS`
``` css
.card {
  width: 4rem;
  height: 6rem;
  background-color: blue;
  border-radius: 1rem;
  transform: translateX(-1rem);
  transition: 200ms;
}

.fade-in {
  transform: translateX(0rem);
  transition: 200ms;
} /* Animation to display when element enters viewport */
```

<br />

`JAVASCRIPT`
``` js

ScrollObserver().observe()
```
or store the `ScrollObserver` instance to a variable 

``` js
const observer = ScrollObserver()
observer.observe()
```

<br />

### The full documentation can be found at [https://scrolljs.vercel.app](https://scrolljs.vercel.app)

<br />

# License
Licensed under the MIT license for open source projects
