# Getting started
1. Install actual node version: `nvm use`
2. Install dependencies by running: `yarn --frozen-lock`
3. Setup credentials using `.env.example`
4. Generate types by running the command: `yarn generate-types <server-url>/api-json`, for example:  
   `yarn generate-types http://localhost:3000/api-json`
5. Run the app using the command: `yarn start`
6. Run `yarn init-project`

# To generate a module
1. Run: `yarn generate-module`
2. Import the module with path aliases, which are auto-added to *tsconfig*.

# To update secrets
Run the following command:  
`eas secret:push --scope project --env-file .env`

# General module structure
- **components**: Reusable components for multiple screens
- **screens**: Module screens (imported in **/app/**)
- **hooks**: Module-specific hooks (can be used by other modules)
- **utils**: Utility functions such as calculations
- **types**: Module-specific types, like entity types
- **api**: API request declarations related to the module, defined by the request-builder
- **constants**: Module constants
- **store**: Module store declarations
- **icons**: Module-related icons
- **assets**: Module-related images
- **layouts**: Module-related layouts
- **contexts**: Module-related contexts

# Architecture explanations
- **/config**: Stores app configurations, importable with `@config`
- **/app**: Contains routes, see docs about [expo-router](https://docs.expo.dev/router/introduction)
- **/modules**: Main part of the application
   - **/modules/core**: Core functions used across the app, like *request-builder* or *api-types*, importable with `@core`
      - **/modules/core/api/request-builder**: Simplifies API function declarations and reduces code size, importable with `@request-builder`
      - **/modules/core/api/hoc**: Collection of *high-order-components*, importable with `@core/hoc`
      - **/modules/core/api/theme**: Theme declarations, importable with `@core/theme`
         - **/modules/core/api/theme/palette**: Collection of available colors, importable with `@palette`
         - **/modules/core/api/theme/fonts**: Font declarations, importable with `@core/fonts`
      - **/modules/core/hooks**: Core hooks for fonts initialization or app initialization, importable with `@core-hooks`
      - **/modules/core/store**: Utilities for creating *zustand* or *redux* stores, importable with `@core-store`
      - **/modules/core/services**: Declarations for app services like *axios*, importable with `@core/services`
      - **/modules/core/assets**: Contains assets like the splash screen and app icon, importable with `@core/assets`
      - **/modules/core/contexts**: General contexts like status bar, importable with `@core/contexts`
      - **/modules/core/types**: General types like *api-types*, importable with `@core/types`
         - **/modules/core/types/api-types**: Auto-generated API types from Swagger, importable with `@api-types`
      - **/modules/core/constants**: General constants like keyboard-avoiding behavior, importable with `@core/constants`
   - **/modules/common**: Common components, layouts, icons, etc., importable with `@common`
      - **/modules/common/components**: Common components created with an atomic design, importable with `@components`
      - **/modules/common/icons**: App SVG icons, importable with `@icons`
      - **/modules/common/types**: Common types, importable with `@common/types`
   - **/modules/navigation**: Contains navigation functions, importable with `@navigation`
      - **/modules/navigation/components**: Navigation components like headers and header icons, importable with `@navigation/components`
      - **/modules/navigation/constants**: Navigation constants like screen options, importable with `@navigation/constants`
      - **/modules/navigation/layouts**: Layouts exported to **/app/_layout.tsx**, importable with `@navigation/layouts`

# Code snippets
**ush** - use useStyles hook
**ish** - create useStyles hook

**ulh** - use useLogic hook
**ilh** - create useLogic hook

**cr** - create request with request builder

**csc** - Create screen component
**cc** - Create component
**clc** - Create layout component

**czs** - Create zustand store
