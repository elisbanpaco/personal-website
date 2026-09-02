# Elisban Pacco — Engineering Portfolio & Archive

A high-performance, minimalist personal portfolio and engineering archive built to showcase backend architectures, applied machine learning systems, and C++ algorithmic engines.

![Astro](https://img.shields.io/badge/Astro-0C1120?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)
![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

## 🎨 Design Inspiration

The visual language, minimalist typography, and sleek monochromatic archival table are heavily inspired by the phenomenal portfolio of [Brittany Chiang](https://brittanychiang.com/). The goal was to adopt a clean, distraction-free aesthetic that allows complex engineering work to speak for itself without the noise of heavy UI elements.

## 🏗️ Architecture & Tech Stack

This project is engineered for speed and maintainability:
- **Astro**: Leveraged for its zero-JS-by-default architecture, providing perfect Lighthouse scores and instantaneous page loads.
- **Tailwind CSS**: For strict, utility-first styling without external CSS bloat.
- **TypeScript**: Ensuring strict type safety across project data schemas and component props.

## 🚀 Local Development

Want to explore the code or fork this for your own portfolio? It's easy to get started.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/elisbanpaco/personal-website.git
   cd personal-website
   ```

2. **Install dependencies (pnpm recommended):**
   ```bash
   pnpm install
   ```

3. **Start the local development server:**
   ```bash
   pnpm dev
   ```
   Navigate to `http://localhost:4321` to see the site live.

## 🛠️ Making it Your Own

If you fork this repository, you don't need to hunt through HTML to change the content. Everything is statically driven by type-safe data files.

Simply update the data structures in the `src/data/` directory:
- `src/data/profile.ts`: Update your name, bio, social links, and current tech stack.
- `src/data/projects.ts`: Add your own projects, links, and technologies.
- `src/data/experience.ts`: Map out your career timeline.

## 📄 License

The codebase is open-sourced under the MIT License. Feel free to use the code, but please ensure you replace all personal data, projects, and images with your own before deploying. And if you use the design, don't forget to pass on the credit to Brittany Chiang!
