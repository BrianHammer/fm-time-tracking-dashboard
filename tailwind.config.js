/**
 * # Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors

### Primary

- Blue: hsl(246, 80%, 60%)

- Light red (work): hsl(15, 100%, 70%) // This is orange not red
- Soft blue (play): hsl(195, 74%, 62%)
- Light red (study): hsl(348, 100%, 68%)
- Lime green (exercise): hsl(145, 58%, 55%)
- Violet (social): hsl(264, 64%, 52%)
- Soft orange (self care): hsl(43, 84%, 65%) // This is clearly yellow, not orange

### Neutral

- Very dark blue: hsl(226, 43%, 10%)
- Dark blue: hsl(235, 46%, 20%)
- Desaturated blue: hsl(235, 45%, 61%)
- Pale Blue: hsl(236, 100%, 87%)

## Typography

### Body Copy

- Font size: 18px (card titles e.g. Work, Play)

### Font

- Family: [Rubik](https://fonts.google.com/specimen/Rubik)
- Weights: 300, 400, 500

> 💎 [Upgrade to Pro](https://www.frontendmentor.io/pro?ref=style-guide) for design file access to see all design details and get hands-on experience using a professional workflow with tools like Figma.

 * 
 */




/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],

  theme: {
    colors: {

      //Primary
      "blue": "hsl(246, 80%, 60%)",
      "white": "#ffffff",
      //Secondary
      "light-orange": "hsl(15, 100%, 70%)",
      "light-blue": "hsl(195, 74%, 62%)",
      "light-red":"hsl(348, 100%, 68%)",
      "lime-green": "hsl(145, 58%, 55%)",
      "violet": "hsl(264, 64%, 52%)",
      "light-yellow": "hsl(43, 84%, 65%)",

      // Neutral
      "very-dark-blue": "hsl(226, 43%, 10%)",
      "dark-blue": "hsl(235, 46%, 20%)",
      "desaturated-blue": "hsl(235, 45%, 61%)",
      "pale-blue": "hsl(236, 100%, 87%)"
    },
    fontFamily:{"main": "Rubik"},
    fontWeight: {
      "semi-light": "300",
      "medium": "400",
      "semi-bold": "500",
    },
    extend: {},
  },
  plugins: [],
}

