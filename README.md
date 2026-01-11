# Professional Portfolio - Karthikeyan R

A modern, responsive, and professional portfolio website built with React and Vite. Designed to showcase skills, projects, education, and experience to potential employers and HR professionals.

## 🌟 Features

- **Modern Design**: Clean, professional UI with glassmorphism effects and smooth animations
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Elements**: Typewriter effect, animated progress bars, hover effects
- **SEO Optimized**: Proper meta tags and semantic HTML for better search engine visibility
- **Performance**: Fast loading times with Vite's optimized build system
- **Smooth Navigation**: Scroll-based navigation with smooth transitions

## 📋 Sections

1. **Hero** - Introduction with typewriter effect and key statistics
2. **About** - Personal introduction and focus areas
3. **Experience** - Hackathons and achievements timeline
4. **Skills** - Categorized skills with animated progress bars
5. **Projects** - Featured projects with filtering capability
6. **Education** - Academic background and qualifications
7. **Contact** - Multiple ways to get in touch
8. **Footer** - Social links and quick navigation

## 🚀 Technologies Used

- **React 18** - Modern UI library
- **Vite** - Next-generation frontend tooling
- **CSS3** - Custom styling with CSS variables
- **Google Fonts** - Inter & Space Grotesk fonts
- **Modern JavaScript (ES6+)** - Latest JavaScript features

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd professional-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5174`

## 🛠️ Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
professional-portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Main App component
│   ├── App.css         # App styles
│   ├── index.css       # Global styles & design system
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── package.json        # Dependencies
└── vite.config.js      # Vite configuration
```

## 🎨 Customization

### Update Personal Information

1. **Contact Details**: Edit `src/components/Contact.jsx`
2. **Projects**: Update `src/components/Projects.jsx`
3. **Skills**: Modify `src/components/Skills.jsx`
4. **Education**: Change `src/components/Education.jsx`
5. **Experience**: Update `src/components/Experience.jsx`

### Color Scheme

The color scheme is defined in `src/index.css` using CSS variables:

```css
:root {
  --color-primary: #6366f1;
  --color-secondary: #ec4899;
  --color-accent: #14b8a6;
  /* ... more variables */
}
```

## 📱 Responsive Breakpoints

- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px

## 🌐 Deployment

This portfolio can be deployed to various platforms:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package
- **Any static hosting**: Upload the `dist` folder

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Karthikeyan R**
- Email: karthikeyan29.5.2006@gmail.com
- LinkedIn: [karthikeyan-r](https://linkedin.com/in/karthikeyan-r-linkedin)
- GitHub: [karth_2905](https://github.com/karth_2905)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from inline SVG
- Fonts from Google Fonts (Inter & Space Grotesk)

---

Built with ❤️ by Karthikeyan R
