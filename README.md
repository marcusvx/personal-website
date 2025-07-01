# Marcus Vinicius - Personal Website

A modern, responsive personal website and portfolio built with Astro, React, and Tailwind CSS. Showcasing 18+ years of software development experience, technical skills, and professional achievements.

🌐 **Live Site**: [marcusvinicius.info](https://marcusvinicius.info)

## ✨ Features

- **🎨 Dark/Light Mode**: Toggle between themes with preference persistence
- **📱 Responsive Design**: Optimized for all device sizes
- **⚡ Fast Performance**: Built with Astro for optimal loading speeds
- **🔧 Interactive Components**: React-powered dynamic elements
- **📄 Professional Resume**: Complete career history with expandable experience sections
- **🎯 Modern UI/UX**: Clean design with smooth animations and transitions
- **🚀 Static Deployment**: Optimized for Cloudflare Pages hosting

## 🛠 Tech Stack

- **[Astro](https://astro.build)** - Static Site Generator
- **[React](https://reactjs.org)** - Interactive Components
- **[Tailwind CSS](https://tailwindcss.com)** - Styling Framework
- **[TypeScript](https://www.typescriptlang.org)** - Type Safety
- **[Cloudflare Pages](https://pages.cloudflare.com)** - Deployment Platform

## 🚀 Project Structure

```text
/
├── public/
│   ├── assets/
│   │   ├── meta.png           # Social media preview image
│   │   └── photo.jpg          # Professional photo
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── img/               # Image assets
│   ├── components/
│   │   ├── About.tsx          # About section
│   │   ├── Contact.tsx        # Contact form & info
│   │   ├── Header.tsx         # Navigation & theme toggle
│   │   └── Hero.tsx           # Landing section
│   ├── layouts/
│   │   └── BaseLayout.astro   # Main layout with theme logic
│   └── pages/
│       └── index.astro        # Main page
├── astro.config.mjs           # Astro configuration
├── tailwind.config.js         # Tailwind configuration
└── package.json
```

## 🧞 Development Commands

All commands are run from the root directory:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install dependencies                             |
| `npm run dev`             | Start local dev server at `localhost:4321`      |
| `npm run build`           | Build production site to `./dist/`              |
| `npm run preview`         | Preview build locally before deploying          |
| `npm run astro ...`       | Run Astro CLI commands                           |
| `npm run astro -- --help` | Get help with Astro CLI                         |

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/marcusvinicius/personal-website.git
   cd personal-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 🎯 Key Sections

- **Hero**: Dynamic introduction with rotating job titles
- **About**: Professional background and personal story
- **Skills**: Technical expertise and tools
- **Experience**: Complete career history (18+ years) with toggle for earlier positions
- **Projects**: Featured work and achievements
- **Contact**: Professional contact information and social links

## 🌙 Theme System

The website features a sophisticated dark/light theme system:

- **Default**: Dark mode for modern appeal
- **Toggle**: Seamless switching via header button
- **Persistence**: Remembers user preference in localStorage
- **Icons**: Dynamic sun/moon icons that reflect current state

## 📱 Responsive Design

Fully responsive design optimized for:
- 📱 Mobile devices (320px+)
- 📟 Tablets (768px+)  
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1280px+)

## 🚀 Deployment

This site is optimized for static deployment on Cloudflare Pages:

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting platform
3. For Cloudflare Pages: Connect your GitHub repository and deploy automatically

## 📞 Connect

- **Website**: [marcusvinicius.info](https://marcusvinicius.info)
- **LinkedIn**: [linkedin.com/in/marcusvx](https://linkedin.com/in/marcusvx)
- **GitHub**: [github.com/marcusvinicius](https://github.com/marcusvinicius)
- **Email**: [marcus@marcusvinicius.info](mailto:marcus@marcusvinicius.info)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by [Marcus Vinicius Ximenes](https://marcusvinicius.info)
