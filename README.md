# Questigo

A cross-platform monorepo for mobile (iOS & Android) and web applications built with React Native, Next.js, and TypeScript.

## 🚀 Project Structure

```
questigo/
├── apps/
│   ├── web/          # Next.js web application
│   └── mobile/       # React Native mobile app (iOS & Android)
├── packages/
│   ├── shared/       # Shared types and utilities
│   └── ui/           # Shared UI components
├── package.json      # Root package.json with workspace config
├── pnpm-workspace.yaml # pnpm workspace configuration
└── turbo.json        # Turborepo configuration
```

## 🛠️ Technologies

- **Package Manager**: pnpm with workspace support
- **Build System**: Turbo for monorepo orchestration
- **Web**: Next.js 15 with TypeScript, Tailwind CSS
- **Mobile**: React Native with Expo
- **Shared Code**: TypeScript for types and utilities
- **UI Components**: Cross-platform React components

## 📋 Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)
- For mobile development:
  - iOS: Xcode and iOS Simulator
  - Android: Android Studio and Android SDK

## 🏗️ Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd questigo
```

2. Install dependencies:

```bash
pnpm install
```

## 🚀 Development

### Start all development servers:

```bash
pnpm dev
```

### Start specific apps:

```bash
# Web only
pnpm dev:web

# Mobile only
pnpm dev:mobile

# iOS simulator
pnpm ios

# Android emulator
pnpm android
```

### Build all packages and apps:

```bash
pnpm build
```

### Run tests:

```bash
pnpm test
```

### Lint code:

```bash
pnpm lint
```

## 📱 Mobile Development

The mobile app is built with React Native and Expo:

- **iOS**: Requires Xcode and iOS Simulator
- **Android**: Requires Android Studio and Android SDK
- **Web**: Can run in browser via Expo

### Mobile Commands:

```bash
cd apps/mobile

# Start development server
pnpm start

# Run on iOS simulator
pnpm ios

# Run on Android emulator
pnpm android

# Run in web browser
pnpm web
```

## 🌐 Web Development

The web app is built with Next.js:

```bash
cd apps/web

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 📦 Shared Packages

### @questigo/shared

Contains shared types and utilities:

- Common TypeScript interfaces
- Utility functions
- Constants and enums

### @questigo/ui

Contains shared UI components:

- Cross-platform React components
- Consistent styling
- Reusable UI elements

## 🔧 Workspace Management

This project uses pnpm workspaces. To add dependencies:

```bash
# Add to root workspace
pnpm add <package>

# Add to specific app
pnpm add <package> --filter web
pnpm add <package> --filter mobile

# Add to shared packages
pnpm add <package> --filter @questigo/shared
pnpm add <package> --filter @questigo/ui
```

## 🚀 Deployment

### Web App

The web app can be deployed to any platform that supports Next.js:

- Vercel (recommended)
- Netlify
- AWS
- Google Cloud

### Mobile App

The mobile app can be built and deployed using Expo:

- iOS App Store
- Google Play Store
- Expo Go (for development)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, please open an issue in the GitHub repository.
