# 🌱 Meatless Monday

> **A small change with a massive impact:** An interactive web platform raising awareness about the environmental and health impacts of meat consumption, encouraging student and community participation in the global **Meatless Monday** initiative.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![MUI](https://img.shields.io/badge/Material--UI-9.0-007FFF?logo=mui&logoColor=white)](https://mui.com/)

---

## 📖 About the Project

**Meatless Monday** is an educational, interactive web application developed to inform communities—especially students and campus dining halls—about the hidden environmental costs of meat production and how simple dietary shifts can lead to collective change.

By substituting meat with wholesome, plant-based alternatives just one day a week, individuals and institutions can save millions of liters of water, slash greenhouse gas emissions, and promote cardiovascular well-being.

---

## ✨ Features & Sections

- **🌊 The Real Impact of Meat (`Impact` section)**:
  - An interactive carousel highlighting the real water footprint of common foods (e.g., *1 burger = 2,400 L of water*, *1 kg of beef = 15,415 L of water*).
  - Concrete comparisons to everyday human consumption (drinking water, showers, swimming pools).
- **🌾 The Hidden Water Footprint (`Consumo` section)**:
  - Unpacks the concept of "virtual water" (huella hídrica)—explaining that the vast majority of water is embedded in feed crop irrigation, livestock hydration, stable cleaning, and meat processing.
- **🎯 What is Meatless Monday? (`MeatlessMonday` section)**:
  - Introduces the mission and philosophy of the global initiative, advocating for campus-wide adoption to create collective environmental impact.
- **💧 Savings & Collective Impact (`Ahorro` section)**:
  - Visual projections showing how individual habits compound over time:
    - **1 Monday without meat:** ~2,500 L of water saved (approx. 16 showers).
    - **1 Month:** ~10,000 L of water saved (~14 years of drinking water).
    - **1 Year:** ~160,000 L of water saved (fills 5 domestic pools).
    - **50 Participating Students:** ~8,000,000 L of water saved (fills 3 Olympic-sized pools).
- **🌍 More Reasons to Make the Switch (`Razones` section)**:
  - **Cardiovascular Health:** Decreased risk of cardiovascular disease associated with high consumption of processed meats.
  - **Plant-Powered Living:** Nutritional benefits associated with plant-rich diets and longevity.
  - **Carbon Footprint Reduction:** Livestock farming generates more emissions than global direct transportation combined.
  - **Land & Forest Conservation:** Livestock utilizes ~30% of the world's ice-free land surface and is a leading driver of deforestation.

---

## 🛠️ Tech Stack

- **Frontend Framework:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool:** [Vite](https://vitejs.dev/)
- **Component & UI Styling:**
  - [@mui/material](https://mui.com/) & [@emotion/react](https://emotion.sh/)
  - Custom Responsive CSS & Flexbox/Grid
- **Typography:** [@fontsource/roboto](https://fontsource.org/fonts/roboto)
- **Code Quality:** [ESLint](https://eslint.org/)

---

## 📂 Project Structure

```text
meatless-monday/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Images, graphics, and visual resources
│   ├── components/         # Reusable UI components
│   │   ├── Carousel/       # Custom animated statistical carousel
│   │   ├── Header/         # Hero header and introduction banner
│   │   └── MediaCard/      # Informative stat and feature cards
│   ├── sections/           # Landing page sections
│   │   ├── Ahorro/         # Water savings projection carousel
│   │   ├── Consumo/        # Deep dive into virtual water / water footprint
│   │   ├── Impact/         # Real impact of meat production statistics
│   │   ├── MeatlessMonday/ # Mission and initiative overview
│   │   └── Razones/        # Health and environmental reason cards
│   ├── App.css
│   ├── App.tsx             # Root page layout
│   └── main.tsx            # Application entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18+ recommended) and `npm` installed.

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/angelarivass/meatless-monday.git
   cd meatless-monday
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/` (or the port displayed in your terminal).

### Available Scripts

- `npm run dev` - Starts Vite's hot-reloading development server.
- `npm run build` - Type-checks with `tsc` and compiles production-ready assets into `dist/`.
- `npm run preview` - Locally previews the production build.
- `npm run lint` - Runs ESLint to check for code consistency and errors.

---

## 🤝 Contributing

Contributions, feedback, and suggestions are welcome!
Feel free to open an issue or submit a pull request:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👤 Author

- **Ángela Aguilar Rivas** - [@angelarivass](https://github.com/angelarivass)

---

## 📄 References & Acknowledgments

- [The Meatless Monday Global Movement](https://www.meatlessmonday.com/)
- Water Footprint Network & global environmental statistics regarding livestock water consumption and emissions.
