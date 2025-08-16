# Naresh Pentapati - Personal Portfolio Website

A React-based portfolio website showcasing the work and expertise of Naresh Pentapati, a UX Leader specializing in public safety systems and enterprise UX solutions.

🌐 **Live Website**: [https://nareshpentapati.in](https://nareshpentapati.in)

## About

This portfolio showcases 10+ UX projects spanning across:

- **Public Safety & GovTech**: Emergency management, law enforcement, and citizen safety solutions
- **Enterprise UX**: Insurance and banking applications, particularly Pega-based systems
- **Design Leadership**: UX strategy, design systems, and organizational transformation

## Features

- ✨ **Interactive Portfolio**: Filterable project showcase with detailed case studies
- 📱 **Responsive Design**: Mobile-first approach with smooth animations
- 🎨 **Personal Gallery**: Interactive photo grid showcasing interests beyond design
- 📝 **Blog System**: Articles on UX strategy, design leadership, and industry insights
- 🎭 **Smooth Animations**: Framer Motion and AOS for engaging user experience

## Tech Stack

- **Frontend**: React 19.1.0, React Router 7.5.3
- **Build Tool**: Create React App with CRACO for webpack customization
- **Styling**: CSS Modules with custom animations
- **Libraries**:
  - Framer Motion (animations)
  - React Markdown (blog content)
  - React Icons (UI icons)
  - AOS (scroll animations)
  - React CountUp (animated statistics)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nareshacharya/website.git
   cd website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

### `npm start`

Runs the app in development mode with hot reloading.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run deploy`

Builds and deploys the app to GitHub Pages.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AnimatedCompetencies.js
│   ├── Certifications.js
│   ├── Footer.js
│   ├── HeroMinimal.js
│   ├── Navbar.js
│   └── ...
├── pages/              # Main page components
│   ├── Home.js
│   ├── About.js
│   ├── Portfolio.js
│   ├── Blogs.js
│   ├── Contact.js
│   ├── blogs/          # Blog detail pages
│   └── projects/       # Project case study pages
└── App.js             # Main app component with routing
```

## Deployment

The website is automatically deployed to GitHub Pages using the `gh-pages` package. To deploy:

```bash
npm run deploy
```

## Portfolio Highlights

### Public Safety Projects

- **Crowd Management**: Real-time crowd monitoring with GIS and event operations
- **Disaster Management**: Emergency resource mapping and response planning
- **Crime Analytics**: Predictive insights with heatmaps and data visualization
- **Investigation Analytics**: Link analysis and case mapping for law enforcement

### Enterprise UX Projects

- **Crum & Forster**: Pega Constellation-aligned underwriting workbench
- **TAL Insurance**: Service and underwriting portal redesign
- **ASB**: UX assessment and design system standardization

## Contact

- **Email**: pentapati.naresh@gmail.com
- **LinkedIn**: [linkedin.com/in/naresh-pentapati](https://linkedin.com/in/naresh-pentapati)
- **GitHub**: [github.com/nareshacharya](https://github.com/nareshacharya)

## License

This project is personal portfolio website. All content and designs are proprietary.
