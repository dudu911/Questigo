<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Questigo Project

This is a monorepo for the Questigo application with the following structure:

## Project Structure

- `/apps/web` - Next.js web application
- `/apps/mobile` - React Native mobile application (iOS and Android)
- `/packages/shared` - Shared types and utilities
- `/packages/ui` - Shared UI components

## Technologies Used

- **Package Manager**: pnpm with workspace support
- **Build System**: Turbo for monorepo orchestration
- **Web**: Next.js 15 with TypeScript, Tailwind CSS
- **Mobile**: React Native with Expo
- **Shared Code**: TypeScript for types and utilities
- **UI Components**: Cross-platform React components

## Development Guidelines

### Code Organization

- Place shared types in `packages/shared/src/types.ts`
- Place shared utilities in `packages/shared/src/utils.ts`
- Place shared UI components in `packages/ui/src/`
- Use workspace references (`@questigo/shared`, `@questigo/ui`) to import shared code

### Platform-Specific Code

- Use conditional imports or platform-specific implementations when needed
- Keep business logic in shared packages when possible
- Platform-specific styling should be handled in the respective apps

### TypeScript

- Use strict TypeScript configuration
- Export types from shared packages
- Maintain type safety across all platforms

### Development Scripts

- `pnpm dev` - Start all development servers
- `pnpm build` - Build all packages and apps
- `pnpm dev:web` - Start only web development server
- `pnpm dev:mobile` - Start only mobile development server
- `pnpm ios` - Start iOS simulator
- `pnpm android` - Start Android emulator

### Best Practices

- Follow React/React Native best practices
- Use functional components with hooks
- Implement proper error handling
- Write reusable components
- Use consistent naming conventions
- Keep components small and focused
- Use TypeScript interfaces for props and data structures
