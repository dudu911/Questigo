# Mobile App Source Structure

This directory contains the organized source code for the Questigo mobile application.

## Directory Structure

```
src/
├── components/          # Reusable UI components
│   └── QuestCard.tsx   # Individual quest display component
├── constants/          # App constants and sample data
│   └── sampleData.ts   # Sample quest data and initial state
├── hooks/              # Custom React hooks
│   └── useQuestProgress.ts  # Hook for managing quest progress
├── screens/            # Screen/page components
│   └── HomeScreen.tsx  # Main home screen
├── types/              # TypeScript type definitions (moved from root)
│   └── nativewind.d.ts # NativeWind className support
├── utils/              # Utility functions
│   └── questUtils.ts   # Quest-related utility functions
└── index.ts            # Main export file for internal imports
```

## Import Patterns

### Internal Imports

Use relative imports within the src directory:

```typescript
import { QuestCard } from "../components/QuestCard";
import { useQuestProgress } from "../hooks/useQuestProgress";
```

### External Imports

Use workspace packages for shared code:

```typescript
import { Quest, generateId } from "@questigo/shared";
import { IntroCarousel } from "@questigo/ui/dist/native";
```

## Best Practices

1. **Components**: Keep components small and focused on a single responsibility
2. **Hooks**: Extract stateful logic into custom hooks for reusability
3. **Utils**: Place pure functions that can be unit tested easily
4. **Constants**: Store static data and configuration values
5. **Types**: Use TypeScript interfaces and types for type safety

## Path Aliases

The tsconfig.json is configured with path aliases:

- `~/*` maps to `src/*` for cleaner imports (when supported by Metro bundler)

## Future Enhancements

- Add `src/services/` for API calls and external service integrations
- Add `src/navigation/` when implementing React Navigation
- Add `src/store/` for state management (Redux, Zustand, etc.)
- Add `src/styles/` for shared styling constants and themes
