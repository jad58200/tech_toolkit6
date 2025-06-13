# 🚀 Jad Space Portfolio

This project is an interactive, space-themed personal portfolio built with HTML, CSS, and JavaScript. It features animated star effects, a custom landing interaction, a responsive sticky navigation header, and a mobile-friendly menu toggle.

## 🌌 Features

### 🌠 Animated Star Background
- Dynamically generates 150 stars using JavaScript.
- Stars appear at random positions and sizes for a natural space look.
- Enhances visual appeal with a twinkling effect (optional via CSS).

### 🚀 Landing Interaction
- Upon clicking the `START YOUR JOURNEY` button:
  - Hides the intro screen.
  - Shows a landing animation screen for 2 seconds.
  - Transitions to the main section of the site.

### 📌 Sticky Navigation Header (Desktop)
- Sticky header appears only when the user scrolls **up** past 100px on screens wider than 768px.
- Dynamically clones the original logo and navigation to insert into a fixed header.
- Smoothly hides the header when scrolling down for a cleaner UX.

### 📱 Responsive Mobile Menu
- Hamburger menu (`#menuBtn`) opens a full-screen navigation panel.
- Close button (`#closeBtn`) hides the menu and restores page scrolling.
- Clicking any navigation link automatically closes the menu and resumes scrolling.

### 💡 Other Features
- Scroll locking is applied on mobile when the menu is open to prevent background interaction.
- Clean separation of logic for DOM manipulation, event listeners, and UI transitions.

## 🛠️ Technologies Used

- **HTML5** – Markup structure.
- **CSS3** – Styling, animations, and layout responsiveness.
- **JavaScript (ES6)** – Dynamic UI interactions and DOM manipulation.

## 📁 Project Structure (Simplified)

index.html
style.css
script.js <-- Your JavaScript logic
README.md
assets/ <-- Images, icons, etc.


## ⚙️ How It Works

1. **Stars Generation**:
   - Creates 150 `<div class="star">` elements.
   - Positions them randomly within the viewport.
   - Adds varying sizes to simulate distance.

2. **Intro to Main Transition**:
   - `#my-btn` triggers a transition through:
     - `.intro` → `.landing-screen` → `.main-section`.

3. **Sticky Header**:
   - Only activates on desktop.
   - Appears on scroll-up behavior using `window.scroll` detection.
   - Uses cloned elements from the initial header to avoid duplication in HTML.

4. **Mobile Navigation**:
   - Menu button toggles `navbar` visibility and disables body scroll.
   - Close button or nav link click resets UI state.

## 📌 Notes

- Be sure to hide elements like `.intro`, `.landing-screen`, and `.main-section` using classes or CSS visibility for smoother transitions instead of using `display: none`.
- You can improve the star animation with CSS `@keyframes` to create a twinkling effect.
- Use CSS transitions for the sticky header for better UX.

## 📷 Preview

> https://vercel.com/jad58200s-projects

## 👨‍💻 Author

**Jad** – Frontend Developer and Creator of *Jad Space Portfolio*  
A passionate learner building creative and interactive user interfaces using HTML, CSS, and JavaScript, reactJS.

---