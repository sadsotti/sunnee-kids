# 🌊 Sunnee Kids - Bottle Configurator

A vibrant, eco-friendly, and interactive 3D-style bottle configurator, built with Vue.js. This application allows users to customize their own sustainable water bottle made from 100% recycled marine plastic. Created as the second project for the Vue.js course in the "Full Stack Development and AI" Master by start2impact.

---

## 🔗 Try It Live!

Click the link below:

👉 [**Sunnee Kids**](https://sunnee-kids.netlify.app/) 👈

---

## 🎯 Project Goal

The primary objective of this project was to build a Multi-Step Single Page Application (SPA) using Vue Router and advanced State Management.

The focus was on creating a seamless customization experience where the user's choices are reflected in real-time on a dynamic visual preview.

Key technical challenges included managing a shared global state across different views, implementing smooth route transitions, and designing a responsive, "app-like" interface that feels tactile and modern.

---

## ✨ Implemented Features

* **Interactive Multi-Step Configurator:** A guided 3-phase process (Cap, Body, Bottom) to build a custom bottle.
* **Real-time Global Preview:** A shared `BottlePreview` component that updates instantly as colors are selected.
* **Dynamic Routing:** Leverages `vue-router` with dynamic segments (`/configurator/:step`) to manage the user journey.
* **Global State Management:** Uses a centralized `store.js` with Vue's `reactive` API to maintain consistency across all views.
* **Eco-Mission Branding:** Integrated messaging focused on sustainability and recycled marine plastic.
* **Responsive & Mobile-First:** Fully optimized layout for desktops, tablets, and smartphones.
* **Smooth Transitions:** CSS-based fade and pop animations for a fluid navigation experience.
* **Summary & Success Modal:** A final recap of the customized product with a celebratory completion trigger.

---

## 🛠️ Technologies Used

* **Vue.js 3** with **Vue Composition API**
* **Vue Router** for SPA navigation management.
* **Vite** as the lightning-fast build tool and development server.
* **CSS3 & Scoped Styles:** Utilizes Flexbox, Grid, and custom animations.
* **Google Fonts:** Playful and bold typography to match the "Kids" brand identity.

---

## 🚀 How to Run the Project Locally

Follow these steps to clone the repository and run the project:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sadsotti/sunnee-kids.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd sunnee-kids
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```

5.  **Create the production build:**
    ```bash
    npm run build
    ```

---

## 📂 Project Structure

* `dist/`: Output folder for the optimized production build.
* `public/`: Static assets (favicon, logo).
* `src/`: Vue source code.
    * `components/`: Reusable components like `BottlePreview.vue`.
    *  `views`: Main page views (`HomeView.vue`, `ConfiguratorView.vue`, `SuccessView.vue`).
    *  `router`: Configuration for vue-router (`index.js`).
    *  `store`: Centralized reactive state (`store.js`).
    * `assets/`: Global styles and static assets (`main.css`).
* `index.html`: The entry point for Vite.
* `vite.config.js`: **Vite** configuration file (defines plugins, build options, etc.).
* `package.json`: Defines the project dependencies and scripts.
* `README.md`: This project description file.

---

### ✨ Implemented Solution (Architecture)

The project follows a modular architecture designed for **scalability** and **state consistency**:

1.  **Reactive Store:** Instead of prop-drilling, the bottle's color state is stored in a standalone `store.js`. This allows the `BottlePreview` component to remain "synced" whether it's on the Home, Configurator, or Success page.
2.  **Dynamic Configurator:** A single `ConfiguratorView` adapts its content (labels and targets) based on the `:step` parameter in the URL, reducing code duplication.
3.  **Visual Depth:** The bottle is rendered using pure CSS shapes and gradients, ensuring high performance and scalability without the need for heavy 3D assets.

---

## 🔗 Useful Links

* [start2impact](https://www.start2impact.it/)
* [My LinkedIn](https://linkedin.com/in/lorenzo-sottile)
