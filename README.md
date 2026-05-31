# DevStory

Transform Your GitHub Journey Into A Modern Career Narrative

## Overview

DevStory is a premium 2026 SaaS-style GitHub profile visualization that turns GitHub statistics into a professional developer story. Instead of basic analytics, it presents your growth through polished metrics, motion, and recruiter-ready visualization.

### Why DevStory?

- **Premium Hacker Aesthetic** - Cyberpunk-inspired but professional design
- **Smooth Animations** - Framer Motion powers immersive interactions
- **Developer-Focused Metrics** - XP, Levels, Skills, Achievements
- **Recruiter-Worthy** - Tell your story in a way that stands out

## Features

### Character Card
- Transform GitHub stats into RPG metrics
- Level system based on stars and contributions
- Main and secondary programming powers
- XP tracking and progression

### Repository Worlds
- Each repository becomes an explorable world
- Difficulty rating based on star count
- Technology and stats displayed
- Hover animations and interactive cards

### Skill Tree
- Visual skill tree showing programming languages
- Skill mastery levels based on usage frequency
- Glowing connections between skills
- Beautiful animated visualization

### Achievement Board
- 10+ achievements to unlock
- Progress tracking
- Visual badges with animations
- Unlock conditions based on GitHub activity

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Lightning-fast build tool
- **TypeScript** - Type-safe code

### Styling & Animation
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Production animations
- **PostCSS** - CSS processing

### Data
- **Axios** - HTTP client
- **GitHub REST API** - GitHub data

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Usage

1. Start the dev server: `npm run dev`
2. Navigate to `http://localhost:3000`
3. Enter your GitHub username
4. Watch your profile transform into an adventure!

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero/           # Landing page hero
│   ├── Navbar/         # Navigation bar
│   ├── CharacterCard/  # RPG character stats
│   ├── RepositoryWorlds/ # Repository cards
│   ├── SkillTree/      # Programming languages tree
│   ├── AchievementBoard/ # Achievements showcase
│   └── Footer/         # Footer
├── pages/              # Page components
├── services/           # API services
│   └── githubApi.ts    # GitHub API client
├── hooks/              # Custom React hooks
│   └── useGithubData.ts # GitHub data fetching
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## Color Palette

- **Background**: `#050505`, `#0B0B0B`, `#111111`
- **Accent Cyan**: `#00F5FF`
- **Accent Purple**: `#7B61FF`
- **Accent Green**: `#00FF9D`
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#B8B8B8`

## How It Works

### XP & Level System
- Base XP = (Stars × 100) + (Forks × 50) + (Repos × 20)
- Level = Floor(XP / 1000) + 1

### Difficulty Rating
- **Legendary**: 100+ stars
- **Epic**: 50-99 stars
- **Rare**: 10-49 stars
- **Common**: 0-9 stars

### Achievements
Unlock achievements by:
- Creating your first repository
- Getting 100+ stars
- Mastering multiple languages
- Building open-source projects
- Growing your follower base

## Development

### Available Scripts

```bash
npm run dev        # Start dev server on port 3000
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

### Environment Variables

Currently uses public GitHub API. No authentication required for public data.

## Future Enhancements

- Contribution Galaxy (3D particle visualization)
- GitHub authentication for private data
- Custom themes and color schemes
- Share-worthy profile screenshots
- Social sharing features
- Language-specific achievements

## License

MIT

## 👨‍💻 Contributing

Contributions welcome! Feel free to submit issues and pull requests.

---

**DevStory** - Where Code Becomes Story
