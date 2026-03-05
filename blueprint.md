# Lotto Number Generator

## Overview

A simple, visually appealing web application to generate random lottery numbers (6 numbers from 1 to 45). The application features a clean, modern design using Web Components and modern CSS (Baseline).

## Project Outline

### Style and Design

*   **Layout:** Centered, responsive layout using CSS Grid/Flexbox.
*   **Color Palette:**
    *   **Light Mode:**
        *   Background: `oklch(95% 0.01 260)`
        *   Surface: `rgba(255, 255, 255, 0.7)`
    *   **Dark Mode:**
        *   Background: `oklch(20% 0.02 260)`
        *   Surface: `rgba(30, 41, 59, 0.7)`
    *   **Common:**
        *   Primary: `oklch(60% 0.15 250)` (Vibrant Blue).
        *   Accent: Various `oklch` colors for lottery balls.
*   **Theme Toggle:** A dedicated toggle button to switch between Light and Dark modes, with persistent state using `localStorage`.
*   **Typography:** Expressive sans-serif typography with emphasized font sizes for the title and numbers.
*   **Visual Effects:**
    *   **Glassmorphism:** Multi-layered drop shadows and semi-transparent backgrounds for cards.
    *   **Animations:** Smooth transitions when numbers are revealed.
    *   **Interactivity:** Buttons with glow effects and hover transitions.
*   **Modern CSS:** Container queries, `:has()` selector, and logical properties.

### Features

*   **Number Generation:**
    *   Generates 6 unique random numbers between 1 and 45.
    *   Numbers are automatically sorted in ascending order.
*   **User Interface:**
    *   `lotto-generator` Web Component for encapsulation.
    *   Visual representation of numbers as colorful balls.
    *   "Generate" button with interactive feedback.
    *   Responsive design for mobile and web.

## Current Plan

1.  **Refine `index.html`**: Simplify the structure and use the `<lotto-generator>` custom element.
2.  **Update `style.css`**: Define global variables, base typography, and the noise texture background.
3.  **Implement `main.js`**:
    *   Define the `LottoGenerator` class extending `HTMLElement`.
    *   Implement the random number generation logic (6 unique numbers, 1-45).
    *   Add styling and structure within the Shadow DOM.
    *   Handle the button click event to update the display.
4.  **Verification**: Ensure the application works correctly in the preview and check for any console errors.
