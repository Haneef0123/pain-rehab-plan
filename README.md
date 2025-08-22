# My 8-Week Desk Rehab Plan

A personal, interactive web application for tracking and following an 8-week desk-focused rehabilitation program for lumbar disc bulge (L4-L5/L5-S1) and cervical lordosis loss recovery.

## 🎯 Overview

This is a **personal use application** designed specifically for desk workers (especially software engineers) dealing with:

- L4-L5/L5-S1 disc bulge
- Cervical lordosis loss
- Long hours at desk work (8-10+ hours daily)

**Key Features:**

- ✅ No authentication required - loads directly to your dashboard
- 🏠 Personal tracking with localStorage (all data stays on your device)
- 📅 8-week progressive rehabilitation program
- 🚨 Daily safety checklists with red flag monitoring
- 💻 Desk break reminders and ergonomic guidance
- 📊 Progress tracking and data export
- 🎥 Video links for all exercises
- 📱 Mobile-responsive design

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Modern web browser

### Installation & Setup

1. **Clone or download** this repository to your local machine

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser** and go to `http://localhost:3000`

5. **Start your rehab journey!** The app will load directly to your personal dashboard.

### Building for Production

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Static Export (for hosting anywhere)

```bash
# Export as static files
npm run build
# The 'out' folder will contain static files you can host anywhere
```

## 📱 How to Use

### Daily Workflow

1. **Safety Check First** - Complete daily safety checklist before exercises
2. **Follow Your Routines** - Morning, desk breaks (every 30-60 min), and evening
3. **Track Progress** - Check off completed exercises and log pain levels
4. **Monitor Red Flags** - Always accessible emergency information

### Navigation

- **Dashboard** - Today's routines and overall progress
- **Current Week** - Detailed view of current week's exercises
- **Red Flags** - Emergency symptoms to watch for
- **Ergonomics** - Workspace setup guidance
- **Nutrition** - Anti-inflammatory diet and lifestyle tips
- **Travel Module** - Prevention during long trips
- **Progress** - Weekly statistics and export data
- **Settings** - Customize app behavior and manage data

### Data Management

- All progress is saved to your browser's localStorage
- Export your data anytime (JSON or CSV format)
- Reset progress if needed through Settings
- No data is sent to external servers

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Dashboard (main page)
│   ├── week/              # Current week detailed view
│   ├── red-flags/         # Emergency information
│   ├── ergonomics/        # Workspace setup guide
│   ├── nutrition/         # Diet and lifestyle
│   ├── travel/            # Travel prevention module
│   ├── progress/          # Progress tracking
│   └── settings/          # App configuration
├── components/            # Reusable UI components
│   ├── Navigation.tsx     # Sidebar navigation
│   ├── forms/            # Form components
│   ├── exercise/         # Exercise-related components
│   └── ui/               # Basic UI components
├── data/                 # Exercise plans and content
│   └── rehabilitationPlan.ts  # 8-week program data
├── types/                # TypeScript type definitions
└── lib/                  # Utility functions
```

## ⚙️ Customization

### Updating Exercise Content

Edit `src/data/rehabilitationPlan.ts` to modify:

- Exercise descriptions and instructions
- Video links
- Routine timing
- Week goals and criteria

### Adding New Pages

Create new pages in `src/app/` following Next.js App Router conventions.

### Styling

The app uses Tailwind CSS. Modify styles by editing className props or updating `src/app/globals.css`.

## 🔧 Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Run production server
npm start

# Lint code
npm run lint

# Type checking
npm run type-check
```

## 📦 Deployment Options

### Netlify (Recommended)

This app is configured for easy deployment to Netlify:

1. **Connect your repository** to Netlify
2. **Build settings** are automatically configured via `netlify.toml`:

   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18.17.0

3. **Deploy** - Netlify will automatically build and deploy your app

### Other Static Hosting Platforms

Since this app exports to static files, you can deploy it to any static hosting service:

- **Vercel**: Connect your repo and deploy (will auto-detect Next.js)
- **GitHub Pages**: Build locally and push the `dist/` folder to a `gh-pages` branch
- **Firebase Hosting**: Use `firebase deploy` after building
- **AWS S3**: Upload the `dist/` folder contents to an S3 bucket

### Local Testing

To test the production build locally:

```bash
npm run build
npx serve dist
```

## 🎯 Program Overview

### Week 1-2: Foundation

- Disc protection and pain centralization
- Cervical lordosis restoration
- Basic McKenzie exercises
- Initial ergonomic setup

### Week 3-4: Motor Control

- Core stabilization development
- Progressive loading
- Improved desk ergonomics

### Week 5-6: Strengthening

- Progressive resistance training
- Functional movements
- Endurance building

### Week 7-8: Integration

- Return to full activities
- Long-term maintenance strategies
- Prevention protocols

## ⚠️ Important Safety Notes

**This app is for personal use and educational purposes only.**

- ⚠️ Always consult healthcare professionals before starting
- 🚨 Stop immediately if you experience red flag symptoms
- 📞 Emergency symptoms require immediate medical attention
- 💡 Listen to your body and progress at your own pace

## 🤝 Support & Maintenance

This is a personal application. For technical issues:

1. Check the browser console for errors
2. Try clearing localStorage (Settings → Reset All Data)
3. Ensure you're using a modern browser
4. Update to the latest version

## 📝 License & Usage

This project is for personal use. Feel free to modify and adapt for your own rehabilitation needs.

**Disclaimer:** This application provides general exercise guidance and should not replace professional medical advice. Always consult with qualified healthcare providers for personalized treatment plans.
