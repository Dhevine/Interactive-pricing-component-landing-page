# Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8).

## Table of contents

- [Interactive pricing component solution](#interactive-pricing-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers
- Fix cross browser compatibility issues

### Screenshot

![Picture of the project](./images/screenshot.png)
### Links

- Live Site URL: [interactive pricing component landing page](https://interactive-pricing-component-page.netlify.app)

### Built with

- Semantic HTML5 markup
- CSS Grid
- Mobile-first workflow

### What I learned

I learnt how to use CSS support property to tweak some styles on different browser

```css
@supports (-moz-appearance: none){
  #range::-moz-range-thumb{
    background: none;
  }
}
```
### Useful resources

- [Caniuse](https://caniuse.com/css-supports-api) - This helped me check for browsers compatibility for CSS support property. 

## Author
- Twitter - [Dhevine_0X](https://www.twitter.com/Dhevine_0X)
