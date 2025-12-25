# Portfolio - Refactored & Optimized

A modern, performant, and accessible portfolio website built with React, showcasing projects and skills with stunning 3D animations.

## 🚀 Recent Improvements

This portfolio has been completely refactored with the following enhancements:

### ✨ Code Organization
- **Reduced complexity**: Refactored from a single 1,374-line file to 20+ modular components
- **Better maintainability**: Clean separation of concerns with dedicated folders for sections, 3D components, and utilities
- **Reusable components**: Extracted common patterns into reusable components

### ⚡ Performance Optimization
- **Lazy loading**: All sections and 3D components load on-demand
- **Error boundaries**: Graceful error handling prevents app crashes
- **Code splitting**: Reduced initial bundle size for faster load times
- **Optimized animations**: Efficient 3D rendering and particle effects

### ♿ Accessibility
- **ARIA labels**: Comprehensive screen reader support
- **Keyboard navigation**: Full keyboard accessibility throughout
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Focus management**: Clear focus indicators and logical tab order

### 🔧 Code Quality
- **PropTypes validation**: Type checking for all components
- **Constants extraction**: Centralized configuration management
- **Environment variables**: Secure credential management
- **Error handling**: Robust error handling throughout

### 📧 Contact Form
- **EmailJS integration**: Client-side email sending (no backend required)
- **Form validation**: Built-in validation and error handling
- **Loading states**: User feedback during submission
- **Toast notifications**: Success/error notifications

## 📁 Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── 3d/                    # 3D model components
│   │   │   ├── HeroAnimation.jsx
│   │   │   ├── OrganDonationModel.jsx
│   │   │   ├── AIAgentModel.jsx
│   │   │   ├── CodeReviewModel.jsx
│   │   │   ├── SummarizerModel.jsx
│   │   │   └── Scene.jsx
│   │   ├── sections/              # Page sections
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── SkillsSection.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── EducationSection.jsx
│   │   │   └── ContactSection.jsx
│   │   ├── ErrorBoundary.jsx      # Error handling
│   │   ├── Navigation.jsx         # Main navigation
│   │   ├── Footer.jsx             # Footer component
│   │   ├── ProjectModal.jsx       # Project details modal
│   │   └── Toast.jsx              # Notification component
│   ├── constants/
│   │   └── constants.js           # App configuration
│   ├── data/
│   │   └── projects.js            # Project data
│   ├── assets/                    # Images and textures
│   └── pages/
│       └── Home.jsx               # Main page orchestrator
├── .env.example                   # Environment variables template
├── EMAILJS_SETUP.md              # EmailJS configuration guide
└── package.json
```

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion, React TSParticles
- **Routing**: React Router DOM v7
- **Email**: EmailJS
- **Type Checking**: PropTypes

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd Portfolio/client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up EmailJS (for contact form):
   - See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for detailed instructions
   - Copy `.env.example` to `.env`
   - Add your EmailJS credentials

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser to `http://localhost:5173`

## 📧 EmailJS Configuration

The contact form uses EmailJS for sending emails. To configure:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service and template
3. Copy your credentials to `.env`:
   ```env
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   ```

See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for step-by-step instructions.

## 🏗️ Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

## 📱 Features

- **Responsive Design**: Works seamlessly on all devices
- **3D Earth Animation**: Interactive rotating Earth with satellites
- **Particle Effects**: Dynamic particle background
- **Project Showcase**: Detailed project cards with modal views
- **Skills Display**: Organized skill categories with icons
- **Contact Form**: EmailJS-powered contact form
- **Smooth Scrolling**: Animated section transitions
- **Dark Theme**: Modern dark color scheme

## 🎨 Customization

### Colors
Edit `src/constants/constants.js` to change the color scheme:
```javascript
export const COLORS = {
  PRIMARY: '#64FFDA',
  SECONDARY: '#0A192F',
  // ... more colors
};
```

### Projects
Edit `src/data/projects.js` to add/modify projects.

### Personal Info
Update content in section components:
- `src/components/sections/AboutSection.jsx`
- `src/components/sections/EducationSection.jsx`
- `src/constants/constants.js` (social links)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Sai Reddy Ganapuram**

- GitHub: [@saireddyganapuram](https://github.com/saireddyganapuram)
- LinkedIn: [saireddyganapuram](https://www.linkedin.com/in/saireddyganapuram)
- Email: gsaireddy2005@gmail.com

## 🙏 Acknowledgments

- Three.js community for amazing 3D libraries
- React Three Fiber for React integration
- EmailJS for email service
- All open-source contributors

---

**Note**: This portfolio was recently refactored for better performance, maintainability, and accessibility. All original functionality and design have been preserved while significantly improving code quality.
