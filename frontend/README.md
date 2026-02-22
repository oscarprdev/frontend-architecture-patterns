# Microfrontend Architecture

A clean architecture frontend application with microfrontends using Vue 3, Vite, TypeScript, and Tailwind CSS.

## Structure

- `apps/entry` - Shell/orchestrator application with sidebar navigation
- `features/flights` - Flights microfrontend feature

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The entry app will be available at `http://localhost:5173` (or the next available port).

## How It Works

- The **entry app** provides the shell with a sidebar navigation
- Clicking "Flights" in the sidebar lazily loads the **flights feature** via Vue Router
- The flights feature is exposed through its public API (`features/flights/src/index.ts`)
- Workspace packages are resolved automatically through npm workspaces

## Adding New Features

1. Create a new folder under `features/`
2. Set up a Vue 3 + Vite + TypeScript project
3. Export your root component from `src/index.ts`
4. Add the feature as a workspace dependency in `apps/entry/package.json`
5. Add a lazy route in `apps/entry/src/router/index.ts`
6. Add a menu item in `apps/entry/src/components/Sidebar.vue`
