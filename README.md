# Social Media Dashboard with Theme Switcher 🌙🌞

This is a solution to the [Frontend Mentor challenge](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). The challenge is to build a responsive social media dashboard with a dark/light mode toggle.

## ✨ Features

- Responsive layout for desktop and mobile
- Light/Dark mode toggle
- State of the theme is saved in **Local Storage**
- Built using **React**

## 🔧 Technologies Used

- React (with functional components and hooks)
- CSS Modules / SCSS / styled-components *(optional, depending on your stack)*
- Local Storage API

## 📦 Live Demo

Check out the live demo here:  
🔗 [GitHub Pages Demo](https://anastasiiiii.github.io/social-media-dashboard-with-theme-switcher/)
</br>

## 🎥 Preview

![](/assets/social-media-dashboard.gif)

</br>

## 📁 How to Run Locally

1. **Clone the repository:**
   
   ```bash
   git clone https://github.com/yourusername/social-media-dashboard-with-theme-switcher.git
   
3. **Install dependencies:**
   
   ```bash
   npm install
   
5. **Run the app:**
   
   ```bash
   npm start

</br>

## 💾 How Theme Persistence Works
The app uses localStorage to store the theme preference. When the user toggles between light and dark mode, the preference is saved, and on next visit, the app reads from localStorage to apply the selected theme automatically.
