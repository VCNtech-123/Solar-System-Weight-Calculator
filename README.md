# Solar System Weight Calculator

An interactive web application that calculates an object's weight on different planets within our solar system. This project demonstrates the practical application of JavaScript logic to solve physics-based problems in a browser environment.

## 🚀 Features
* **Planet Selection:** Choose from various celestial bodies in the solar system.
* **Dynamic Calculations:** Computes weight based on the specific gravitational pull of the selected planet.
* **Visual Elements:** Features planet imagery to provide a more engaging and educational experience.
* **Responsive Layout:** A clean, centered UI that works across different screen sizes.

## 🛠️ Tech Stack
* **HTML5:** Semantic structure and user input fields.
* **CSS3:** Custom styling to create a modern, "space-themed" aesthetic.
* **JavaScript (ES6+):** Core logic for gravitational calculations and DOM manipulation.

## 🧮 The Logic
The app converts your weight on Earth to your weight on another planet using the target planet's gravity relative to Earth's.

**The Formula:**
$$Weight_{Planet} = Weight_{Earth} \times \left( \frac{Gravity_{Planet}}{Gravity_{Earth}} \right)$$

## 📂 Project Structure
```text
Solar-System-Weight-Calculator/
├── images/          # Planet assets and background images
├── index.html       # Main application structure
├── main.js          # Gravitational data and calculation logic
└── style.css        # UI styling and layout
